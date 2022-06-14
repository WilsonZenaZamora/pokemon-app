import { NextPage, GetStaticProps } from 'next'
import { Card, Grid } from '@nextui-org/react';
import { pokeApi } from '../api';
import { MainLayout } from '../components/layouts'
import { PokemonListResponse, SmallPokemon } from '../interfaces';


interface  Props {
  pokemons: SmallPokemon[];  
}

const HomePage: NextPage<Props> = ({ pokemons }) => {

  console.log({pokemons});

  return (    
    <MainLayout title='Pokemon List'>

      <Grid.Container gap={ 2 } justify='flex-start'>
        {
          pokemons.map( ({ id, name }) => (
            <Grid xs={ 6 } sm={ 3 } md={ 2 } xl={ 1 } key={ id }>
              <Card isHoverable>

              </Card>
            </Grid>
          ))
        }
      </Grid.Container>

    </MainLayout>
  )
}


export const getStaticProps: GetStaticProps = async (ctx) => {

  const { data } = await pokeApi.get<PokemonListResponse>('/pokemon?limit=151')
  console.log( data );

  const pokemons: SmallPokemon[] = data.results.map( (poke, i) => ({
    ...poke,
    id: i + 1,
    img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${i + 1}.svg`
  }))

  return {
    props: {
      pokemons
    }
  }
}

export default HomePage
