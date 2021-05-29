import React from "react";

import "./post.css";

export default function post() {
  return (
    <div className="main-post">
      <div className="post">
        <div>
          <a href="/food" style={{display:"flex"}}>
            <div className="pleft">
              <h2 style={{ borderBottom: "1px solid white", padding: "0.2em" }}>
                Title
              </h2>
              <p>
                hello this is biryani very tasty. want to order it? call this
                number.
              </p>
            </div>
            <div className="pright">
              <img
                className="img"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Biryani_Home.jpg/1200px-Biryani_Home.jpg"
                alt=""
              />
            </div>
          </a>
        </div>
      </div>

      <div className="comments">comments</div>
    </div>
  );
}
