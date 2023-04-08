import { register } from "swiper/element/bundle";
register();

const MySwiper = () => {
  return (
    <swiper-container navigation="true" pagination="true">
      <swiper-slide class="blue-slide">Slide 1</swiper-slide>
      <swiper-slide class="yellow-slide">Slide 2</swiper-slide>
      <swiper-slide class="green-slide">Slide 3</swiper-slide>
    </swiper-container>
  );
};

export default MySwiper;
