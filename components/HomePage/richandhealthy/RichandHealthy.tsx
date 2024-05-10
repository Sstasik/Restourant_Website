import Image from 'next/image';
import richHealthy1 from '@/asets/images/image_richHealthy_1.svg';
import richHealthy2 from '@/asets/images/image_richHealthy_2.svg';
import star from '@/asets/icons/Star.svg';
import Link from 'next/link';
export default function RichandHealthy() {
  return (
    <>
      <div className=" flex flex-col items-center mt-12">
        <div className=" text-xl font-semibold text-[#2A435D] mb-4">
          <h1>RICH & HEALTHY</h1>
        </div>
        <div className="flex flex-row">
          <Image src={richHealthy1} alt="richHealthy1" />
          <div className="flex flex-col ml-7">
            <h1 className="text-4xl text-[#CC3333] font-bold">
              Highest quality artisangrains,
              <br /> proteins & seasonal ingredients
            </h1>
            <p className="text-2xl text-[#2A435D] max-w-[800px] mt-5">
              Righteous indignation and dislike men who are so beguiled and
              demoralized by the charms of pleasure of the moment, so blinded by
              desires, that they cannot foresee.
            </p>
            <div className="flex flex-row mt-[70px] ">
              <div className="mr-7">
                <ul className="text-2xl text-[#2A435D] ">
                  <li className="flex flex-row">
                    <Image src={star} alt="star" />
                    Simple and easy to distinguish
                  </li>
                  <li className="flex flex-row my-[30px]">
                    <Image src={star} alt="star" />
                    Pleasure of the momentblinded desire
                  </li>
                  <li className="flex flex-row">
                    <Image src={star} alt="star" />
                    Able to do what we like best
                  </li>
                </ul>
                <div className="flex justify-center text-4xl mt-24">
                  <Link
                    href={'/items'}
                    className="bg-[#CC3333] text-[#FFF8EE] font-bold px-20 py-3 rounded-3xl">
                    Reat More
                  </Link>
                </div>
              </div>
              <Image
                className="mt-[-43px]"
                src={richHealthy2}
                alt="richHealthy2"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
