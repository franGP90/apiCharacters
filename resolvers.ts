import { Collection ,ObjectId} from "mongodb"
import { GraphQLError } from "graphql"
import { CharacterModel, House } from "./types.ts"
import { cachedDataVersionTag } from "node:v8";


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
        
       getCharacters: async (
            _:unknown,
            {ids}:{ids: string[] | null}
        ):Promise<CharacterModel[]>=>{
            const url = `https://hp-api.onrender.com/api/characters`
            const response = await fetch(url)
            const data = await response.json()
            if(!response.ok){
                throw new Error("Error al acceder a la api de personajes")
            }

            if(ids !== null){
              const result = await Promise.all(
                data.array.filter(async (element: CharacterModel) => {
                    const id = new ObjectId(element._id).toString()
                    ids.forEach(e => e === id )
                })
              )

              return result
            }else{
             return data
            }
        }
            
        
    }

}