import React from "react";
import Slider from "react-slick";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ba } from "../../../public/Banner";
import Nav from "../Nav";

const Banner = () => {


    //   const NextArrow = ({ onClick }) => (
    //     <button
    //       type="button"
    //       onClick={onClick}
    //       className="absolute top-1/2 right-4 z-20 -translate-y-1/2 cursor-pointer text-white bg-black/20 p-2 rounded-full"
    //       aria-label="Next Slide"
    //     >
    //       <FaArrowRight size={20} />
    //     </button>
    //   );

    //   const PrevArrow = ({ onClick }) => (
    //     <button
    //       type="button"
    //       onClick={onClick}
    //       className="absolute top-1/2 left-4 z-20 -translate-y-1/2 cursor-pointer text-white bg-black/20 p-2 rounded-full"
    //       aria-label="Prev Slide"
    //     >
    //       <FaArrowLeft size={20} />
    //     </button>
    //   );

    const settings = {
        infinite: true,
        speed: 2200,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        fade: true,
        pauseOnHover: false,
        dots: true,
    };

    return (
        <div className="text-white overflow-hidden relative">
            <div className='absolute left-0 xl:left-30 right-0 xl:right-30 top-10 '>
                <Nav></Nav>
            </div>
            {/* ------------------- ANIMATION CSS ------------------- */}
            <style>{`
        .slide-wrap { position: relative; overflow: hidden; }
        .slide-img  { width:screen; height:screen; object-fit:cover; }

        /* ZOOM EFFECT */
        .slick-current .fx-zoom .slide-img {
          animation: pptZoom 4s ease-in-out both;
          will-change: transform, filter;
          transform-origin: center center;
        }

        @keyframes pptZoom {
          0%   { transform: scale(1.12); filter: brightness(0.98); }
          100% { transform: scale(1.00); filter: brightness(1); }
        }

        /* SHAPE EFFECT (Optional, not used now) */
        .slick-current .fx-shape .slide-img {
          clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
          animation: pptShapeOpen 1.1s ease-out forwards;
        }

        @keyframes pptShapeOpen {
          to {
            clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
          }
        }

        /* Fallback if browser doesn't support clip-path */
        @supports not (clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%)) {
          .slick-current .fx-shape .slide-img {
            animation: pptFadeIn .6s ease-out both;
            opacity: 0;
          }
          @keyframes pptFadeIn { to { opacity: 1; } }
        }
      `}</style>

            <Slider {...settings}>
                {ba.map((item) => (
                    <div key={item.id} className="slide-wrap fx-zoom">
                        <div className="relative">

                       
                            <img
                                src={item.url}
                                className="slide-img w-screen h-screen object-cover"
                                alt="slide"
                            />

                            <div className="flex flex-col items-center gap-8 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">

                                <p className="text-lg md:text-xl lg:text-2xl border uppercase text-center border-white px-4 py-1 bg-black/35 font-medium tracking-[8px] sm:tracking-[12px]">
                                    Teste Resturent
                                </p>

                                <h2 className="text-6xl md:text-7xl lg:text-9xl font-semibold text-center font-gwendolyn tracking-[2px]">
                                    {item.title}
                                </h2>

                                <div className="text-red-500 flex gap-4 items-center">
                                    <span className="w-23 h-[2px] bg-red-500"></span>
                                    <span className="uppercase text-lg font-bold tracking-[4px]">
                                        {item.tag}
                                    </span>
                                    <span className="w-23 h-[2px] bg-red-500"></span>
                                </div>

                            </div>

                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default Banner;
