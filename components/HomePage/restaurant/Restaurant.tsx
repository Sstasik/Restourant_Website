import OurResturant1 from '@/asets/images/image_ourResturant_1.png';
import OurResturant2 from '@/asets/images/image_ourResturant_2.png';
import OurResturant3 from '@/asets/images/image_ourResturant_3.png';
import arrowRight from '@/asets/icons/Group.svg';
import cooking1 from '@/asets/icons/cooking1.png';
import growth1 from '@/asets/icons/growth1.png';

import Image from 'next/image';
import Link from 'next/link';

export default function Restaurant() {
  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-xl text-[#CC3333] font-bold mb-5">
          OUR RESTAURANT
        </h1>
        <div className="flex flex-row">
          <div className="flex flex-col mt-[35px] mr-10">
            <div className="flex flex-row">
              <Image src={OurResturant1} alt="OurResturant1" />
              <Image src={OurResturant2} alt="OurResturant2" />
            </div>
            <Image src={OurResturant3} alt="OurResturant3" />
          </div>
          <div>
            <h1 className=" text-4xl font-bold text-[#2A435D] mb-4">
              For every specialoccasion
              <br />
              there`s heritaste
            </h1>
            <p className=" text-lg text-[#2A435D] mb-9 font-semibold ">
              Indignation and dislike men who are so beguiled demoralized by the
              charms
              <br />
              of pleasure of the moment. Success Story.
            </p>
            <div className="flex flex-row">
              <div className=" ">
                <div className="border-2 border-[#CC3333] rounded-[100%] py-[21px] px-[24px] mr-5">
                  <Image width={50} height={50} src={growth1} alt="growth1" />
                </div>
              </div>
              <div className="flex flex-col">
                <h1 className="text-4xl font-bold text-[#CC3333] mb-3">
                  Success Story
                </h1>
                <p className="text-lg text-[#2A435D] font-semibold mb-3">
                  Certain circumstances and owing to the claims of
                  <br /> duty obligations of business it will frequently.
                </p>
                <div className="ml-6">
                  <Link href={'/about_us'} className="flex flex-row">
                    Read More
                    <Image
                      src={arrowRight}
                      className=" fill-black"
                      style={{ fill: 'black' }}
                      alt="rightArrow"
                    />
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex flex-row mt-4">
              <div className="">
                <div className="border-2 border-[#CC3333] rounded-[100%] py-[21px] px-[24px] mr-5">
                  <Image src={cooking1} alt="cooking1" />
                </div>
              </div>
              <div className="flex flex-col">
                <h1 className="text-4xl font-bold text-[#CC3333] mb-3">
                  Passionate Chefs
                </h1>
                <p className="text-lg text-[#2A435D] font-semibold mb-3">
                  Duty or the obligations of business it frequently occur
                  pleasures have
                  <br /> to be repudiated.
                </p>
                <div className="ml-4">
                  <Link href={'/about_us'} className="flex flex-row">
                    Read More <Image src={arrowRight} alt="rightArrow" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
