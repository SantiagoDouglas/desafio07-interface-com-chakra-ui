import { Flex, Grid, Img, Icon } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from 'next/router'
import { RiArrowLeftSLine } from 'react-icons/ri'

export function Header() {
  const { asPath } = useRouter()
  const isNoHomePage = asPath !== '/' 

  return (
    <Flex
      as='header'
      bg='light.white'
      w='100%'
      h={['50px', '100px']}
      align='center'
      justify='center'
      px='1rem'
      mx='auto'
    >
      <Grid
        h='100%'
        w='100%'
        mx='auto'
        maxW='1160px'
        alignItems='center'
        templateColumns='repeat(3, 1fr)'
        justifyContent='center'
      > 
        { isNoHomePage && (
          <Link href='/'>
            <a>
              <Icon
                as={RiArrowLeftSLine}
                fontSize={['20', '40']}
                justifySelf='start'
                mt='2'
                gridColumn='1'
              />
            </a>
          </Link>
        )}
        <Img
          w={['81px', '184px']}
          src="/logo.svg" 
          alt="logo"
          justifySelf='center'
          gridColumn='2'
        />
      </Grid>
    </Flex>
  )
}