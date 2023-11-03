import {api} from "../axiosConfig";

export async function getUserCount(collection_id: string){
    console.log(collection_id)
    const response = await api.get(`/voters/${collection_id}/votersCount`)

    // console.log(response)
    if(response.status  === 200){
        const {data} = response
        return data
    }

    throw new Error('Erro no get')
}