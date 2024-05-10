import Image from 'next/image';
import dietLogo from '@/asets/icons/diet1.png';
import cookingLogo from '@/asets/icons/cooking1.png';
import candleLogo from '@/asets/icons/candle1.png';
import Link from 'next/link';

export default function WhyTheBest() {
  const Cards = [
    {
      src: cookingLogo,
      alt: 'cookingLogo',
      num: 1,
      title: 'Passionate Chefs',
      desc: 'Beguiled and demoralized by all get charms pleasure the moments ever so blinded by desire.',
    },
    {
      src: dietLogo,
      alt: 'dietLogo',
      num: 2,
      title: '100 % Fresh Foods',
      desc: 'Beguiled and demoralized by all get charms pleasure the moments ever so blinded by desire.',
    },
    {
      src: candleLogo,
      alt: 'candleLogo',
      num: 3,
      title: 'Memorable Ambience',
      desc: 'Beguiled and demoralized by all get charms pleasure the moments ever so blinded by desire.',
    },
  ];

  return (
    <>
      <div className=" flex flex-col items-center">
        <h1 className=" text-xl font-bold text-[#CC3333] mb-10">
          Why We are the best
        </h1>

        <div className="flex flex-row text-[#2A435D] ">
          {Cards.map((card) => (
            <div
              key={card.num}
              className=" group flex flex-col max-w-[400px] items-center pt-[30px] pb-[15px] px-[20px] hover:bg-[#CC3333] hover:text-[#FFF8EE] transition duration-300 ease-in-out">
              <div className="flex flex-row items-center mb-8 ml-[60px]">
                <Image
                  className="z-0 "
                  src={card.src}
                  alt={card.alt}
                  width={80}
                  height={80}
                />
                <h1 className="text-4xl text-[#FFF8EE] px-[35px] font-bold py-[25px] bg-[#CC3333] z-1 mt-[-30px] ml-[-17px] rounded-[100%] transition duration-300 ease-in-out group-hover:bg-[#FFF8EE] group-hover:text-[#CC3333]">
                  {card.num}
                </h1>
              </div>
              <div className="mb-10">
                <h1 className="text-xl text-center font-bold mb-6">
                  {card.title}
                </h1>
                <p className=" font-medium">{card.desc}</p>
              </div>
              <div className="ml-[140px]">
                <Link
                  href={'/about_us'}
                  className="px-[15px] py-[5px] bg-[#CC3333] text-2xl text-[#FFF8EE] rounded-xl transition duration-300 ease-in-out group-hover:bg-[#FFF8EE] group-hover:text-[#CC3333]">
                  Read More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
