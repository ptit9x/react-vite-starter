import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import AuthLayout from './layouts/AuthLayout'
import Login from './pages/Login'
import Register from './pages/Register'
import { Toaster } from '@/components/ui/sonner'
import './App.css'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route element={<AuthLayout />}>
            <Route path="/" element={<Navigate to="/login" replace />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Route>
        </Routes>
      </Router>
      <Toaster />
    </>
  )
}

export default App
