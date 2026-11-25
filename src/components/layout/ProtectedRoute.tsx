import { Navigate, Outlet } from 'react-router-dom'
import { tokenStore } from '@/api/client'

// 로그인한 사용자만 들어올 수 있는 페이지
// 토큰이 없으면 /login으로 보냄
const ProtectedRoute = () => {
  const isLoggedIn = !!tokenStore.get()

  if (!isLoggedIn) return <Navigate to="/login" replace />

  return <Outlet />
}

export default ProtectedRoute
