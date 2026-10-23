import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createRouter } from '@tanstack/react-router'
import { I18nProvider } from '@lingui/react'
import { routeTree } from './routeTree.gen'
import { ThemeProvider } from '@/hooks/useTheme'
import { initI18n } from '@/i18n/i18n'
import '@/styles/globals.css'

// Initialize i18n
const i18nInstance = initI18n()

// Create Router instance with type-safe route tree
const router = createRouter({
  routeTree,
  defaultPreload: 'intent',
})

// Register router instance for type safety across TanStack Router
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

const rootElement = document.getElementById('root')
if (rootElement && !rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement)
  root.render(
    <StrictMode>
      <I18nProvider i18n={i18nInstance}>
        <ThemeProvider>
          <RouterProvider router={router} />
        </ThemeProvider>
      </I18nProvider>
    </StrictMode>
  )
}
