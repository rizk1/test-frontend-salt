import Accesories from '../assets/Accesories.png';
import Improf from '../assets/Speed Improvement.png';
import Exhaust from '../assets/Exhaust.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { useRef } from 'react';
import { Pagination } from 'swiper';

export default function Specialy() {
    const sliderRef = useRef(null);
    const slide = [
        {
            title: 'Speed Improvement',
            img: Improf
        },
        {
            title: 'Exhaust',
            img: Exhaust
        },
        {
            title: 'Accesories',
            img: Accesories
        },
    ]

    return (
        <div className="bg-com-primary px-6 py-12">
            <div className="bg-white p-8">
                <h2 className="text-com-primary font-bold text-2xl mb-4">OUR SPECIALITY</h2>
                <p className="text-com-gray text-[14px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis euismod libero vel leo auctor, in venenatis nulla consequat. Sed commodo nunc sit amet congue aliquam.</p>

                <Swiper
                ref={sliderRef}
                modules={[Pagination]}
                pagination={true}
                spaceBetween={0}
                slidesPerView={1.5}
                centeredSlides={true}
                loop={true}
                >
                    {slide.map(v => (
                        <SwiperSlide>
                            <div className="mt-10 md-4 text-center">
                                <img src={v.img} className='m-auto mb-4' alt={v.title} />
                                <p className='text-[13px] font-semibold'>{v.title}</p>
                            </div>
                        </SwiperSlide>
                    ))}
                
                    <div className='my-6'>
                        <p className='text-center text-[13px] text-[#A7A7A7]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis euismod libero vel leo auctor, in venenatis nulla consequat. Sed commodo nunc sit amet congue aliquam.</p>
                    </div>

                    <div className='flex justify-between mt-10 mb-4 relative z-[999]'>
                        <button className='w-15 h-15 text-[1.5rem] text-[#3D46A2]' onClick={() => sliderRef.current.swiper.slidePrev()}>
                            <BsArrowLeft />
                        </button>
                        <button className='w-15 h-15 text-[1.5rem] text-[#3D46A2]' onClick={() => sliderRef.current.swiper.slideNext()}>
                            <BsArrowRight />
                        </button>
                    </div>

                </Swiper>

            </div>
        </div>
    )
}