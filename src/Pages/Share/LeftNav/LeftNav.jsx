import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LeftNav = () => {
  const [catagories, setCatagories] = useState([]);
  useEffect(() => {
    fetch("https://dragon-news-server-ahad188.vercel.app/catagories")
      .then((res) => res.json())
      .then((data) => setCatagories(data))
      .catch((err) => console.log(err));
  }, []);
  // console.log(catagories);
  return (
    <div>
      <h4>All category</h4>
      {catagories.map((catagor) => (
        <p key={catagor.id} catagor={catagor}>
          <Link to={`./${catagor.id}`} className="text-black text-decoration-none">
            {catagor.name}
          </Link>
        </p>
      ))}
    </div>
  );
};

export default LeftNav;
