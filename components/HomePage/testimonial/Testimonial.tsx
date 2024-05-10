import Image from 'next/image';
import guests2 from '@/asets/icons/image_guests_1.png';
import guests1 from '@/asets/icons/image_guests_2.png';
import guests3 from '@/asets/icons/image_guests_3.png';

export default function Testimonial() {
  const Cards = [
    {
      id: 1,
      title: 'Robert M. Dixon',
      desc: 'Also very good and so was the service. I had the mushroom risotto with scallops which was awesome. My wife had a burger over greens ...',
      src: guests1,
    },
    {
      id: 2,
      title: 'Robert M. Dixon',
      desc: 'Also very good and so was the service. I had the mushroom risotto with scallops which was awesome. My wife had a burger over greens ...',
      src: guests2,
    },
    {
      id: 3,
      title: 'Regina D. Leonard',
      desc: 'Also very good and so was the service. I had the mushroom risotto with scallops which was awesome. My wife had a burger over greens ...',
      src: guests3,
    },
  ];

  return (
    <>
      <div className="mt-20 mb-14 ">
        <div className="flex flex-col items-center justify-center gap-3">
          <p className=" text-xl text-[#CC3333] font-semibold">Testimonial</p>
          <h1 className=" text-4xl font-bold text-[#2A435D]">
            Review <span className="text-[#CC3333]">form our guests</span>
          </h1>
        </div>
        <div className="flex flex-row justify-center">
          {Cards.map((card) => (
            <div
              key={card.id}
              className="text-[#2A435D] flex flex-col items-center text-center max-w-[470px]">
              <Image src={card.src} alt="guest1" />
              <h1 className="text-2xl">{card.title}</h1>
              <p className="text-lg">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
