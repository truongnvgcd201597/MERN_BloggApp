import React from "react";

export default function ContentList() {
  return (
    <section className="posts">
      <article className="post">
        <div className="post-image">
          <img
            src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg"
            alt="post image"
          />
        </div>
        <div className="post-content">
          <h2 className="post-title">
            How ChatGPT and others tools can tranform our world
          </h2>
          <div className="post-meta">
            <span className="post-author">NV Truong</span>
            <span className="post-date">2024-01-25 08:28</span>
          </div>
          <p className="post-body">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            quae. Quam, quibusdam. Quaerat, dolorum. Quisquam, quae. Quam,
            quibusdam. Quaerat, dolorum.
          </p>
          <button className="post-btn">Read More</button>
        </div>
      </article>
    </section>
  );
}
