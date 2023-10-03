export async function loginUser(login: {name: string, password: string}){
    console.log(login)
    const data = await fetch('https://localhost:3333/politics/login', {
        method: "POST",
        headers:{
            "content-type": "application/json",
        },
        body: JSON.stringify(login)
    }).catch((e)=>{
        console.log(e)
    })

    console.log(data)

    return data
}