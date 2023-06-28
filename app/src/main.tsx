import React from 'react'
import ReactDOM from 'react-dom/client'
import GlobalStyles from '@/styles/GlobalStyles.tsx'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { StreamersPage, DashboardPage, NotFoundPage } from '@/pages'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <GlobalStyles />
    <QueryClientProvider client={queryClient}>
      {process.env.NODE_ENV === 'development' && <ReactQueryDevtools />}
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<DashboardPage />}
          />
          <Route
            path="*"
            element={<NotFoundPage />}
          />
          <Route
            path="/streamers"
            element={<Navigate to="/" />}
          />
          <Route
            path="/streamers/:streamerId"
            element={<StreamersPage />}
          />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  </React.StrictMode>,
)
