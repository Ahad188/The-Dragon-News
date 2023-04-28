import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import NewsCard from '../NewsCard/NewsCard';

const Catagorie = () => {
     const {id} = useParams()
     const catagories = useLoaderData()
     return (
          <div>
               {id && <h1>This is a news catagories:{catagories.length}</h1>}
               {
                    catagories.map(news=><NewsCard key={news._id} news={news}></NewsCard>)
               }
          </div>
     );
};

export default Catagorie;