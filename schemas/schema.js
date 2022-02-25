const graphql = require('graphql')
const Book = require('../models/bookModel')
const Author = require('../models/authorModel')

const {GraphQLObjectType, GraphQLString, GraphQLSchema, GraphQLID, GraphQLInt, GraphQLList} = graphql


//DUMMY DATA
// const BOOKS = [
// {id:"1", name:"Book one" , authorId: '1' },
// {id:"2", name:"Book one1" , authorId: '1' },

// {id:"3", name:"Book two",authorId: '2'},
// {id:"4", name:"Book two2",authorId: '2'},

// {id:"5", name:"Book three",authorId: '3'},
// {id:"6", name:"Book three3",authorId: '3'}


// ]
// const AUTHORS =[
//     {name: "Adnan", age: 22, id: '1'},
//     {name: "Advna", age: 18, id: '2'},
//     {name: "Arman", age: 16, id: '3'}

// ]

//SCHEMAS for formating data  CONTAINES QUERI OPTIONS INISTE RESOLVE FUNCTION
const BookType = new GraphQLObjectType({
    name: 'Book',
    fields:()=>{
        
    return    {
            id:{type:GraphQLID},
            name:{type:GraphQLString},
            genre:{type:GraphQLString},
            author:{
                type:AuthorType,
                resolve(parent,_){
                    // return AUTHORS.find(author=> author.id === parent.id)
                }
            
            }
        }
    }
});

const AuthorType = new GraphQLObjectType({
    name: 'Author',
    fields:()=>{
        
    return    {
            id:{type:GraphQLID},
            name:{type:GraphQLString},
            age:{type:GraphQLInt},
            books:{type: new GraphQLList(BookType), resolve(parent,args){
                // return BOOKS.filter(book => book.authorId === parent.id)
                
            }}
            
        }
    }
});

//ROOT QUERY for rautong and fetching data
const RootQuery = new GraphQLObjectType({
    name:"RootQueryType",
    fields: {
        book:{
            type: BookType,
            args: {id:{type:GraphQLID}},
            resolve(_, args){
                   
                // return BOOKS.find(book => book.id === args.id)
            }
        },
        author:{
            type: AuthorType,
            args:{id:{type: GraphQLID}},
            resolve(_,args){
                // return AUTHORS.find(author=> author.id === args.id)
                
            }
        },
        books:{
            type: new GraphQLList(BookType),
            resolve(parent,args){
                // return BOOKS
            }
        },
        authors:{
            type: new GraphQLList(AuthorType),
            resolve(parent,args){
                // return AUTHORS
            }
        }
    }
})
//MUtatiosn for modifieng data
const Mutations = new GraphQLObjectType({
    name: "Mutation",
    fields:{
        addAuthor:{
            type: AuthorType,
            args: {
                name:{type:GraphQLString},
                age:{type:GraphQLInt}
            },
            resolve(parent,args){
                let autor  = new Author({
                    name: args.name,
                    age: args.age
                })
                autor.save()
            }

        }
    }
})

module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation: Mutations,
})