import type { FavoritePokemon } from '@interfaces/favorite-pokemons.interface';
import FavoritePokemonCard from './FavoritePokemonCard';
import { useState } from 'react';

const getLocalStoragePokemons = () => {
  const favoritePokemons: FavoritePokemon[] = JSON.parse(
    localStorage.getItem('favorites') || '[]'
  );

  return favoritePokemons;
};

const FavoritePokemons = () => {
  const [favoritePokemons, setFavoritePokemons] = useState(
    getLocalStoragePokemons()
  );

  const deleteFavorite = (id: number) => {
    const favoritePokemons = JSON.parse(
      localStorage.getItem('favorites') || '[]'
    );
    const updatedFavorites = favoritePokemons.filter(
      (pokemon: FavoritePokemon) => pokemon.id !== id
    );

    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));

    setFavoritePokemons(updatedFavorites);
  };

  return (
    <div className='grid grid-cols-2 sm:grid-cols-4'>
      {favoritePokemons.map((pokemon) => (
        <FavoritePokemonCard
          pokemon={pokemon}
          key={pokemon.id}
          deleteFavorite={deleteFavorite}
        />
      ))}
    </div>
  );
};

export default FavoritePokemons;
