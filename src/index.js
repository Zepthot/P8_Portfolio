import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/header';
import App from './pages/home';
import Footer from './components/footer';
import './i18n';

// Retrieving the tag to insert the application
const root = ReactDOM.createRoot(document.getElementById('root'));
// Add components to tag
root.render(
    <React.StrictMode>
        <Suspense fallback="loading">
            <Header />
            <App />
            <Footer />
        </Suspense>
    </React.StrictMode>
);
