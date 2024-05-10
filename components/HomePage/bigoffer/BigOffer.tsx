import Image from 'next/image';
import bigOffer1 from '@/asets/images/image_bigOffer_1.png';
import bigOffer2 from '@/asets/images/image_bigOffer_2.png';
import bigOffer3 from '@/asets/images/image_bigOffer_3.png';

export default function BidOffer() {
  return (
    <>
      <div className="flex flex-col items-center justify-center mt-10 font-bold">
        <h1 className=" text-5xl text-[#CC3333] mb-4">Bigg Offer</h1>
        <p className=" text-xl text-[#2A435D] mb-6">
          For on this week, take your food, buy your best one.
        </p>
        <div className="flex flex-row gap-4 ml-[-20]">
          <Image src={bigOffer1} alt="bigOffer1" />
          <Image src={bigOffer2} alt="bigOffer2" />
          <Image src={bigOffer3} alt="bigOffer3" />
        </div>
      </div>
    </>
  );
}
