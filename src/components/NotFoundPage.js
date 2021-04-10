import React from 'react';
import { Link } from 'react-router-dom';
import 'react-dates/initialize';
// import 'react-dates/lib/css/_datepicker.css';

const NotFoundPage = () => (
  <div>
    404 - <Link to="/">Go home</Link>
  </div>
);

export default NotFoundPage;
