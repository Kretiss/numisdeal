import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { I18nextProvider } from 'react-i18next'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { QueryClientProvider } from '@tanstack/react-query'
import { ToastContainer } from 'react-toastify'
import * as Sentry from '@sentry/react'
import { Integrations } from '@sentry/tracing'
import { WrappedApp } from './App'
import i18next from './i18next'
import { queryClient } from './api'
import 'virtual:vite-plugin-sentry/sentry-config'

// development or production
const { MODE } = import.meta.env

// Setup Sentry for errors reporting in production
Sentry.init({
  dsn: 'https://bb205bb97a6740949be2888761b7c153@sentry.inqool.cz/16',
  integrations: [
    new Integrations.BrowserTracing({
      tracingOrigins: ['*'],
    }),
  ],
  environment: MODE,
  // We recommend adjusting this value in production, or using tracesSampler
  // for finer control
  // tracesSampleRate: 1.0,
  beforeSend(event) {
    return MODE === 'development' ? null : event
  },
})

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <I18nextProvider i18n={i18next}>
        <WrappedApp />
        <ReactQueryDevtools />
      </I18nextProvider>
    </QueryClientProvider>
    <ToastContainer
      position="bottom-left"
      autoClose={3500}
      hideProgressBar={false}
      newestOnTop
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
    />
  </React.StrictMode>
)
