/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
      {
        protocol: "https",
        hostname: "img.freepik.com",
      },
      {
        protocol: "https",
        hostname: "img.youtube.com",
      },
      {
        protocol: "https",
        hostname: "i.ytimg.com",
      },
      {
        protocol: "https",
        hostname: "www.facebook.com",
      },
      {
        protocol: "https",
        hostname: "eme25.s3.ap-south-1.amazonaws.com",
      },
      {
        protocol: "https",
        hostname: "drive.google.com",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "www.mumbai.emeacademy.co.in",
          },
        ],
        destination: "https://mumbai.emeacademy.co.in/:path*",
        permanent: true,
      },
      {
        source: "/linkedin-course",
        destination: "/best-linkedin-course-for-career-hiring-growth",
        permanent: true,
      },
      {
        source: "/best-data-science-course-in-kolkata",
        destination: "/best-data-science-course-in-mumbai",
        permanent: true,
      },
      {
        source: "/data-science-course-in-kolkata",
        destination: "/data-science-course-in-mumbai",
        permanent: true,
      },
      {
        source: "/best-data-analytics-course-in-kolkata",
        destination: "/best-data-analytics-course-in-mumbai",
        permanent: true,
      },
      {
        source: "/data-analytics-course-in-kolkata",
        destination: "/data-analytics-course-in-mumbai",
        permanent: true,
      },
      {
        source: "/machine-learning-course-in-kolkata",
        destination: "/machine-learning-course-in-mumbai",
        permanent: true,
      },
      {
        source: "/generative-ai-course-training-in-kolkata",
        destination: "/generative-ai-course-training-in-mumbai",
        permanent: true,
      },
      {
        source: "/cyber-security-course-in-kolkata",
        destination: "/cyber-security-course-in-mumbai",
        permanent: true,
      },
      {
        source: "/best-graphic-design-course-in-kolkata",
        destination: "/best-graphic-design-course-in-mumbai",
        permanent: true,
      },
      {
        source: "/graphic-design-course-in-kolkata",
        destination: "/graphic-design-course-in-mumbai",
        permanent: true,
      },
      {
        source: "/animation-vfx-institute-kolkata",
        destination: "/animation-vfx-institute-mumbai",
        permanent: true,
      },
      {
        source: "/best-animation-and-vfx-institute-in-kolkata",
        destination: "/best-animation-and-vfx-institute-in-mumbai",
        permanent: true,
      },
      {
        source: "/motion-graphics-course-in-kolkata",
        destination: "/motion-graphics-course-in-mumbai",
        permanent: true,
      },
      {
        source: "/ui-ux-design-course-in-kolkata",
        destination: "/ui-ux-design-course-in-mumbai",
        permanent: true,
      },
      {
        source: "/best-mern-stack-development-course-in-kolkata",
        destination: "/best-mern-stack-development-course-in-mumbai",
        permanent: true,
      },
      {
        source: "/best-mern-stack-training-course-in-kolkata",
        destination: "/best-mern-stack-training-course-in-mumbai",
        permanent: true,
      },
      {
        source: "/best-mean-stack-training-course-in-kolkata",
        destination: "/best-mean-stack-training-course-in-mumbai",
        permanent: true,
      },
      {
        source: "/mean-stack-training-course-in-kolkata",
        destination: "/mean-stack-training-course-in-mumbai",
        permanent: true,
      },
      {
        source: "/best-php-mysql-training-institute-in-kolkata",
        destination: "/best-php-mysql-training-institute-in-mumbai",
        permanent: true,
      },
      {
        source: "/php-mysql-training-institute-in-kolkata",
        destination: "/php-mysql-training-institute-in-mumbai",
        permanent: true,
      },
      {
        source: "/wordpress-development-training-institute-in-kolkata",
        destination: "/wordpress-development-training-institute-in-mumbai",
        permanent: true,
      },
      {
        source: "/wordpress-training-institute-in-kolkata",
        destination: "/wordpress-training-institute-in-mumbai",
        permanent: true,
      },
      {
        source: "/best-hr-training-course-in-kolkata",
        destination: "/best-hr-training-course-in-mumbai",
        permanent: true,
      },
      {
        source: "/human-resource-course-in-kolkata",
        destination: "/human-resource-course-in-mumbai",
        permanent: true,
      },
      {
        source: "/advanced-digital-marketing-certificate-course-in-kolkata",
        destination: "/advanced-digital-marketing-certificate-course-in-mumbai",
        permanent: true,
      },
      {
        source: "/digital-marketing-crash-course-in-kolkata",
        destination: "/digital-marketing-crash-course-in-mumbai",
        permanent: true,
      },
      {
        source: "/diploma-in-advance-digital-marketing-courses-in-kolkata",
        destination: "/diploma-in-advance-digital-marketing-courses-in-mumbai",
        permanent: true,
      },
      {
        source: "/maincourse/digital-marketing-course-in-kolkata",
        destination: "/maincourse/digital-marketing-course-in-mumbai",
        permanent: true,
      },
      {
        source: "/maincourse/sap-training-kolkata",
        destination: "/maincourse/sap-training-mumbai",
        permanent: true,
      },
      {
        source: "/maincourse/graphic-design",
        destination: "/maincourse/graphic-design-course-in-mumbai",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
