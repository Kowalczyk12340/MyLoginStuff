import React from "react";
import { useSpring, animated } from "react-spring";
import AddComments from "./addComment/AddComment";
import CommmentList from "./commentList/CommentList";

const Comments = ({ comments, postId, postAuthorId }) => {
  const fade = useSpring({
    from: {
      opacity: 0,
    },
    opacity: 1,
    config: {
      duration: 500,
    },
  });
  return (
    <React.Fragment>
      <animated.div>
        <AddComments postId={postId} />
        <CommmentList
          postAuthorId={postAuthorId}
          postId={postId}
          comments={comments}
        />
      </animated.div>
    </React.Fragment>
  );
};

export default Comments;
