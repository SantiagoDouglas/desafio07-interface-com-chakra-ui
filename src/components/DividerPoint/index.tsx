import { Flex, Divider } from "@chakra-ui/react";

export function DividerPoint() {
  return (
    <Flex        
      justifyContent='center'
      alignItems='center'
      mt={['24px', '80px']}
    >
      <Divider
        borderBottom='2px'
        color='dark.heading'
        maxW={['60px', '90px']}
      />
    </Flex>
  )
}