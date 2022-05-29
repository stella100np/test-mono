import './style.css'
import { add } from "@zgy/foo";
document.querySelector('#app').innerHTML = `
  <h1>Hello Vite!${add(1,1)}</h1>
  <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
`
