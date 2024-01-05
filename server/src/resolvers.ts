import express, { request } from "express"
import { graphqlHTTP } from "express-graphql"
import { buildSchema } from "graphql"
import * as path from "path"
const fs = require('fs')
const schemaString = fs.readFileSync(path.join(__dirname,'./schema.gql'),'utf-8');
const schema = buildSchema(schemaString)
// console.log(schema)
interface CreateUserProps{
    email?: String
    firstname?: String
    lastname?: String
}
interface CreateQUestionProps{
    title?: String
    description?: String
    class?: number
}
const root = {
    getUser:({id}:{id:string},req:any)=>{
        if(id=='1')
        {
            return {id:'1',email:'munch@gmail.com',firstname:'John',lastname:'munch'}
        }
        return null
    },
    createUser:({input}:{input:CreateUserProps},req:any)=>{
        return {id:'2',...input}
    },
}

const app = express()
app.use('/graphql',graphqlHTTP({
    schema:schema,
    rootValue:root,
    graphiql:true
}))
app.listen(3696,()=>{
    console.log("server running at http://localhost/3696")
    console.log("graphQl running at the http://localhost:3696/graphql")
})