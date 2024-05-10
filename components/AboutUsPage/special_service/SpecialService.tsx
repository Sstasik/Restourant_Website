export default function SpecialService() {
  return (
    <>
      <div className="flex flex-col justify-center items-center text-center mt-14 mb-14">
        <div className="mb-10">
          <h1 className="text-4xl text-[#2A435D] font-bold mb-3">
            SPECIAL SERVICE
          </h1>
          <p className="text-lg text-[#CC3333] font-bold">
            What Special services we are offering now
          </p>
        </div>
        <div className="flex flex-row  gap-5">
          <div className="max-w-[400px]  ">
            <h1 className="text-4xl text-[#CC3333] font-bold mb-5">
              Birthday Party
            </h1>
            <p className=" leading-5">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry`s standard dummy text
              ever since the 1500s.
            </p>
          </div>
          <div className="max-w-[400px] ">
            <h1 className="text-4xl text-[#CC3333] font-bold mb-5">
              Wedding Party
            </h1>
            <p className=" leading-5">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry`s standard dummy text
              ever since the 1500s.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
