import Image from 'next/image';
import deliveryImage from '@/asets/images/image_delivery.png';
import deliveryIcon from '@/asets/icons/delivery_icon.svg';
import Link from 'next/link';
export default function Delivery() {
  return (
    <>
      <div className="flex flex-row justify-center gap-[70px] mt-[80px] mb-20 ">
        <div className="flex flex-col items-center max-w-[600px]">
          <div className="ml-[-130px] mb-7">
            <p className="text-[#CC3333] font-bold text-xl ">Delivery</p>
          </div>
          <div>
            <h1 className="text-[#2A435D] font-bold text-4xl">
              A Moments Of
              <br />
              <span className="text-[#CC3333]">
                Delivered On Right Time & Place
              </span>
            </h1>
            <p className="text-xl text-[#2A435D]">
              Food Khan is a restaurant, bar and coffee roastery located on a
              busy corner site in Farringdon`s Exmouth Market. With glazed
              frontage on two sides of the building, overlooking the market and
              a bustling London inteon.
            </p>
          </div>
          <div className="flex flex-row gap-[100px] mt-[60px]">
            <div className="flex flex-row gap-[20px]">
              <div className="flex flex-col text-[#2A435D]  items-center">
                <h1 className=" text-xl font-bold">Delivery Order</h1>
                <p className="text-[16px]">+880 1630 225 015</p>
              </div>
              <Image src={deliveryIcon} alt="DeliveryIcon" />
            </div>
            <Link
              href={'/items'}
              className="bg-[#CC3333] text-[#FFF8EE] text-2xl px-[15px] py-[5px] rounded-xl">
              Order Now
            </Link>
          </div>
        </div>
        <div className="mt-[50px]">
          <Image src={deliveryImage} alt="deliveryImg" />
        </div>
      </div>
    </>
  );
}
