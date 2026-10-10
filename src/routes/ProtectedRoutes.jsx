
import { Navigate, Outlet } from 'react-router-dom'
import { useAuth } from '../features/auth/AuthContext'

export default function ProtectedRoute() {
  const { admin, loading } = useAuth()

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center text-slate-500">
        Checking authentication...
      </div>
    )
  }

  if (!admin) {
    return <Navigate to="/login" replace />
  }

  if (!['super_admin', 'admin'].includes(admin.role)) {
    return (
      <div className="p-10 text-center">
        <h1 className="text-xl font-bold">Access denied</h1>
        <p className="mt-2 text-slate-500">
          Your account cannot access the admin dashboard.
        </p>
      </div>
    )
  }

  return <Outlet />
}
