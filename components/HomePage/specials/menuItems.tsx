export default function MenuItems() {
  const Menu = [
    {
      title: 'Gazpacho Garlic',
      desc: 'Chilled tomato, cucumber, garlic, red pepper soup.',
      price: '$55',
      id: 1,
    },
    {
      title: 'Pan Con Berenjina Frita',
      desc: 'Marinated seabass with sour sauce, dill & coriander on bread.',
      price: '$40',
      id: 2,
    },
    {
      title: 'New Lubina Marinada',
      desc: 'Fried aubergine with almond on bread (2 pieces).',
      price: '$45',
      id: 3,
    },
    {
      title: 'Gazpacho',
      desc: 'Atlantic cod fillet, chips, salad, tartare, lemon.',
      price: '$35',
      id: 4,
    },
    {
      title: 'Coconut Chia Bowl',
      desc: 'Marinated seabass with sour saucel & coriander on bread.',
      price: '$95',
      id: 5,
    },
    {
      title: 'New Lubina Marinada',
      desc: 'Atlantic cod fillet, chips, salad, tartare, lemon.',
      price: '$120',
      id: 6,
    },
    {
      title: 'Gazpacho Garlic',
      desc: 'Chilled tomato, cucumber, garlic, red pepper soup.',
      price: '$55',
      id: 7,
    },
  ];

  return (
    <>
      <div className="">
        {Menu.map((item) => (
          <div
            key={item.id}
            className="text-[#CC3333] flex justify-between border-b border-dashed border-[#CC3333] m-4">
            <div className="">
              <h1 className="text-2xl mb-2 ">{item.title}</h1>
              <p className="text-lg text-[#2A435D] mb-2">{item.desc}</p>
            </div>
            <span className=" text-xl font-bold flex items-end ml-6">
              {item.price}
            </span>
          </div>
        ))}
      </div>
    </>
  );
}
