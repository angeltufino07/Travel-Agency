import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import mockStore from './mock'; 
import App from '../App'; 
import Footer from '../components/Footer/index';

test('renders components with BrowserRouter and Provider', () => {
  const store = mockStore({}); 
  const { getByText } = render(
    <BrowserRouter>
      <Provider store={store}>
        <App />
        <Footer />
      </Provider>
    </BrowserRouter>
  );


  expect(getByText('Organize the travel that you have always wanted')).toBeInTheDocument(); 
});