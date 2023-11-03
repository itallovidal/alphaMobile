import {api} from "../axiosConfig";

export async function loginUser(login: {email: string, password: string}){
    const {data} = await api.post('/politics/login', login, {
        headers:{
            "Content-Type": "application/json",
        },
    }).catch((e)=>{
        console.log(e)
        throw new Error('Erro ao se conectar ao servidor')
    })


    if(data.status === 404){
        throw new Error("Usuário não existe")
    }

    if(data.status === 400){
        throw new Error("Fetch enviando JSON errado.")
    }

    return data
}