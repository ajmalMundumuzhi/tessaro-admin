
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react'
import api from '../../services/api'

const AuthContext = createContext(null)

export function AuthProvider({ children }) {
  const [admin, setAdmin] = useState(null)
  const [loading, setLoading] = useState(true)

  const checkSession = useCallback(async () => {
    try {
      const response = await api.get('/auth/me')
      setAdmin(response.data?.data || null)
    } catch {
      setAdmin(null)
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    checkSession()
  }, [checkSession])

  const logout = async () => {
    try {
      await api.post('/auth/logout')
    } finally {
      setAdmin(null)
    }
  }

  return (
    <AuthContext.Provider
      value={{ admin, setAdmin, loading, logout, checkSession }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)

  if (!context) {
    throw new Error('useAuth must be used within AuthProvider')
  }

  return context
}
