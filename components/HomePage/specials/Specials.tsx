import Image from 'next/image';
import rightArrow from '@/asets/icons/rightarrowIcon.svg';
import leftArrow from '@/asets/icons/leftarrowIcon.svg';
import specials1 from '@/asets/images/image_specials_1.png';
import creameArrow from '@/asets/icons/Group.svg';
import MenuItems from './menuItems';
import Link from 'next/link';

export default function Specials() {
  return (
    <>
      <div className="flex flex-col justify-center items-center mt-9">
        <span className=" text-xl text-[#CC3333] font-semibold mb-2">
          SPECIALS
        </span>
        <h1 className=" text-2xl text-[#2A435D] font-bold mb-2">
          Check out our menu
        </h1>
        <p className=" text-sm text-[#2A435D] mb-3">
          Demoralized by the charms of pleasure of the moment so blinded except
          to some advantage.
        </p>

        <nav className="flex flex-row ">
          <button className=" px-9 py-3 text-2xl text-[#CC3333] font-semibold hover:text-[#FFF8EE] hover:bg-[#CC3333] transition">
            BREAKFAST
          </button>
          <button className=" border-x-2   border-black px-9 py-3 text-2xl text-[#CC3333] font-semibold hover:text-[#FFF8EE] hover:bg-[#CC3333] transition ">
            LUNCH
          </button>
          <button className="px-9 py-3 text-2xl text-[#CC3333] font-semibold hover:text-[#FFF8EE] hover:bg-[#CC3333] transition ">
            DINNER
          </button>
          <button className=" border-x-2  border-black px-9 py-3 text-2xl text-[#CC3333] font-semibold hover:text-[#FFF8EE] hover:bg-[#CC3333] transition ">
            STARTERS
          </button>
          <button className="px-9 py-3 text-2xl text-[#CC3333] font-semibold hover:text-[#FFF8EE] hover:bg-[#CC3333] transition">
            BEVERAGES
          </button>
        </nav>
        <div className="flex flex-row items-center justify-center my-4">
          <Image src={leftArrow} alt="leftArrow" />
          <div className="flex flex-col items-center mx-3">
            <Image src={specials1} alt="Specials1" />

            <Link
              href={'/items'}
              className=" w-full text-[#FFF8EE] bg-[#CC3333] flex flex-row items-center justify-around">
              <div className=" ml-32 text-2xl my-3">VIEW ALL MENU</div>
              <Image src={creameArrow} alt="rightArrow" />
            </Link>
          </div>
          <MenuItems />

          <Image className="ml-1" src={rightArrow} alt="rightArrow" />
        </div>
      </div>
    </>
  );
}
