
export async function loginUser(login: {name: string, password: string}){
    const response = await fetch('http://10.0.2.2:3333/politics/login', {
        method: "POST",
        headers:{
            "Content-Type": "application/json",
        },
        body: JSON.stringify(login)
    }).catch((e)=>{
        console.log(e)
        throw new Error('Erro ao se conectar ao servidor')
    })



    const data = await response.json()

    if(data.status === 404){
        throw new Error("Usuário não existe")
    }

    if(data.status === 400){
        throw new Error("Fetch enviando JSON errado.")
    }

    return data
}