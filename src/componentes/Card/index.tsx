import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import dotsImage from'../../assets/img/dots.png';
import pokeball from '../../assets/img/pokeballCard.png';

import * as S from './styles';

export type PokemonType = {
    type: {
        name: string;
    };
};

export type Pokemon = {
    name: string;
    url: string;
    id: Number;
    types:PokemonType[];
};

type CardProps = {
    data: Pokemon;
} & TouchableOpacityProps;




export function Card({data,...rest}: CardProps){


    return(
        <S.PokemonCard type={data.types[0].type.name} {...rest}>
            <S.LeftSide>
            <S.PokemonId>#{data.id}</S.PokemonId>
            <S.PokemonName> {data.name} </S.PokemonName>
            <S.ImageCardDetailLeftSide source= {dotsImage}/>

            <S.PokemonContentType>
            {data.types.map(pokemonType => 
                        <S.PokemonType type = {pokemonType.type.name}>
                        <S.PokemonTypeText key = {pokemonType.type.name}>
                            {pokemonType.type.name}
                        </S.PokemonTypeText>
                    </S.PokemonType>)}
                </S.PokemonContentType>

            </S.LeftSide>


            <S.RightSide>
                <S.PokemonDetail source={pokeball} />
                <S.PokemonImage
                source={{
                    uri:`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png`,
                }}
                />
            </S.RightSide>
        </S.PokemonCard>
    );

    
}

