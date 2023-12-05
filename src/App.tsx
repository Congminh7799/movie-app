import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import './App.css'

function App() {

  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      {/* Các thành phần con của bạn ở đây */}
    </QueryClientProvider>
  )
}

export default App
