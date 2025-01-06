import axios from 'axios'
import { API_CONFIG } from '../config/api'

const api = axios.create({
  baseURL: API_CONFIG.baseURL,
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${API_CONFIG.apiKey}`
  }
})

export const checkApiConnection = async () => {
  try {
    await api.get('/health')
    return true
  } catch (error) {
    console.error('API connection failed:', error)
    return false
  }
}

export default api