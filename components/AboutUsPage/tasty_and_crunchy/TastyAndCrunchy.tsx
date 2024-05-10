import Image from 'next/image';
import ourChef from '@/asets/images/image_ourChef.png';
export default function TastyAndCrunchy() {
  return (
    <>
      <div className="bg-[#FFDFDF] max-h-300px">
        <div className="flex flex-row justify-evenly">
          <div className="flex flex-col ">
            <p className="text-2xl text-[#CC3333] mt-5 mb-2">
              TASTY AND CRUNCHY
            </p>
            <h1 className="text-4xl font-bold text-[#2A435D] mb-4">Our Chef</h1>
            <p className="text-lg text-[#2A435D] max-w-[650px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incidition ullamco laboris nisi ut aliquip ex ea
              commodo condor consectetur adipiscing elit, sed do eiusmod tempor
              incidition ullam.
            </p>
            <div className="flex justify-end mt-8 ">
              <button className="text-2xl text-[#FFF8EE] bg-[#CC3333] mr-[-50px] px-4 py-2 rounded-2xl ">
                VIEW OUR ALL MANU
              </button>
            </div>
          </div>
          <div>
            <Image src={ourChef} alt="Chef" />
          </div>
        </div>
      </div>
    </>
  );
}
