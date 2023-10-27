import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter} from "react-router-dom";
import { ProductCont, Provider } from "./contextAPI";



const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
<Provider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
 </Provider>
)


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
