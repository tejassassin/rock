import React from "react";
import "./food.css"

export default function Food() {
  return (
    <div>
      <h1>Title</h1>
      <div>
        <img 
        className="foodpic"
        style={{
            width:"30%",
            marginLeft:"auto"
        }}
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Biryani_Home.jpg/1200px-Biryani_Home.jpg"
          alt=""
        />
      </div>
    </div>
  );
}
