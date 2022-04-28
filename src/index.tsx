/* eslint-disable @typescript-eslint/no-non-null-assertion */
import 'flowbite'
import React from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import { App } from './App'

const container = document.getElementById('app')
const root = createRoot(container!)

root.render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>
)
