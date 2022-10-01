import React from "react";
import post from "./Post.module.css";
const Post = (props) => {
  return (
    <div className={post.postCont}>
      <div className={post.item}>
        <img
          className={post.imgCont}
          src="https://ognisveta.ru/upload/iblock/4a2/4a29ef3be58168227c6f57680fc3576b.jpg"
          alt="Avatar"
        />
        <div className={post.messageCont}>{props.message}</div>
      </div>
      <div className={post.eventContaner}>
        <button
          className={post.button}
          onClick={() => {
            alert(`Do you want to remove ${props.id} post?`);
          }}
        >
          Remove
        </button>
        <button
          className={post.likeCont}
          onClick={() => props.addLike(props.id)}
        >
          Like {props.countLikes}
        </button>
      </div>
    </div>
  );
};
export default Post;
