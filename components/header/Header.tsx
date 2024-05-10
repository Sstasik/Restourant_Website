import Image from 'next/image';
import watchIcon from '@/asets/icons/watch_icon.svg';
import phoneIcon from '@/asets/icons/phone_icon.svg';
import siteLogo from '@/asets/images/logo.svg';
import cartIcon from '@/asets/icons/cart_icon.svg';
import deliveryIcon from '@/asets/icons/delivery_icon.svg';
import Link from 'next/link';

export default function Header() {
  return (
    <>
      <div className=" bg-[#CC3333] text-[#FFF8EE] text-[9px] flex justify-between items-center py-[10px]   ">
        <div className="ml-40 flex gap-[50px]">
          <p className="flex items-center">
            <Image src={watchIcon} alt="watchIcon" className="mr-2" />
            7:30 AM - 9:30 PM
          </p>
          <p className="flex items-center">
            <Image src={phoneIcon} alt="phoneIcon" className="mr-2" />
            +880 1630 225 015
          </p>
        </div>
        <div className="mr-40">
          <button className="">REGISTER</button>
        </div>
      </div>
      <div className="flex flex-row justify-evenly my-[15px] drop-shadow-2xl ">
        <Link href={'/'}>
          <Image src={siteLogo} alt="siteLogo" />
        </Link>
        <div className=" flex flex-row text-[#2A435D] items-center gap-[20px]">
          <div>
            <nav className=" font-bold flex gap-[20px]">
              <Link href={'/'}>HOME</Link>
              <Link href={'/about_us'}>ABOUT</Link>
              <Link href={'/items'}>ITEMS</Link>
              <Link href={'/'}>PAGES</Link>
              <Link href={'/contact_us'}>CONTACT</Link>
            </nav>
          </div>
          <div className="flex items-center">
            <Link
              href={'/cart'}
              className="bg-[#2A435D] text-[#FFF8EE] text-xs flex flex-col items-center rounded-[100%] px-[12px] py-[6px] ">
              <span className=" leading-[14px] text-xl  font-bold">1</span>
              <Image src={cartIcon} alt="cartIcon" height={35} width={35} />
            </Link>
          </div>
          <div className="flex flex-row justify-center gap-[15px]">
            <div className="flex items-center flex-col ">
              <p className=" font-bold text-xl leading-[1]">Delivery Order</p>
              <p className=" text-l ">+880 1630 225 015</p>
            </div>
            <Image src={deliveryIcon} alt="deliveryIcon" />
          </div>
          <div className=" flex items-center ">
            <button className="bg-[#CC3333] px-[20px] py-[10px] text-[#FFF8EE] rounded-xl shadow-lg font-bold">
              LOGIN
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
