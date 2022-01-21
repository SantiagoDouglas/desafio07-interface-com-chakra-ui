import { Flex } from "@chakra-ui/react";

import { BannerHome } from '../components/BannerHome'
import { DividerPoint } from "../components/DividerPoint";
import { Header } from "../components/Header";
import { HeadingBody } from "../components/HeadingBody";
import { Slider } from "../components/Slider";
import { TravelType } from "../components/TravelType";


export default function Home() {
  return (
    <Flex direction='column' >
      <Header />
      <BannerHome />
      <TravelType />      
      <DividerPoint />
      <HeadingBody />
      <Slider />
    </Flex>
  )
}
