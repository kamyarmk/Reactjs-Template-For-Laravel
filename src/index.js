import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Statics/Header';
import Footer from './Statics/Footer';
import HomeSlider from './Components/Home/HomeSlider';
import BlogSection from './Components/Home/BlogSection';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <body className="MainApp">
      <div className="HomeHeader">
        <Header />
        <HomeSlider />
      </div>
      <p>Some Content</p>
      <BlogSection />
      <Footer />
    </body>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
