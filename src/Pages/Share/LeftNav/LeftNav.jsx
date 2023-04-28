import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftNav = () => {
     const [catagories,setCatagories] = useState([])
     useEffect(()=>{
          fetch('http://localhost:5000/catagories')
          .then(res=>res.json())
          .then(data=>setCatagories(data))
          .catch(err=>console.log(err))
     },[])
     // console.log(catagories);
     return (
          <div>
               <h4>All category</h4>
                {
                    catagories.map(catagor=> <p key={catagor.id}
                    catagor={catagor}
                    >
                         <Link to={`./catagories/${catagor.id}`} className='text-black text-decoration-none'>{catagor.name}</Link>
                    </p>)
                }
          </div>
     );
};

export default LeftNav;