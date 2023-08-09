import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { useRef, useState } from 'react';
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

export default function Slider() {
    const sliderRef = useRef(null);
    const [IndexSlide, setIndexSlide] = useState(1)

    const data = [
        {
            title: 'Who we are',
            subtitle: 'Technology Company',
            description: 'Sed ut perspiciatis unde omnis iste natus sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.'
        },
        {
            title: 'What we do',
            subtitle: 'Professional Brand Management',
            description: 'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.'
        },
        {
            title: 'How we do',
            subtitle: 'Strategize, Design, Collaborate',
            description: 'Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse sequam nihil molestiae consequatur.'
        },
    ]

    return (
        <div className="px-10 pb-16 pt-2">
            <Swiper
            ref={sliderRef}
            spaceBetween={50}
            slidesPerView={1}
            onSlideChange={(swiper) => setIndexSlide(1 + swiper.snapIndex)}
            >
                {data.map((v, k) => (
                    <SwiperSlide>
                        <div key={k}>
                            <h2 className="text-3xl	font-medium text-com-primary mb-4">{v.title}</h2>
                            <p className="font-medium text-[18px] mb-2">{v.subtitle}</p>
                            <p className="text-[14px] text-[#777777]">{v.description}</p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className="flex text-center justify-between mt-16 items-center">
                <div>
                    <p className="text-[#303030] text-[27px] font-medium">0{IndexSlide} 
                        <span className="text-[#C0C0C0]"> / </span>
                        <span className="text-[#C0C0C0] text-[18px]">03</span>
                    </p>
                </div>
                <div className="flex">
                    <button className='bg-com-primary disabled:bg-[#F1F1F1] text-white disabled:text-[#B6B6B6] w-[50px] h-[50px]' onClick={() => sliderRef.current.swiper.slidePrev()} disabled={IndexSlide === 1}>
                        <BsArrowLeft className='m-auto font-medium' size={25} />
                    </button>
                    <button className='bg-com-primary disabled:bg-[#F1F1F1] text-white disabled:text-[#B6B6B6] w-[50px] h-[50px]' onClick={() => sliderRef.current.swiper.slideNext()} disabled={IndexSlide === 3}>
                        <BsArrowRight className='m-auto font-medium' size={25} />
                    </button>
                </div>
            </div>

        </div>
    );
}