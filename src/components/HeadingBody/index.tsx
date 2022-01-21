import { Flex, Heading } from "@chakra-ui/react";

export function HeadingBody() {
  return (
    <Flex
      direction='column'
      justify='center'
      align='center'
      mt={['28px', '52px']}
    >
      <Heading
        fontWeight='500'
        fontSize={['20px', '36px']}
        align='center'
        lineHeight={['30px', '54px']}
      >
        Vamos nessa? <br /> Então escolha seu continente
      </Heading>
    </Flex>
  )
}