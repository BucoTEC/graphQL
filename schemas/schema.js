const graphql = require('graphql')

const {GraphQLObjectType, GrapgQLString, GraphQLSchema} = graphql

const BookType = new GraphQLObjectType({
    name: 'Book',
    fields:()=>{{
            id:{type:GrapgQLString}
            name:{type:GrapgQLString}
            genre:{type:GrapgQLString}
        }}
});

const RootQuery = new GraphQLObjectType({
    name:"RootQueryType",
    fields: {
        book:{
            type: BookType,
            args: {id:{type:GrapgQLString}},
            resolve(parent, args){
                //logic for db
            }
        }
    }
})

module.exports = new GraphQLSchema({
    query: RootQuery
})