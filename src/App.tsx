import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import Default from './components/layouts/Default';
import Catalog from './pages/Catalog';
import Detail from './pages/Detail';
import Login from './pages/Login';
import Signup from './pages/Signup';

function App() {

  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/movie-app" element={<Default />} >
            <Route index element={<Home />} />
            <Route path="/movie-app/:category" element={<Catalog />} />
            <Route path="/movie-app/detail/:id" element={<Detail />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  )
}

export default App
