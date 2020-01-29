import axios from 'axios'

const config = {
  baseURL: 'https://my-json-server.typicode.com/emamaia/pistas',
  timeout: 1000
}

const protocolo = axios.create(config)

export function getPistas() {
  const url = './pagina'
  return protocolo.get(url)
}