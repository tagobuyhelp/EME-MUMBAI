import Image from "next/image";

export default function AnimationVfxTalentedStudentsWork() {
  const projects = [
    {
      id: 1,
      title: "2D Graphics Design",
      image:
        "https://eme25.s3.ap-south-1.amazonaws.com/assets/images/Animation_VFX_Landing/Image2d.jpg",
      category: "Graphics",
    },
    {
      id: 2,
      title: "VFX Design",
      image:
        "https://eme25.s3.ap-south-1.amazonaws.com/assets/images/Animation_VFX_Landing/ImageVfx.jpg",
      category: "VFX",
    },
    {
      id: 3,
      title: "3D Character Design",
      image:
        "https://eme25.s3.ap-south-1.amazonaws.com/assets/images/Animation_VFX_Landing/Image3d.jpg",
      category: "3D Design",
    },
    {
      id: 4,
      title: "VFX Animation Image",
      image:
        "https://eme25.s3.ap-south-1.amazonaws.com/assets/images/Animation_VFX_Landing/ImageVfxAnimation.jpg",
      category: "Animation",
    },
    {
      id: 5,
      title: "VFX Design",
      image:
        "https://eme25.s3.ap-south-1.amazonaws.com/assets/images/Animation_VFX_Landing/ImageVfxDesign.jpg",
      category: "VFX",
    },
    {
      id: 6,
      title: "3D Character Design",
      image:
        "https://eme25.s3.ap-south-1.amazonaws.com/assets/images/Animation_VFX_Landing/Image3dCharDesign.jpg",
      category: "3D Design",
    },
    {
      id: 7,
      title: "VFX Animation Image",
      image:
        "https://eme25.s3.ap-south-1.amazonaws.com/assets/images/Animation_VFX_Landing/VfxAnimationBearImage.jpg",
      category: "Animation",
    },
  ];

  return (
    <div className="w-full py-6 px-4 md:px-6">
      <div className="max-w-[1180px] mx-auto">
        {/* Content */}
        <div className="relative z-10">
          {/* Header */}
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-[18px] md:text-[22px] font-bold text-white mb-2">
              The Work Created by Our{" "}
              <span className="text-[#E87D1A]">Talented Students</span>
            </h2>
            <p className="text-[12px] md:text-[14px] text-[#FAF9F9] font-base max-w-2xl mx-auto">
              Explore innovative projects designed by the next generation of
              creators
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6">
            {/* Top row - 4 projects */}
            {projects.slice(0, 4).map((project, index) => (
              <div
                key={project.id}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <div className="aspect-[4/3] relative">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-3">
                  <h3 className="text-[12px] md:text-[14px] text-[#232D63] font-bold  text-center">
                    {project.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom row - 3 projects centered */}
          <div className="flex justify-center mt-4 md:mt-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 w-full max-w-[880px]">
              {projects.slice(4, 7).map((project, index) => (
                <div
                  key={project.id}
                  className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  <div className="aspect-[4/3] relative">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-3">
                    <h3 className="text-[12px] md:text-[14px] text-[#232D63] font-bold  text-center">
                      {project.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
