import Image from 'next/image';
import OurStoryImg from '@/asets/images/image_ourStory_1.png';
export default function OurStory() {
  return (
    <>
      <div className=" flex flex-col justify-center  items-center mb-10">
        <h1 className="text-4xl font-bold text-[#CC3333] mb-9">OUR STORY</h1>
        <div className="flex flex-row justify-center items-center gap-10">
          <div className="max-w-[560px] text-lg text-[#2A435D] mt-[-40px]">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry`s standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passage
            </p>
          </div>
          <div>
            <Image src={OurStoryImg} alt="OurStoryImg" />
          </div>
        </div>
      </div>
    </>
  );
}
