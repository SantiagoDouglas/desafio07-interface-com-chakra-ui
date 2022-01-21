import { Flex, Heading } from "@chakra-ui/react";

interface bannerContentProps {
  banner: string;
  title: string
}

export function BannerContent({ banner, title}: bannerContentProps) {
  return (
    <Flex
      w='100%'
      h={['150px', '230px', '350px', '500px']}
      bgImage={`url('/continents/${banner}.png')`}
      bgPosition='center'
      bgRepeat='no-repeat'
      bgSize='cover'
      px={['0', '32', '36']}
      boxShadow='0px 4px 4px 0px #00000040'
    >
      <Flex
        justify={['center', 'flex-start']}
        alignItems={['center', 'flex-end']}
        w='100%'
        mx='auto'
        pb={['none', '39px', '49px', '59px']}
        maxW='1160px'
      >
        <div>
          <Heading 
            color='light.heading' 
            fontSize={['28px', '48px']}
            fontWeight='600'
          >
            {title}
          </Heading>          
        </div>        
      </Flex>
    </Flex>
  )
}