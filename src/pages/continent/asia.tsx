import { Flex, Grid, Heading } from "@chakra-ui/react";

import { BannerContent } from "../../components/BannerContent";
import { Cities } from "../../components/Cities";
import { Content } from "../../components/Content";
import { Header } from "../../components/Header";

export default function Asia() {
  return (
    <Flex direction='column'>
      <Header />
      <BannerContent banner='asiaBanner' title='Ásia' />
      <Content 
        text='A Ásia é o maior continente em área terrestre do mundo, estando boa parte do continente localizado no Hemisfério Norte. Além de ser o mais extenso, é também o mais populoso, habitando nele cerca de três quintos da população mundial. A Ásia é multicultural, abrigando diversas culturas, etnias, religiões e tradições.'
        numCountry='50'
        numLanguage='199'
        numCity='15'
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
          <Cities image='bangkok' city='Bangkok' country='Tailândia' flag='th' />
          <Cities image='toquio' city='Tóquio' country='Japão' flag='jp' />
          <Cities image='hongKong' city='Hong Kong' country='China' flag='cn' />
          <Cities image='dubai' city='Dubai' country='Emirados Árabes' flag='ae' />
          <Cities image='delhi' city='Delhi' country='Índia' flag='in' />
        </Grid>        
      </Flex>      
    </Flex>
  )
}