import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import Popular from './pages/Popular';
import NowPlaying from './pages/NowPlaying';
import Default from './components/layouts/Default';

function App() {

  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Default />} >
            <Route index element={<Home />} />
            <Route path="popular" element={<Popular />} />
            <Route path="now-playing" element={<NowPlaying />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  )
}

export default App
