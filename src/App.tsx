import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Toaster } from './components/ui/toaster'
import AdminDashboard from './components/dashboard/admin-dashboard'

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