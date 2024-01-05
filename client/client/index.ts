import { Chain } from "./zeus";
const chain = Chain(" http://localhost:3696/graphql")

async function send()
{
    try{
        const user = await chain("query")({
            getUser:[{
                id:'1'
            },{
                email:true,
                firstname:true,
                lastname:true,
                id:true
            }]
        })
        console.log(user)
        const response = await chain("mutation")({
            createUser:[{
                input:{
                    email:"munch@gmail.com",
                    firstname:"munch",
                    lastname:"singh"
                }
            },{
                id:true,
                email:true,
                firstname:true
            }]
        })
        console.log(response)
    }catch(e)
    {
        console.log(e)
    }
}
send()