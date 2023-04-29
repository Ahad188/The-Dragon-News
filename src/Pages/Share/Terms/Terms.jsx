import React from 'react';
import { Link } from 'react-router-dom';

const Terms = () => {
     return (
          <div>
               <h2>Term and conditione</h2>
               <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia quibusdam odit inventore, ut atque animi repudiandae deleniti facilis eaque vel.</p>
               <p>Go Back <Link to="/register">Register</Link></p>
          </div>
     );
};

export default Terms;