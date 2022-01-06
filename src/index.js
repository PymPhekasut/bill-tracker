import React from 'react';
import reactDOM from 'react-dom';
import { Provider } from './context/context';
import { SpeechProvider } from '@speechly/react-client';


import App from './App';
import './index.css';

reactDOM.render(
    <SpeechProvider appId="9d462a69-7738-4f61-a697-0494495f64d3" language='en-US'>
        <Provider>
            <App />
        </Provider>
    </SpeechProvider>,
    document.getElementById('root'));