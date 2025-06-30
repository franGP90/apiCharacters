import { OptionalId } from "mongodb";

export type House = {
     name: string;
    characters: CharacterModel[];
}

export type CharacterModel = OptionalId<{
  name: string;
  alternate_names: string[];
  species: string;
  gender: string;
  house: House | null;
}>
