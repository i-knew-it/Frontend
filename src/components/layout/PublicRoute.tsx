import { Navigate, Outlet } from 'react-router-dom'
import { useAuthStore } from '@/stores/authStore'

// 로그인 안 한 사용자용 페이지 (로그인, 회원가입)
// 이미 로그인했으면 /home으로 보냄
const PublicRoute = () => {
  const isLoggedIn = useAuthStore((state) => !!state.accessToken)

  if (isLoggedIn) return <Navigate to="/home" replace />

  return <Outlet />
}

export default PublicRoute
