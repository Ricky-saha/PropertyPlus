import React from 'react';
import { useNavigate } from 'react-router-dom';
import './error.scss';

const ErrorPage = ({ 
  statusCode = '404',
  title = 'Page Not Found',
  message = "The page you're looking for doesn't exist or has been moved."
}) => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  const goHome = () => {
    navigate('/');
  };

  return (
    <div className="error-page">
      <div className="error-page__content">
        <div className="error-page__status">{statusCode}</div>
        
        <h1 className="error-page__title">{title}</h1>
        
        <p className="error-page__message">{message}</p>
        
        <div className="error-page__animation">
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
        </div>
        
        <div className="error-page__actions">
          <button 
            className="error-page__button error-page__button--primary"
            onClick={goHome}
          >
            Go Home
          </button>
          <button 
            className="error-page__button error-page__button--secondary"
            onClick={goBack}
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;