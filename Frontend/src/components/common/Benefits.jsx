

export default function Benefits() {
    const benefits = [
        "Comprehensive Course Selection ",
        "Career Advancement",
        "Industry-Approved Certification",
        "Experts Trainers",
    ];
    return (
        <div className="grid w-full gap-[20px] bg-[#ffffff]  max-w-[1380px] mx-auto  grid-cols-2 lg:grid-cols-4 justify-items-center place-content-center  py-[40px]  px-[20px] md:px-24">
            {benefits.map((data, index) => (
                <div
                    key={index}
                    className="w-[130px] lg:w-[250px] lg:h-[200px] py-[20px] lg:py-[30px] px-[10px] border border-[#00A2E7] rounded-xl flex flex-col justify-start shadow-md shadow-blue-400 hover:shadow-blue-400 hover:shadow-lg cursor-pointer"
                >
                    <h1 className="text-[#070B23] text-[15px] lg:text-[22px]  font-[500] ">
                        {data}
                    </h1>
                </div>
            ))}
        </div>
    )
}
