import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/header';
import App from './pages/home';
import Footer from './components/footer';

// Retrieving the tag to insert the application
const root = ReactDOM.createRoot(document.getElementById('root'));
// Add components to tag
root.render(
    <React.StrictMode>
        <Header />
        <App />
        <Footer />
    </React.StrictMode>
);
