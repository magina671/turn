import React from "react";
import {Link} from 'react-router-dom';

export default function MainPage() {
  const Exit = () => {
    localStorage.removeItem("token");
  };

  return (
    <div>
      <p>Main Page</p>
      <Link to="/">
        <button onClick={Exit}>Выйти</button>
      </Link>
    </div>
  );
}
