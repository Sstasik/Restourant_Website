import clockIcon from '@/asets/icons/watch_icon.svg';
import phoneIcon from '@/asets/icons/phone_icon.svg';
import Image from 'next/image';

export default function Footer() {
  const Branch = [
    {
      id: 1,
      title: 'Robert Food',
      address: '1986 Hilltop DriveBorger, TX 79007',
      clockImg: clockIcon,
      workTime: '7:30 AM - 9:30 PM',
      phoneIcon: phoneIcon,
      phoneNum: '+880 1630-225015',
      button: 'Click to View Google Map',
    },
    {
      id: 2,
      title: 'Mark A. Reed Food',
      address: '4877 Rose AvenueNew Orleans, LA 70112',
      clockImg: clockIcon,
      workTime: '7:30 AM - 9:30 PM',
      phoneIcon: phoneIcon,
      phoneNum: '+880 1630-225015',
      button: 'Click to View Google Map',
    },
    {
      id: 3,
      title: 'Karie K. Hill Food',
      address: '1509 Peaceful LaneCleveland, OH 44115',
      clockImg: clockIcon,
      workTime: '7:30 AM - 9:30 PM',
      phoneIcon: phoneIcon,
      phoneNum: '+880 1630-225015',
      button: 'Click to View Google Map',
    },
  ];
  return (
    <>
      <div className="text-center mb-9">
        <h1 className="text-4xl text-[#2A435D] font-bold">Our Branch</h1>
      </div>
      <div className=" bg-[#CC3333] text-[#FFF8EE] flex flex-row justify-center gap-[30px] pt-[30px] pb-[20px] ">
        {Branch.map((card) => (
          <div key={card.id} className=" text-center">
            <h1 className="text-4xl font-semibold mb-2">{card.title}</h1>
            <p className="text-xl font-semibold mb-2">{card.address}</p>
            <div className=" flex flex-row justify-center gap-[20px] mb-2">
              <div className="flex flex-row items-center gap-[10px]">
                <Image src={card.clockImg} alt="clockImg" />
                <span className="text-xs">{card.workTime}</span>
              </div>
              <div className="flex flex-row items-center gap-[10px]">
                <Image src={card.phoneIcon} alt="phoneImg" />
                <span className="text-xs">{card.phoneNum}</span>
              </div>
            </div>
            <p className="text-[#4BFF3C] text-lg">{card.button}</p>
          </div>
        ))}
      </div>
      <div className="bg-[#2A435D] text-[#FFF8EE] flex justify-center pt-10 pb-7">
        <h1 className="text-xl font-semibold ">
          Copyright © 2022 | Shaheen Uddin Ahmad
        </h1>
      </div>
    </>
  );
}
