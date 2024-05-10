import Image from 'next/image';
import ourTeam1 from '@/asets/icons/image_ourTeam_1.png';
import ourTeam2 from '@/asets/icons/image_ourTeam_2.png';
import ourTeam3 from '@/asets/icons/image_ourTeam_3.png';
import twitterIcon from '@/asets/icons/twitter.svg';
import facebookIcon from '@/asets/icons/facebook.svg';
import instagramIcon from '@/asets/icons/instagram.svg';
import linkedinIcon from '@/asets/icons/linkedin.svg';

export default function OurTeam() {
  const Peoples = [
    {
      id: 1,
      name: 'Brain Adams',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.Lorem ipsum dolor  sit amet',
      img: ourTeam1,
      alt: 'ourTeam1',
    },
    {
      id: 2,
      name: 'Jhon Khan',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.Lorem ipsum dolor  sit amet',
      img: ourTeam2,
      alt: 'ourTeam2',
    },
    {
      id: 3,
      name: 'Jessica biel',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.Lorem ipsum dolor  sit amet',
      img: ourTeam3,
      alt: 'ourTeam3',
    },
  ];

  return (
    <>
      <div className="flex flex-col items-center text-center text-[#2A435D] mb-[10%]">
        <h1 className="text-4xl font-bold mb-3">OUR TEAM</h1>
        <p className="text-lg ">The Hardworking Team behind the restaurant</p>
        <div className="flex flex-row gap-5 mt-[10%]">
          {Peoples.map((people) => (
            <div key={people.id} className="flex flex-col items-center">
              <div className="relative border-[3px] border-[#CC3333] px-[40px] py-[130px] rounded-[100%] mb-[40px]">
                <div className=" absolute top-[-35%] right-[-5%]">
                  <Image src={people.img} alt={people.alt} />
                </div>
                <div className="max-w-[245px] flex flex-col mb-[-99px]">
                  <h1 className="text-2xl font-bold">{people.name}</h1>
                  <p className="texl-lg">{people.desc}</p>
                </div>
              </div>
              <div className="flex flex-row gap-12">
                <Image src={twitterIcon} alt="twiterIcon" />
                <Image src={facebookIcon} alt="facebookIcon" />
                <Image src={instagramIcon} alt="instagramIcon" />
                <Image src={linkedinIcon} alt="linkedinIcon" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
