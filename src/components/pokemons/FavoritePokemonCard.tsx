import type { FavoritePokemon } from '@interfaces/favorite-pokemons.interface';
import { type FC } from 'react';

interface Props {
  pokemon: FavoritePokemon;
  deleteFavorite: (id: number) => void;
}

const FavoritePokemonCard: FC<Props> = ({
  pokemon: { name, id },
  deleteFavorite,
}) => {
  const imageSrc = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;

  return (
    <div className='flex flex-col justify-center items-center bg-slate-500 rounded mt-5 mr-3'>
      <a
        href={`/pokemons/${name}`}
        className='capitalize p-2'
      >
        <img
          src={imageSrc}
          className='w-18 h-18'
          alt={name}
          style={{
            viewTransitionName: `${name}-image`,
          }}
        />
        <span className={'capitalize'}>
          #{id} {name}
        </span>
      </a>

      <button
        onClick={() => deleteFavorite(id)}
        className='text-red-500 p-2 rounded'
      >
        Borrar
      </button>
    </div>
  );
};

export default FavoritePokemonCard;
