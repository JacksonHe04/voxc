import { StrictMode } from 'react'
import { Provider } from 'react-redux'
import { store } from '@/store'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import '@/styles/index.css'
import router from '@/router'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
    <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
)
