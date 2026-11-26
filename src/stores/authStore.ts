import { create } from 'zustand'
import type { User } from '@/types/auth'

interface AuthState {
  // 상태 (데이터)
  accessToken: string | null
  user: User | null

  // 액션 (상태를 바꾸는 함수)
  setAuth: (accessToken: string, user: User) => void
  setAccessToken: (accessToken: string) => void
  clearAuth: () => void
}

export const useAuthStore = create<AuthState>()((set) => ({
  accessToken: null,
  user: null,

  // 로그인 성공 시: 토큰과 사용자 정보를 함께 저장
  setAuth: (accessToken, user) => set({ accessToken, user }),

  // 토큰 재발급 시: 토큰만 교체 (user는 그대로)
  setAccessToken: (accessToken) => set({ accessToken }),

  // 로그아웃 / 재발급 실패 시: 전부 비움
  clearAuth: () => set({ accessToken: null, user: null }),
}))
