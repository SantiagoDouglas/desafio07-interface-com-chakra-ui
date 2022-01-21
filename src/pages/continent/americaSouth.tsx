import { Flex, Grid, Heading } from "@chakra-ui/react";

import { BannerContent } from "../../components/BannerContent";
import { Cities } from "../../components/Cities";
import { Content } from "../../components/Content";
import { Header } from "../../components/Header";

export default function SouthAmerica() {
  return (
    <Flex direction='column'>
      <Header />
      <BannerContent banner='southBanner' title='América do Sul' />
      <Content 
        text='As línguas mais faladas são o espanhol e português. O maior país da América do Sul é o Brasil, enquanto o menor país é o Suriname. O vale do Amazonas é a maior bacia hidrográfica do mundo e a região de maior biodiversidade (floresta amazônica).'
        numCountry='13'
        numLanguage='8'
        numCity='26'
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
          <Cities image='buenosAires' city='Buenos Aires' country='Argentina' flag='ar' />
          <Cities image='rj' city='Rio de Janeiro' country='Brasil' flag='br' />
          <Cities image='santiago' city='Santiago' country='Chile' flag='cl' />
          <Cities image='lima' city='Lima' country='Peru' flag='pe' />
          <Cities image='bogota' city='Bogotá' country='Colômbia' flag='co' />
        </Grid>        
      </Flex>      
    </Flex>
  )
}