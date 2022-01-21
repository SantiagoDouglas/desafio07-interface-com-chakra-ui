import { Flex, Grid, Heading } from "@chakra-ui/react";

import { BannerContent } from "../../components/BannerContent";
import { Cities } from "../../components/Cities";
import { Content } from "../../components/Content";
import { Header } from "../../components/Header";

export default function NorthAmerica() {
  return (
    <Flex direction='column'>
      <Header />
      <BannerContent banner='northBanner' title='América do Norte' />
      <Content 
        text='Os principais países da América do Norte são respectivamente Estados Unidos e Canadá, pois se destacam no cenário mundial como potências mundiais e pertencem ao grupo dos países mais ricos, o G-8, especialmente os Estados Unidos que são considerados a maior força mundial do momento.'
        numCountry='3'
        numLanguage='6'
        numCity='30'
      />
      <Flex w='100%' maxW='1160px' mx='auto' direction='column' mb={['5','10']}>
        <Heading fontWeight='500' fontSize={['22px', '36px']} ml={['16px', '0']}>
          Cidades +100
        </Heading>
      </Flex>
      <Flex w='100%' maxW='1160px' mx='auto' mb='9' justify={['center', 'start']}>
        <Grid
          templateColumns={['1fr', '1fr 1fr', 'repeat(3, 1fr)', 'repeat(4, 1fr)']}
          alignItems='center'
          justifyContent='center'
          gap={['20px', '45px']}
          px={['30px', '0']}
        >
          <Cities image='miami' city='Miami' country='Estados Unidos' flag='us' />
          <Cities image='montreal' city='Montreal' country='Canadá' flag='ca' />
          <Cities image='acapulco' city='Acapulco' country='México' flag='mx' />
        </Grid>        
      </Flex>      
    </Flex>
  )
}