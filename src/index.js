import React from 'react';
import ReactDOM from 'react-dom/client';
import "./scss/style.scss"
import Header from './pages/Header/Header';
import Main from './pages/Main/Main';
import Footer from './pages/Footer/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<div className="wrapper">
    <Header />
  <Main />
  <Footer />
</div>
);


