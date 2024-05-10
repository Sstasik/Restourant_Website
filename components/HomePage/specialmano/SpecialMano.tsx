import specialManu1 from '@/asets/icons/image_specialManu_1.svg';
import specialManu2 from '@/asets/icons/image_specialManu_2.svg';
import specialManu3 from '@/asets/icons/image_specialManu_3.svg';
import specialManu4 from '@/asets/icons/image_specialManu_4.svg';
import specialManu5 from '@/asets/icons/image_specialManu_5.svg';
import specialManu6 from '@/asets/icons/image_specialManu_6.svg';
import specialManu7 from '@/asets/icons/image_specialManu_7.svg';
import specialManu8 from '@/asets/icons/image_specialManu_8.svg';
import specialManu9 from '@/asets/icons/image_specialManu_9.svg';
import specialManu10 from '@/asets/icons/image_specialManu_10.svg';
import Image from 'next/image';

export default function SpecialManu() {
  const Menu = [
    {
      id: 1,
      title: 'Burger',
      src: specialManu1,
      alt: 'Burger',
    },
    {
      id: 2,
      title: 'Fried chicken',
      src: specialManu2,
      alt: 'Fried chicken',
    },
    {
      id: 3,
      title: `Doner with Grilled Chicken`,
      src: specialManu3,
      alt: 'Doner with Grilled Chicken',
    },
    {
      id: 4,
      title: 'Pizza',
      src: specialManu4,
      alt: 'Pizza',
    },
    {
      id: 5,
      title: 'Hot Dogs',
      src: specialManu5,
      alt: 'Hot Dogs',
    },
    {
      id: 6,
      title: 'Chicken Skewers',
      src: specialManu6,
      alt: 'Chicken Skewers',
    },
    {
      id: 7,
      title: 'Greek Salad',
      src: specialManu7,
      alt: 'Greek Salad',
    },
    {
      id: 8,
      title: 'Dahi Puri',
      src: specialManu8,
      alt: 'Dahi Puri',
    },
    {
      id: 9,
      title: 'Ice cream with Chocolate',
      src: specialManu9,
      alt: 'Ice cream with Chocolate',
    },
    {
      id: 10,
      title: 'Cocktail Glasses',
      src: specialManu10,
      alt: 'Cocktail Glasses',
    },
  ];

  return (
    <>
      <div className="flex flex-col justify-center items-center my-14">
        <h1 className=" text-[#CC3333] font-semibold text-4xl">
          SPECIALS MENU FOR ALL TIME
        </h1>
        <div className="flex flex-wrap justify-center  max-w-[70vw] ">
          {Menu.map((cart) => (
            <div
              key={cart.id}
              className=" w-1/6  text-[#CC3333] flex justify-center hover:bg-[#CC3333] hover:text-[#FFF8EE] rounded-xl my-[10px] transition">
              <button className="flex flex-col  items-center py-[10px]">
                <Image src={cart.src} alt={cart.alt} />
                <h1 className="max-w-[180px] text-2xl mt-5">{cart.title}</h1>
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
