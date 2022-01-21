import { Flex, Heading, Image, Text } from "@chakra-ui/react";

export function BannerHome() {
  return (
    <Flex
      w='100%'
      h={['163px', '250px', '250px', '335px']}
      bgImage="url('/banner.jpg')"
      bgPosition={["100% 20%", "100% 20%", "100% 30%"]}
      bgRepeat='no-repeat'
      bgSize='cover'
      boxShadow='0px 4px 4px 0px #00000040'
      border='1px solid #000000'
    >
      <Flex
        justify={['center', 'space-between']}
        alignItems='center'
        w='100%'
        mx='auto'
        px={['4', '10', '20', '36', '2']}
        maxW='1160px'
      >
        <div>
          <Heading 
            color='light.heading' 
            fontSize={['xl', '2l', '2xl', '2xl', '4xl']} 
            fontWeight='500'
            lineHeight={['30px','34px', '44px', '44px', '54px']}
          >
            5 Continentes, <br />infinitas possibilidades.
          </Heading>
          <Text
            color='light.info'
            fontWeight='400'
            fontSize={['0.8rem', 'sm', 'sm', 'md', 'xl']}
            lineHeight={['21px', '30px']}
            mt={['8px', '20px']}
            maxW={['100%', '100%', '100%', '550px']}
          >
            Chegou a hora de tirar do papel a viagem que você sempre sonhou. 
          </Text>
        </div>

        <Image 
          src='/airplane.svg'
          w={['300px', '300px', '300px', '430px']}
          display={['none',  'none', 'block']}
          transform='translateY(52px)'
          ml='8'
        />
      </Flex>
    </Flex>
  )
}