// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'
const x=(
  <table>
    <th>First Name</th>
    <tr>Lauryn</tr>
    <tr>James</tr>
    <tr>Lirian</tr>
    <tr>Kelvin</tr>
  </table>
)
const y=(
  <table>
    <th>Last Name</th>
    <tr>Mwase</tr>
    <tr>Banda</tr>
    <tr>Mwizeni</tr>
    <tr>Phiri</tr>
  </table>
)

createRoot(document.getElementById('names')).render(
y
)
createRoot(document.getElementById('root')).render(
x
)
