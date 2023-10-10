import exportFromJSON from "export-from-json";

interface IVoter{
    "email": string,
    "nome": string,
    "endereco": {
        "cidade": string,
        "cep": string,
        "rua": string,
        "bairro": string,
        "uf": string
    },
    "id": string,
    "sobrenome": string,
    "telefone": string,
    "data_nascimento": string
}

interface IData{
    docs: IVoter[]
}

export async function downloadCSV(collection_id: string){
    const response = await fetch(`http://10.0.2.2:3333/voters/${collection_id}`)
    const data: IData =  await response.json()


    const exportType = exportFromJSON.types.csv

    exportFromJSON({
        data: data.docs,
        exportType})
}