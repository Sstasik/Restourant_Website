import Image from 'next/image';
import phoneIconRed from '@/asets/icons/phone_icon_red.svg';
import twitterIcon from '@/asets/icons/twitter.svg';
import facebookIcon from '@/asets/icons/facebook.svg';
import instagramIcon from '@/asets/icons/instagram.svg';
import linkedinIcon from '@/asets/icons/linkedin.svg';
import clockIconRed from '@/asets/icons/watch_icon_red.svg';
import mailIcon from '@/asets/icons/mail_icon.svg';
import locationIcon from '@/asets/icons/location_icon.svg';

export default function AddressMap() {
  return (
    <>
      <div className="flex flex-row justify-center items-center mt-4 mb-[8%]">
        <div className="text-[#CC3333] ">
          <div>
            <h1 className=" text-4xl font-bold mb-5">ADDRESS</h1>
            <ul className="ml-4 text-lg flex flex-col gap-2">
              <li className="flex flex-row text-[#2A435D] gap-4">
                <Image src={locationIcon} alt="locationIcon" />
                28 Seventh Avenue, Neew York, 10014
              </li>
              <li className="flex flex-row text-[#2A435D] gap-4">
                <Image src={phoneIconRed} alt="phoneIcon" />
                +880 1630 225 015
              </li>
              <li className="flex flex-row text-[#2A435D] gap-4">
                <Image src={mailIcon} alt="mailIcon" />
                resturents@gmail.com
              </li>
            </ul>
          </div>
          <div>
            <h1 className="text-4xl font-bold my-5">WORKING HOURS</h1>
            <time className="flex flex-row  gap-4 text-lg ml-4">
              <Image src={clockIconRed} alt="clockIcon" />
              7:30 am to 9:30pm on Weekdays
            </time>
          </div>
          <div>
            <h1 className="text-4xl font-bold my-5">FOLLOW US</h1>
            <div className="flex flex-row gap-12">
              <Image src={twitterIcon} alt="twitterIcon" />
              <Image src={facebookIcon} alt="facebookIcon" />
              <Image src={instagramIcon} alt="instagramIcon" />
              <Image src={linkedinIcon} alt="linkedinIcon" />
            </div>
          </div>
        </div>
        <div>here should be map</div>
      </div>
    </>
  );
}
