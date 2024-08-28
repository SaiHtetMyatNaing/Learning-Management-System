import React from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import AdminDashboard from './components/dashboard/admin-dashboard'
import { Toaster } from './components/ui/toaster'

const queryClient = new QueryClient()
const App = () => {

  return (
    <QueryClientProvider  client={queryClient}>
        <Toaster/>
        <AdminDashboard/>
    </QueryClientProvider>
  )
}

export default App