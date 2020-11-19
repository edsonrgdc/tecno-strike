import {apiPrivada} from '../api'

export async function buscarPartida() {
    const respose = await apiPrivada.get('/match')
    return respose.data
}

export async function criarPartida(request) {
    const response = await apiPrivada.post('/match/', request)
    return response.data
}
