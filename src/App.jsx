import { Route, Routes } from 'react-router'
import './App.css'
import LoginPage from './pages/Auth/LoginPage'
import SignupPage from './pages/Auth/SignupPage'
import LandingPage from './pages/Guest/LandingPage'
import DashboardPage from './pages/User/DashboardPage'
import TransactionPage from './pages/User/TransactionPage'

function App() {

  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<SignupPage />} />
      {/* Private Routes */}
      <Route path="/dashboard" element={<DashboardPage />} />
      <Route path="/transactions" element={<TransactionPage />} />

    </Routes>
    
  )
}

export default App
