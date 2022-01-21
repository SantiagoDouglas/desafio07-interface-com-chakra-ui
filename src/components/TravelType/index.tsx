import { Grid, GridItem } from "@chakra-ui/react";
import { DetailsType } from './DetailsTypes';

export function TravelType() {
  return (
    <Grid
      w='100%'
      mx='auto'
      maxW='1160px'
      mt={['36px', '114px']}
      templateColumns={['1fr 1fr', '1fr 1fr', '1fr 1fr', '1fr 1fr', 'repeat(5, 1fr)']}
      gap={[1, 5]}
    >
      <GridItem>
        <DetailsType icon='cocktail' title='vida noturna' />          
      </GridItem>
      <GridItem>
        <DetailsType icon='surf' title='praia' />
      </GridItem>
      <GridItem>
        <DetailsType icon='building' title='moderno' />          
      </GridItem>
      <GridItem>
        <DetailsType icon='museum' title='clássico' />          
      </GridItem>
      <GridItem colSpan={[2, 2, 2, 2, 1]}>
        <DetailsType icon='earth' title='e mais...' />          
      </GridItem>
    </Grid>

  )
}
