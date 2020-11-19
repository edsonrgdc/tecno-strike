import { apiPrivada, apiPublica } from '../api'

export async function perfil() {
    const response = await apiPrivada.get('user/me')
    return response.data
}

export async function cadastrar(request) {
    const response = await apiPublica.post('/user', request)
    return response.data
}