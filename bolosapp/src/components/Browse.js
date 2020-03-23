import React from 'react';
import Portfolio from '../components/Portfolio.jsx'

const Browse = () => {

    const portfolioLinks = [
        {
          title: 'Aipim',
          caption: 'Illustration'
        },
        {
          title: 'Cenoura',
          caption: 'Graphic Design'
        },
        {
          title: 'Chocolate',
          caption: 'Identity'
        },
        {
          title: 'Churros',
          caption: 'Branding'
        },
        {
          title: 'Laranja',
          caption: 'Website Design'
        },
        {
          title: 'Mesclado',
          caption: 'I love pizza!'
        }
      ]

    return (

        <Portfolio portfolioLinks={portfolioLinks}></Portfolio>
    );
}
 
export default Browse;