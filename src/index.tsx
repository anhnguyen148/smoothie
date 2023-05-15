import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';

// Redux zone
import { Provider } from 'react-redux';
import store from './store';
import * as serviceWorker from './service-worker';

const container = document.getElementById('root');
const root = createRoot(container!);

const render = () => {
    root.render(
        <Provider store={store}>
            <App />
        </Provider>
    );
}

render();

if (process.env.NODE_ENV === "development" && module.hot) {
    module.hot.accept("./App", render);
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
