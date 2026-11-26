import { Navigate, Outlet } from 'react-router-dom'
import { useAuthStore } from '@/stores/authStore'

// 로그인한 사용자만 들어올 수 있는 페이지
// 토큰이 없으면 /login으로 보냄
const ProtectedRoute = () => {
  // 훅으로 구독 → 토큰이 바뀌면 이 컴포넌트가 다시 렌더링됨
  const isLoggedIn = useAuthStore((state) => !!state.accessToken)

  if (!isLoggedIn) return <Navigate to="/login" replace />

  return <Outlet />
}

export default ProtectedRoute
