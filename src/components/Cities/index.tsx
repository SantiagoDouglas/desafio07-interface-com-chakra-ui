import { Box, Flex, Grid, GridItem, Heading, Image, Text } from "@chakra-ui/react";


interface citiesProps {
  city: string;
  country: string;
  flag: string;
  image: string;
}

export function Cities({ city, country, flag, image }: citiesProps) {
  return (    
    <Box borderRadius='4px' overflow='hidden'>
      <Image
        src={`/cities/${image}.png`}
        h='170px'
        w='100%'
      />
      <Flex
        p='6'
        align='center'
        justify='space-between'
        background='light.white'
        border='1px'
        borderColor='highlight.50'
        borderTop='0'
      >
        <Flex direction='column'>
          <Heading
            fontFamily='sans-serif'
            fontWeight='600'
            fontSize='20px'
          >
            {city}
          </Heading>
          <Text
            fontFamily='sans-serif'
            fontWeight='500'
            fontSize='16px'
            color='dark.info.info'
            mt='3'
          >
            {country}
          </Text>
        </Flex>
        <Image
          src={`/countries/${flag}.svg`}
          w='30px'
          h='30px'
          borderRadius='100%'
        />
      </Flex>
    </Box>    
  )
}