import { Footer } from "@/components/common/Footer";
import { Header } from "@/components/common/Header";

export const metadata = {
  alternates: {
    canonical: "https://emeacademy.co.in/admission-tearms-condition",
  },
};

export default function page() {
  return (
    <main className="flex flex-col justify-center items-center w-full min-h-screen  bg-[#070B23]">
      <Header />
      <div className="w-full  bg-[#070B23] min-h-screen flex flex-col  justify-start gap-[50px] items-center pt-[150px] py-[46px] px-[20px] md:px-24  max-w-[1380px] mx-auto">
        <div className="flex gap-y-2 min-h-[calc(100vh-100px)] w-[100%] justify-center overflow-x-hidden bg-black/10">
          <div className="h-full w-11/12 max-w-maxContent mx-auto bg-white text-black mt-6 mb-6 py-4 px-6">
            <div className="flex flex-col items-center gap-y-5  ">
              <h1 className="text-xl font-bold flex flex-col items-center">
                TERMS AND CONDITIONS{" "}
              </h1>

              <div className="flex flex-col gap-2 items-start w-full">
                <h1 className="text-lg font-bold">Declaration</h1>
                <div className="flex flex-col gap-[10px] text-sm lg:text-[15px]">
                  <p>
                    <span className="font-bold"> 1. </span>I understand that EME
                    Academy is a training center and does not promise employment
                    upon completion of training.
                  </p>
                  <p>
                    <span className="font-bold"> 2. </span> I state that the
                    entries made by me in the Application Form are complete and
                    true to the best of my knowledge and based on records.
                  </p>
                  <p>
                    <span className="font-bold"> 3. </span> I undertake to
                    present the original documents immediately upon demand by
                    the concerned authorities of the Institute.
                  </p>
                  <p>
                    <span className="font-bold"> 4. </span> I promise to abide
                    by the admissible rules and regulations, concerning
                    discipline, attendance, etc. of the Institute (EME Academy),
                    and also to follow the Code of Conduct prescribed for the
                    Students of the Institute, as in force from time to time and
                    subsequent changes/modifications/amendment made thereto. I
                    acknowledge that, the Institute has the authority for taking
                    punitive actions against me for violation and/or
                    non-compliance of the same.
                  </p>
                  <p>
                    <span className="font-bold"> 5. </span> I understand that,
                    75% attendance in classes is compulsory and I commit myself
                    to adhere to the same. I also understand, in case my
                    attendance falls short, for any reason, the competent
                    authority of the Institute may take such punitive action
                    against me, as may be deemed fit and proper.
                  </p>
                  <p>
                    <span className="font-bold"> 6. </span> I will neither join
                    in any coercive agitation/strike for the purpose of forcing
                    the authorities of the Institute to solve any problem, nor I
                    will participate in any activity which has a tendency to
                    disturb the peace and tranquility of life of the EME Academy
                    premises
                  </p>
                  <p>
                    <span className="font-bold"> 7. </span> I will not indulge
                    in, nor tolerate ragging, in any form, even in words or
                    intentions, and I accept to give an undertaking in the
                    prescribed format for the same.
                  </p>
                  <p>
                    <span className="font-bold"> 8. </span> I shall be solely
                    responsible for my involvement in any kind of undesirable /
                    in disciplinary activities outside the premises, and shall
                    be liable for punishment as per the law of the land
                  </p>
                  <p>
                    <span className="font-bold"> 9. </span> I further understand
                    that, the Institute shall in no way provide any support to
                    me and will not be held responsible for my any such action.
                  </p>
                  <p>
                    <span className="font-bold"> 10. </span> I understand that
                    my admission may be cancelled, at any stage, if I am found
                    ineligible and/or the information provided by me is found to
                    be incorrect.
                  </p>
                  <p>
                    <span className="font-bold"> 11. </span> I, hereby undertake
                    to inform the Institute, about any changes in information
                    submitted by me, in the Application Form and any other
                    documents, including change in addresses and phone Nos.,
                    from time to time.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </main>
  );
}
