import React from "react"
import ReactDOM from "react-dom"
import "src/assets/scss/index.scss"
import App from "./App/App"
import { store } from "./redux/store/store"
import * as serviceWorker from "./serviceWorker"
import { Provider } from "react-redux"

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
