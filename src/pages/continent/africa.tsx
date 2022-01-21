import { Flex, Grid, Heading } from "@chakra-ui/react";

import { BannerContent } from "../../components/BannerContent";
import { Cities } from "../../components/Cities";
import { Content } from "../../components/Content";
import { Header } from "../../components/Header";

export default function Africa() {
  return (
    <Flex direction='column'>
      <Header />
      <BannerContent banner='africaBanner' title='África' />
      <Content 
        text='A África é conhecida pela sua pluralidade étnica e cultural, e, por meio de uma história milenar, é capaz de contar a história de toda a humanidade. Apesar da enorme riqueza do continente, muitos países africanos apresentam baixos índices de desenvolvimento, com diversos problemas sociais, como a miséria, baixa qualidade de vida, subnutrição e o analfabetismo.'
        numCountry='54'
        numLanguage='34'
        numCity='50'
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
          <Cities image='lagos' city='Lagos' country='Nigéria' flag='ng' />
          <Cities image='casaBlanca' city='Casa Blanca' country='Marrocos' flag='ma' />
          <Cities image='cabo' city='Cidade do Cabo' country='África do Sul' flag='za' />
          <Cities image='cairo' city='Cairo' country='Egito' flag='eg' />
          <Cities image='vinduque' city='Vinduque' country='Namíbia' flag='na' />
        </Grid>        
      </Flex>      
    </Flex>
  )
}