import { Collection ,ObjectId} from "mongodb"
import { GraphQLError } from "graphql"
import { CharacterModel, House } from "./types.ts"


type Context = {
    CharacterModel:Collection<CharacterModel>
}
export const resolvers = {
    Character:{
        id:(parent:CharacterModel) => parent._id?.toString(),
    },

    Query:{
        getCharacter: async (
            _:unknown,
            {id}:{id:string}
        ):Promise<CharacterModel | null>=>{
            const url = `https://hp-api.onrender.com/api/character/${id}`
            const response = await fetch(url);
            if(!response.ok){
                return null
            }
            const data = await response.json()
            return data
        },
        /*
        getCharacters: async (
            _:unknown,
            {ids}:{ids: string[]}
        ):Promise<CharacterModel[]>=>{
            
        }
        */
    }

}