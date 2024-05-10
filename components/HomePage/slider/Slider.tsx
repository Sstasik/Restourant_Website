import sliderImg from '@/asets/images/sliderImg.svg';
import Image from 'next/image';
import twitterIcon from '@/asets/icons/twitter.svg';
import facebookIcon from '@/asets/icons/facebook.svg';
import instagramIcon from '@/asets/icons/instagram.svg';
import linkedinIcon from '@/asets/icons/linkedin.svg';
import Link from 'next/link';

export default function Slider() {
  const content = [
    {
      id: 1,
      svg: sliderImg,
      title: 'Enjoy our chicken burger fast food',
      subTitle: 'Best in Town',
      price: '10.50',
      button: 'Order Now',
      twiterIcon: twitterIcon,
      facebookIcon: facebookIcon,
      instagramIcon: instagramIcon,
      linkedinIcon: linkedinIcon,
    },
  ];
  return (
    <>
      <div className="mb-[30px] flex justify-center ">
        {content.map((item) => (
          <div key={item.id} className="">
            <div className="flex flex-row max-h-[250px]">
              <div>
                <div className="max-w-[400px] text-[#CC3333] font-bold">
                  <p className="">{item.subTitle}</p>
                  <h1 className=" text-4xl font-semibold text-[#2A435D]">
                    {item.title.toUpperCase()}
                  </h1>
                </div>
                <div className="flex flex-row gap-[15px] items-center mt-[70px] ml-[120px]">
                  <Link
                    href={'/items'}
                    className=" px-[15px] py-[10px] bg-[#CC3333] text-[#FFF8EE] text-2xl rounded-lg font-bold">
                    {item.button}
                  </Link>
                  <p className="text-xl text-[#2A435D] font-medium">
                    Price : ${item.price}
                  </p>
                </div>
              </div>
              <div className="">
                <Image src={item.svg} alt="sliderImg" />
              </div>
            </div>
            <div className="ml-[-160px]">
              <nav className="flex flex-row items-center gap-[15px] ">
                <Image src={item.twiterIcon} alt="twiterIcon" />
                <Image src={item.facebookIcon} alt="facebookIcon" />
                <Image src={item.instagramIcon} alt="instagramIcon" />
                <Image src={item.linkedinIcon} alt="linkedinIcon" />
              </nav>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
