import Image from 'next/image';
import AboutImgTwoWomens from '@/asets/images/image_about_1.png';

export default function HeaderAboutUs() {
  return (
    <>
      <div className="bg-cover bg-center bg-[url('../asets/images/image_about-bg.png')] h-[280px] text-[#FFF8EE] flex flex-col justify-center items-center">
        <h1 className="text-4xl font-bold mb-3">About Us</h1>
        <p className="text-lg">
          Read our Story, How we started and about the Team
        </p>
      </div>
      <div className="flex justify-center mb-14">
        <div className="max-w-[80%] flex flex-row  items-center px-10 py-8 border-[3px] border-[#CC3333] mt-5 rounded-xl ">
          <div>
            <Image src={AboutImgTwoWomens} alt="two womens" />
          </div>
          <div className="flex flex-col text-[#2A435D] max-w-[585px] ml-7 gap-9">
            <p className="text-xl font-bold ">
              Opaleye yellowtail snapper, velvet catfish, graveldiver banded
              killifish, Old World rivuline catalufa eagle ray Moorish idol.
              Herring smelt barbeled dragonfish, tommy ruff.
            </p>
            <p className="text-l">
              Queen danio velvet catfish Sacramento blackfish, bullhead shark,
              Colorado squawfish Russian sturgeon clown triggerfish swamp-eel
              paradise fish. Hake cookie-cutter shark silver carp hawkfish snipe
              eel armorhead catfish, moray eel silverside! Bluegill toadfish,
              orangespine unicorn fish. Manta Ray Moorish idol
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
