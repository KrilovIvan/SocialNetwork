import React from "react";
import myPosts from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  const postsElem = props.dataPosts.map((post) => (
    <Post
      message={post.message}
      countLikes={post.countLikes}
      id={post.id}
      addLike={props.addLike}
      disLike={props.disLike}
    />
  ));

  const postRef = React.createRef();
  const addPostEl = React.createRef();

  const addedPost = () => {
    props.addedPost();

    postRef.current.scrollIntoView({
      behavior: "smooth",
      block: "end",
      inline: "nearest",
    });
  };

  const onPostChange = () => {
    const upText = addPostEl.current.value;
    props.onPostChange(upText);
  };

  const onKeyDown = (keyPress) => {
    if (keyPress.keyCode === 13) {
      props.addedPost();
    }
  };

  return (
    <div className={myPosts.contaner}>
      <div className={myPosts.postsBlock}>
        <h2>My Posts</h2>
        <div>
          <div className={myPosts.textCont}>
            <textarea
              className={myPosts.textarea}
              onChange={onPostChange}
              ref={addPostEl}
              placeholder="Расскажи друзьям"
              value={props.newPostText}
              onKeyDown={onKeyDown}
            ></textarea>

            <div className={myPosts.buttonSpace}>
              <button className={myPosts.button} onClick={addedPost}>
                Add Post
              </button>
            </div>
          </div>
        </div>
      </div>
      <div ref={postRef} className={myPosts.posts}>
        {postsElem}
      </div>
    </div>
  );
};
export default MyPosts;
