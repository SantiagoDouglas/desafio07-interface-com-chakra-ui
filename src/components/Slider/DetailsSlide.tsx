import { Flex, Heading, Text } from '@chakra-ui/react';
import Link from 'next/link';

interface detailsSlideProps {
  image: string;
  heading: string;
  text: string;
}

export function DetailsSlide({ image, heading, text }: detailsSlideProps) {
  return (
    <Flex
      w='100%'
      h='100%'
      bgImage={`url(/continents/${image}.png)`}
      bgRepeat='no-repeat'
      bgSize='cover'
      bgPosition='center'
      justify='center'
      align='center'
      textAlign='center'

    >
      <Link href={`/continent/${image}`}>
        <a>
          <Heading 
            fontWeight='700'
            fontSize={['24px', '48px']}
            color='light.heading'
            mb={['3', '4']}
          >
            {heading}
          </Heading>
          <Text
            fontWeight='700'
            fontSize={['14px', '24px']}
            color='light.info'
          >
            {text}
          </Text>
        </a>
      </Link>
    </Flex>
  )
}