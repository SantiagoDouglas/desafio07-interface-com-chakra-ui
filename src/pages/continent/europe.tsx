import { Flex, Grid, Heading } from "@chakra-ui/react";

import { BannerContent } from "../../components/BannerContent";
import { Cities } from "../../components/Cities";
import { Content } from "../../components/Content";
import { Header } from "../../components/Header";

export default function Europe() {
  return (
    <Flex direction='column'>
      <Header />
      <BannerContent banner='europeBanner' title='Europe' />
      <Content 
        text='A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da Eurásia, 
        a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso,
        e o mar Negro a sudeste'
        numCountry='50'
        numLanguage='60'
        numCity='24'
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
          <Cities image='londres' city='Londres' country='Reino Unido' flag='uk' />
          <Cities image='paris' city='Paris' country='França' flag='fr' />
          <Cities image='roma' city='Roma' country='Italia' flag='it' />
          <Cities image='praga' city='Praga' country='República Tcheca' flag='rt' />
          <Cities image='amsterda' city='Amsterdã' country='Holanda' flag='ho' />
        </Grid>        
      </Flex>      
    </Flex>
  )
}