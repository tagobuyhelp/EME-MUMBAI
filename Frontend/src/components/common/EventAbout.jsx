import Image from "next/image";
import Marquee from "react-fast-marquee";

export const EventAbout = () => {
  return (
    <div className="w-full  max-w-[1380px] mx-auto flex flex-col items-start lg:gap-5 py-5 lg:py-7  px-[20px] md:px-24">
      <div className="w-full flex items-center justify-around flex-nowrap mx-auto overflow-hidden whitespace-nowrap flex-shrink-0 group py-5 space-x-8 md:space-x-16">
        <Marquee pauseOnHover autoFill>
          <div className="grid grid-cols-6 grid-rows-2 gap-4 md:gap-6 w-[2000px] lg:w-[2400px] pr-6">
            {" "}
            {/* Added pr-8 for padding-right */}
            {/* EventZero - div2 */}
            <Image
              className="col-start-1 row-start-2 h-[200px] w-full lg:h-[250px] object-cover shadow-[2px_9px_42px_0px_rgba(0,0,0,0.08)] rounded-2xl"
              width={500}
              height={500}
              src="https://eme25.s3.ap-south-1.amazonaws.com/assets/images/Home/gallery/img10.png"
              alt="event 7 Image"
            />
            {/* EventOne - div3 */}
            <Image
              className="col-start-2 md:mr-8 row-span-2 h-full w-full object-cover shadow-[2px_9px_42px_0px_rgba(0,0,0,0.08)] rounded-2xl"
              width={500}
              height={500}
              src="https://eme25.s3.ap-south-1.amazonaws.com/assets/images/Home/gallery/img19.png"
              alt="event 5 Image"
            />
            {/* EventTwo - div4 */}
            <Image
              className="col-start-3 row-start-1 h-[200px] w-full lg:h-[250px] object-cover shadow-[2px_9px_42px_0px_rgba(0,0,0,0.08)] rounded-2xl"
              width={500}
              height={500}
              src="https://eme25.s3.ap-south-1.amazonaws.com/assets/images/Home/gallery/img11.png"
              alt="event Sports Image"
            />
            {/* EventThree - div5 */}
            <Image
              className="col-start-3 row-start-2 h-[200px] w-full lg:h-[250px] object-cover shadow-[2px_9px_42px_0px_rgba(0,0,0,0.08)] rounded-2xl"
              width={500}
              height={500}
              src="https://eme25.s3.ap-south-1.amazonaws.com/assets/images/Home/gallery/img13.png"
              alt="event 2 Image"
            />
            {/* EventFour - div6 */}
            <Image
              className="col-start-4 col-span-2 row-span-2 h-[430px] md:h-[525px] w-full object-cover shadow-[2px_9px_42px_0px_rgba(0,0,0,0.08)] rounded-2xl"
              width={500}
              height={500}
              src="https://eme25.s3.ap-south-1.amazonaws.com/assets/images/Home/gallery/Image6.webp"
              alt="event 6 Image"
            />
            {/* EventFive - div7 */}
            <Image
              className="col-start-6 md:mr-6 row-start-1 h-[200px] w-full lg:h-[250px] object-cover shadow-[2px_9px_42px_0px_rgba(0,0,0,0.08)] rounded-2xl"
              width={500}
              height={500}
              src="https://eme25.s3.ap-south-1.amazonaws.com/assets/images/Home/gallery/img14.png"
              alt="event 3 Image"
            />
            {/* EventSix - div8 */}
            <Image
              className="col-start-6 md:mr-6 row-start-2 h-[200px] w-full lg:h-[250px] object-cover shadow-[2px_9px_42px_0px_rgba(0,0,0,0.08)] rounded-2xl"
              width={500}
              height={500}
              src="https://eme25.s3.ap-south-1.amazonaws.com/assets/images/Home/gallery/img15.png"
              alt="event 2 Image"
            />
            {/* EventSeven - Additional item in remaining grid cell */}
            <Image
              className="col-start-1 row-start-1 h-[200px] w-full lg:h-[250px] object-cover shadow-[2px_9px_42px_0px_rgba(0,0,0,0.08)] rounded-2xl"
              width={500}
              height={500}
              src="https://eme25.s3.ap-south-1.amazonaws.com/assets/images/Home/gallery/Img9.png"
              alt="event 4 Image"
            />
          </div>
        </Marquee>
      </div>
    </div>
  );
};
