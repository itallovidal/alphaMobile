import {api} from "../axiosConfig";

export async function getAllRegisteredUsers(collection_id: string, page: number){
    const {data} = await api.get(`/voters/${collection_id}/${page}`)
    if(data){
        return data.docs
    }

    throw new Error('Erro no get dos usuarios')
}