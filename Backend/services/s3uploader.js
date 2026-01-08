const {
  S3Client,
  PutObjectCommand,
  DeleteObjectCommand,
} = require("@aws-sdk/client-s3");
const dotenv = require("dotenv");
const crypto = require("crypto");
const fs = require("fs");
const sharp = require("sharp");

dotenv.config();

const s3 = new S3Client({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  },
});

const generateFileName = (originalName) => {
  const ext = originalName.split(".").pop();
  return `${crypto.randomBytes(8).toString("hex")}.${ext}`;
};

// Image compressor
const compressImage = async (buffer) => {
  try {
    return await sharp(buffer)
      .resize({ width: 1024, withoutEnlargement: true })
      .jpeg({ quality: 80 })
      .toBuffer();
  } catch (err) {
    console.error("Image compression failed:", err);
    return buffer;
  }
};

const s3Uploader = async (file, folder) => {
  try {
    const fileName = `${folder}/${generateFileName(file.name)}`;
    let fileContent = fs.readFileSync(file.tempFilePath);

    // Compress only if it's an image
    if (file.mimetype.startsWith("image/")) {
      fileContent = await compressImage(fileContent);
    }

    const uploadParams = {
      Bucket: process.env.AWS_S3_BUCKET_NAME,
      Key: fileName,
      Body: fileContent,
      ContentType: file.mimetype,
    };

    await s3.send(new PutObjectCommand(uploadParams));

    return `https://${process.env.AWS_S3_BUCKET_NAME}.s3.${process.env.AWS_REGION}.amazonaws.com/${fileName}`;
  } catch (error) {
    console.error("Error uploading to S3:", error);
    return false;
  }
};

// Deleter
const s3Deleter = async (fileUrl) => {
  try {
    const key = fileUrl.split(`amazonaws.com/`)[1];
    await s3.send(
      new DeleteObjectCommand({
        Bucket: process.env.AWS_S3_BUCKET_NAME,
        Key: key,
      })
    );
    return true;
  } catch (error) {
    console.error("Error deleting from S3:", error);
    return false;
  }
};

module.exports = { s3Uploader, s3Deleter };
