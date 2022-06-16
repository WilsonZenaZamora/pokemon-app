import { useEffect, useState } from 'react';
import { Card, Container, Grid, Image, Text } from "@nextui-org/react";

import { MainLayout } from "../../components/layouts"
import { NoFavorites } from "../../components/ui";
import { localFavorites } from '../../utils';


const FavoritesPage = () => {

  const [favoritePokemons, setFavoritePokemons] = useState<number[]>([]);

  useEffect(() => {
    
    setFavoritePokemons( localFavorites.showPokemons() );

  }, [])
  


  return (
    <MainLayout title='Favorites Pokémons'>

      {
        favoritePokemons.length === 0
          ? ( <NoFavorites /> )
          : (

            <Grid.Container gap={ 2 } direction='row' justify='flex-start'>
              {
                favoritePokemons.map( id => (
                  <Grid xs={ 6 } sm={ 3 } md={ 2 } xl={ 1 } key={ id }>
                    <Card isHoverable isPressable css={{ padding: 10 }}>
                      <Card.Image
                        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${ id }.svg`}
                        width={'100%'}
                        height={ 140 }
                      />
                    </Card>
                  </Grid>
                ))
              }
            </Grid.Container>
          )
      }
      
      

    </MainLayout>
  )
}

export default FavoritesPage;

