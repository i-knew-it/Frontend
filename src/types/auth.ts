// 노션 API 명세서 "이메일 로그인" 응답의 user 객체 모양
export interface User {
  userId: string
  email: string
  needsOnboarding: boolean
}
