// Import Swiper React components
import Typography from '../Typography/Typography'
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import '../../App.css'

// import required modules
import { Pagination, Navigation } from 'swiper/modules'

export default function App() {
  return (
    <>
      <Swiper
        slidesPerView={3}
        centeredSlides={true}
        initialSlide={1}
        spaceBetween={30}
        pagination={{
          type: 'fraction',
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
            <img src='/Team/gustavo.svg'></img>
              <div className='flex flex-col gap-2'>
                <Typography variant='lp-name-team'>Gustavo</Typography>
                <Typography variant='body2'>AI Engineer</Typography>
              </div>
          </SwiperSlide>
        <SwiperSlide>
        <img src='/Team/julia.svg'></img>
            <div className='flex flex-col gap-2'>
              <Typography variant='lp-name-team'>Julia</Typography>
              <Typography variant='body2'>Designer e Front-End</Typography>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <img src='/Team/luiza.svg'></img>
            <div className='flex flex-col gap-2'>
              <Typography variant='lp-name-team'>Luiza</Typography>
              <Typography variant='body2'>Back-End</Typography>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <img src='/Team/vitao.svg'></img>
            <div className='flex flex-col gap-2'>
              <Typography variant='lp-name-team'>Vitor</Typography>
              <Typography variant='body2'>DevOps</Typography>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <img src='/Team/diego.svg'></img>
            <div className='flex flex-col gap-2'>
              <Typography variant='lp-name-team'>Diego</Typography>
              <Typography variant='body2'>Back-End</Typography>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <img src='/Team/erick.svg'></img>
            <div className='flex flex-col gap-2'>
              <Typography variant='lp-name-team'>Erick</Typography>
              <Typography variant='body2'>Front-End</Typography>
            </div>
        </SwiperSlide>
      </Swiper>
    </>
  )
}

