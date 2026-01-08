import React from "react";
import Image from "next/image";

export function StudentCard({ student }) {
  return (
    <div className="w-[220px] md:w-[250px] bg-white rounded-2xl shadow-lg overflow-hidden">
      <div className="relative">
        {/* Student Image */}
        <Image
          src={student.img}
          alt={student.title}
          width={250}
          height={250}
          className="object-cover object-top w-full h-[280px] rounded-2xl"
        />

        {/* Gradient Overlay */}
        <div className={student.overlay}></div>

        {/* Dynamic Text Content */}
        <div className="absolute bottom-3 left-3 text-white">
          <p className={student.titleStyle}>{student.title}</p>
          <p className={student.subtitleStyle}>{student.subtitle}</p>
        </div>
      </div>
    </div>
  );
}
