import { Flex, Heading, Text } from '@chakra-ui/react';
import Link from 'next/link';

import SwiperCore, { Navigation, Pagination, Autoplay, A11y } from 'swiper';
import  { Swiper, SwiperSlide } from 'swiper/react';
import { DetailsSlide } from './DetailsSlide';

SwiperCore.use([Autoplay, Navigation, Pagination, A11y])

export function Slider() {
  return (
    <Flex
      w='100%'
      h={['250px', '450px']}
      maxW='1240px'
      mx='auto'
      mb={['5', '10']}
      mt={['20px','52px']}
    >
      <Swiper
        slidesPerView={1}
        navigation={true}
        pagination={{ clickable: true }}
        autoplay={{
          "delay": 4000,
        }}
        style={{
          width: '100%',
          flex: '1',
        }}
      >
        <SwiperSlide>
          <DetailsSlide 
            image='europe'
            heading='Europe'
            text='O continente mais antigo.'
          />
        </SwiperSlide>
        <SwiperSlide>
          <DetailsSlide 
            image='africa'
            heading='África'
            text='O segundo continente mais populoso da Terra.'
          />
        </SwiperSlide>
        <SwiperSlide>
          <DetailsSlide 
            image='asia'
            heading='Ásia'
            text='Rico em cultura.'
          />
        </SwiperSlide>
        <SwiperSlide>
          <DetailsSlide 
            image='americaSouth'
            heading='América do Sul'
            text='O continente da natureza.'
          />
        </SwiperSlide>
        <SwiperSlide>
          <DetailsSlide 
            image='americaNorth'
            heading='América do Norte'
            text='Diversidade cultural.'
          />
        </SwiperSlide>
        <SwiperSlide>
          <DetailsSlide 
            image='oceania'
            heading='Oceania'
            text='O continente mais amigável com estrangeiros.'
          />
        </SwiperSlide>
      </Swiper>
    </Flex>
  )
}

