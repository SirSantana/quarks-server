import {gql, ApolloServer} from 'apollo-server'

let typeDefs = gql`

type Book{
    title:String
    author:String
}
type Query{
    allBooks:[Book]
}
`
let resolvers ={
    Query:{
        allBooks:()=> Books
    }
}

let server = new ApolloServer({typeDefs, resolvers, debug:true})

server.listen(8080)

let Books =[
    {
        title:'Lito',
        author:'lito'
    },
    {
        title:'Harry Potter',
        author:'J.K Rowling'
    }
]