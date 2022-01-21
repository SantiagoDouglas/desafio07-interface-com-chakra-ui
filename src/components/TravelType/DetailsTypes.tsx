import { Box, Flex, Image, Text, useBreakpointValue } from "@chakra-ui/react";

interface travelTypeProps {
  title: string;
  icon: string;
}

export function DetailsType({ title, icon }: travelTypeProps) {
  const isWideVerson = useBreakpointValue({
    base: false,
    sm: true
  }) 

  return (
    <Flex 
      direction={['row', 'column']}
      justify='center'
      alignItems='center'
    >
      { isWideVerson ? 
        <Image
          src={`icons/${icon}.svg`}
          h={['40px', '85px']}
          w={['40px', '85px']}
          mb='24px' 
        /> :
        <Box
          color='highlight.highlight'
          mr='2'
          fontSize='32px'
        >
          •
        </Box>      
      }
      <Text
        color='dark.heading'
        fontWeight={['500', '600']}
        fontSize={['18px', '24px']}
        mb={['1', 'none']}
      >
        {title}
      </Text>
    </Flex>
  )
}