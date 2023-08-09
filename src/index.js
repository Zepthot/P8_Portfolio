import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './pages/home';

// Retrieving the tag to insert the application
const root = ReactDOM.createRoot(document.getElementById('root'));
// Add application to tag
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
