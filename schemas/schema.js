const graphql = require('graphql')

const {GraphQLObjectType, GraphQLString, GraphQLSchema} = graphql


//DUMMY DATA
const BOOKS = [
{id:"1", name:"Book one"},
{id:"2", name:"Book two"},
{id:"3", name:"Book three"}

]


const BookType = new GraphQLObjectType({
    name: 'Book',
    fields:()=>{
        
    return    {
            id:{type:GraphQLString},
            name:{type:GraphQLString},
            genre:{type:GraphQLString}
        }
    }
});

const RootQuery = new GraphQLObjectType({
    name:"RootQueryType",
    fields: {
        book:{
            type: BookType,
            args: {id:{type:GraphQLString}},
            resolve(_, args){

                //logic for db
                return BOOKS.find(book => book.id === args.id)
            }
        }
    }
})

module.exports = new GraphQLSchema({
    query: RootQuery
})