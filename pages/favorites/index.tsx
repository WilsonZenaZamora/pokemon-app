import { useEffect, useState } from 'react';

import { MainLayout } from "../../components/layouts"
import { FavoritePokemons } from '../../components/pokemon';
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
          : ( <FavoritePokemons pokemons={ favoritePokemons }/> )
      }
    </MainLayout>
  )
}

export default FavoritesPage;


