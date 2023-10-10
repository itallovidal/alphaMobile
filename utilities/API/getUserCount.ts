export async function getUserCount(collection_id: string){
    const response = await fetch(`http://10.0.2.2:3333/voters/${collection_id}/votersCount`)
    if(response instanceof Response){
        return await response.json()
    }

    throw new Error('Erro no get')
}