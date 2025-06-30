export const typeDefs = `#graphql

    House:{
        name: String!,
        charater: [Character]!
    }

    Character:{
        id:ID!,
        name:String!,
        alternate_names: [String!]!,
        species: String!
        gender: String!
        house: House
    }

    Query:{
        getCharacter(id:ID!):Character
        getCharacters(ids:[ID!]): [Character!]!
    }

`;