import { Flex, Heading, Popover, PopoverArrow, PopoverCloseButton, PopoverContent, PopoverTrigger, Text, VStack, PopoverHeader, PopoverBody, Icon } from "@chakra-ui/react";
import { RiInformationLine } from "react-icons/ri";

interface contentProps {
  numCountry: string;
  numLanguage: string;
  numCity: string;
  text: string;
}
export function Content({
  numCountry,
  numLanguage,
  numCity,
  text
}: contentProps) {
  return (
    <Flex
      w='100%'
      maxW='1160px'
      mx='auto'
      my={['24px', '80px']}
    >
      <Flex direction={['column', 'column', 'column', 'row']} justify='space-between' align={['flex-start', 'center']} mx={['16px', '16px', '16px', '16px', 'auto']}> 
        <Text
          fontSize={['14px', '24px']}
          fontWeight='400'
          lineHeight={['21px', '36px']}
          align='justify'
          pr={['none', 'none', 'none', '70px']}
        >
          {text}
        </Text>        
        <Flex w='100%' mx='auto' justify='space-between' mb={['0', '10']}> 
          <Flex direction='column' align={['start', 'center']} spacing='-1' w={['none', '165px']} mt={['16px', 'none']}>
            <Heading color='highlight.highlight' fontWeight='600' fontSize={['24px', '48px']}>
              {numCountry}
            </Heading>
            <Text fontWeight={['400', '600']} fontSize={['18px', '24px']}>
              países
            </Text>
          </Flex>

          <Flex direction='column' align={['start', 'center']} spacing='-1' w={['none', '165px']} mt={['16px', 'none']}>
            <Heading color='highlight.highlight' fontWeight='600' fontSize={['24px', '48px']}>
              {numLanguage}
            </Heading>
            <Text fontWeight={['400', '600']} fontSize={['18px', '24px']}>
              línguas
            </Text>
          </Flex>  

          <Flex direction='column' align={['start', 'center']} spacing='-1' w={['none', '180px']} mt={['16px', 'none']}>
            <Heading color='highlight.highlight' fontWeight='600' fontSize={['24px', '48px']}>
              {numCity}
            </Heading>
            <Text fontWeight={['400', '600']} fontSize={['18px', '24px']}>
              cidades +100
              <Popover >
                <PopoverTrigger>
                  <span>
                    <Icon
                      fontSize='16px'
                      cursor='pointer'
                      as={RiInformationLine} 
                      color='dark.info.50'
                      ml='1'
                    />
                  </span>
                </PopoverTrigger>
                <PopoverContent>
                  <PopoverArrow />
                  <PopoverCloseButton />
                  <PopoverBody>Dê uma olhada nas cidades do continente</PopoverBody>
                </PopoverContent>
              </Popover>
            </Text>
          </Flex>            
        </Flex>        
      </Flex>
    </Flex>
  )
}