export async function getAllRegisteredUsers(collection_id: string){
    const response = await fetch(`http://10.0.2.2:3333/voters/${collection_id}`)
    if(response instanceof Response){
        const data = await response.json()

        return data.docs
    }
    throw new Error('Erro no get dos usuarios')
}