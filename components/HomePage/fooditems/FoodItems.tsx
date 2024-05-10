import Dish1 from '@/asets/images/image_Dishes_1.svg';
import Dish2 from '@/asets/images/image_Dishes_2.svg';
import Dish3 from '@/asets/images/image_Dishes_3.svg';
import Dish4 from '@/asets/images/image_Dishes_4.svg';
import Dish5 from '@/asets/images/image_Dishes_5.svg';
import Image from 'next/image';

export default function FoodItems() {
  interface Iitems {
    id: number;
    subtitle: string;
    title: string;
    images: Iimage[];
  }
  interface Iimage {
    index: number;
    src: string;
    alt: string;
  }

  const Items = [
    {
      id: 1,
      subtitle: 'Food Items',
      title: 'Popular Dishes',
      images: [
        {
          index: 1,
          src: Dish1,
          alt: 'Dish1',
        },
        {
          index: 2,
          src: Dish2,
          alt: 'Dish2',
        },
        {
          index: 3,
          src: Dish3,
          alt: 'Dish3',
        },
        {
          index: 4,
          src: Dish4,
          alt: 'Dish4',
        },
        {
          index: 5,
          src: Dish5,
          alt: 'Dish5',
        },
      ],
    },
  ];

  return (
    <>
      <div className="flex items-center text-center justify-center">
        {Items.map((cart: Iitems) => (
          <div key={cart.id}>
            <p className="text-[#2A435D] font-bold text-l">{cart.subtitle}</p>
            <h1 className="text-[#CC3333] font-bold text-3xl mb-[20px]">
              {cart.title}
            </h1>
            <div className="flex flex-row gap-[20px] ">
              {cart.images.map((img) => (
                <div key={img.index} className="">
                  <Image src={img.src} alt={img.alt} />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
