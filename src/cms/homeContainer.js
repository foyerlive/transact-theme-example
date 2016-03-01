import React from 'react';
import { Route, Link } from 'react-router';

const welcomeStructure = {
  children: [
    '<h1>Shop the full line of Vionic products.</h1>',
    '<li>Browse all Men\'s and Women\'s styles.</li>',
    '<li>See product details and reviews.</li>',
    '<li>Have items delivered to this store or directly to your home.</li>',
    'start',
    {
      className: 'techLink',
      children: [
        <Link to="/interact/cms/technology">About our Orthaheel technology ></Link>
      ]
    }

  ]
};

export default welcomeStructure