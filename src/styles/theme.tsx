import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
  colors: {
    highlight: {
      'highlight': '#FFBA08',
      '50': 'rgba(255, 186, 8, 0.5)',
    },
    dark: {
      black: '#000000',
      heading: '#47585B',
      info: {
        'info': '#999999',
        '50': 'rgba(153, 153, 153, 0.5)'
      },      
    },
    light: {
      white: '#FFFFFF',
      heading: '#F5F8FA',
      info: '#DADADA'
    }
  },

  fonts: {
    heading: 'Poppins',
    body: 'Poppins'
  },

  styles: {
    global: {
      body: {
        bg: 'light.heading',
        color: 'dark.heading'
      }
    }
  }
})