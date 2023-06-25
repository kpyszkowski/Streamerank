import React from 'react'
import ReactDOM from 'react-dom/client'
import GlobalStyles from '@/styles/GlobalStyles.tsx'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { StreamersPage, DashboardPage, NotFoundPage } from '@/pages'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <GlobalStyles />
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
  </React.StrictMode>,
)
