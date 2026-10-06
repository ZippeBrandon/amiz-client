'use client'
// @ts-ignore
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

const splideOptions: any = {
  perPage: 5,
  perMove: 1,
  type: 'loop',
  snap: false,
  gap: '0rem',
  pagination: false,
  drag: false,
  rewind: false,
  start: 0,
  autoplay: true,
  speed: 4000,
  interval: 2000,
  height: 50,
  arrows: false,
  pauseOnHover: false,
  easing:"linear",
  breakpoints: {
    640: { perPage: 2, },
    960: { perPage: 4, },
    1200: { perPage: 5, },
}

}


export default function LogoSlider({logos} : any) {
  return (
    <Splide 
      className="w-full mx-auto visible"
      aria-label="logo Slides"
      options={splideOptions}
    >
    {
        logos?.map((logo: { url: string | undefined; }, i: any) => (
            <SplideSlide key={i}>
                <div className="logoSlide">
                    <img className="w-full" src={logo?.url} alt="logo" />
                </div>
            </SplideSlide> 
        ))
    }
    </Splide>
  );
}