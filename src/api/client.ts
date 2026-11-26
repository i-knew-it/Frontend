import axios from 'axios'
import { useAuthStore } from '@/stores/authStore'

export const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  withCredentials: true, // Refresh Token HttpOnly 쿠키 자동 전송
})

apiClient.interceptors.request.use((config) => {
  // 컴포넌트 밖이라 훅을 못 쓰므로 getState()로 현재 값을 바로 읽음
  const token = useAuthStore.getState().accessToken
  if (token) config.headers.Authorization = `Bearer ${token}`
  return config
})
