import {apiPrivada} from '../api'

export async function buscarTimes() {
    const respose = await apiPrivada.get('/team')
    return respose.data
}

export async function criarTime(request) {
    const response = await apiPrivada.post('/team', request)
    return response.data
}

export async function editarTime(request, id){
    const response = await apiPrivada.put(`/team/${id}`, request)
    return response.data 
}

export async function deletarTime(id) {
    const response = await apiPrivada.delete(`/team/${id}`)
    return response.data
}


