import BidOffer from '@/components/HomePage/bigoffer/BigOffer';
import Delivery from '@/components/HomePage/delivery/Delivery';
import FoodItems from '@/components/HomePage/fooditems/FoodItems';
import Restaurant from '@/components/HomePage/restaurant/Restaurant';
import RichandHealthy from '@/components/HomePage/richandhealthy/RichandHealthy';
import Slider from '@/components/HomePage/slider/Slider';
import SpecialManu from '@/components/HomePage/specialmano/SpecialMano';
import Specials from '@/components/HomePage/specials/Specials';
import Testimonial from '@/components/HomePage/testimonial/Testimonial';
import WhyTheBest from '@/components/HomePage/why_best/WhyTheBest';

export default function Home() {
  return (
    <main className="">
      <div>
        <Slider />
        <FoodItems />
        <RichandHealthy />
        <BidOffer />
        <Specials />
        <SpecialManu />
        <Restaurant />
        <Delivery />
        <WhyTheBest />
        <Testimonial />
      </div>
    </main>
  );
}
