import HeaderAboutUs from '@/components/AboutUsPage/headeraboutus/HeaderAboutUs';
import OurTeam from '@/components/AboutUsPage/our_team/OurTeam';
import OurStory from '@/components/AboutUsPage/ourstory/OurStory';
import SpecialService from '@/components/AboutUsPage/special_service/SpecialService';
import TastyAndCrunchy from '@/components/AboutUsPage/tasty_and_crunchy/TastyAndCrunchy';

export default function AboutUs() {
  return (
    <>
      <HeaderAboutUs />
      <OurStory />
      <TastyAndCrunchy />
      <SpecialService />
      <OurTeam />
    </>
  );
}
