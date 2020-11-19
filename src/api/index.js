import axios from 'axios'

const padrao = {
    baseURL: 'http://tecno-start-api.herokuapp.com/v1/api',
    timeout: 30000,
}

export const apiPublica = axios.create(padrao)
export const apiPrivada = axios.create(padrao)

apiPrivada.interceptors.request.use(request => {
    request.headers = {
        Authorization: localStorage.getItem('usuarioLogado')
    }
    return request
})