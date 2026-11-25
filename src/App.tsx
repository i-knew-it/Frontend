import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import ProtectedRoute from '@/components/layout/ProtectedRoute'
import PublicRoute from '@/components/layout/PublicRoute'
import LoginPage from '@/pages/auth/LoginPage'
import SignUpPage from '@/pages/auth/SignUpPage'
import OnboardingPage from '@/pages/onboarding/OnboardingPage'
import HomePage from '@/pages/home/HomePage'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* 로그인 안 한 사용자만 */}
        <Route element={<PublicRoute />}>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
        </Route>

        {/* 로그인한 사용자만 */}
        <Route element={<ProtectedRoute />}>
          <Route path="/onboarding" element={<OnboardingPage />} />
          <Route path="/home" element={<HomePage />} />
        </Route>

        {/* 그 외 주소는 /home으로 (로그인 안 했으면 다시 /login으로 감) */}
        <Route path="*" element={<Navigate to="/home" replace />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
