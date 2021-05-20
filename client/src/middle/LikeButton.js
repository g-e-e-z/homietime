import React, { useEffect, useState } from "react";
import { useMutation } from "@apollo/react-hooks";

import gql from "graphql-tag";

import { IconButton } from "@material-ui/core";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";

function LikeButton({ postId, user }) {
  const [liked, setLiked] = useState(false);
  useEffect(() => {
    if (user && user.liked.find((post) => post === postId)) {
      setLiked(true);
    } else setLiked(false);
  }, [user, postId, liked]);

  const [likePost] = useMutation(LIKE_POST, {
    variables: { postId },
  });

  const likeIcon = liked ? "primary" : "disabled";

  return (
    <div>
      <IconButton className="post-up" onClick={likePost}>
        <KeyboardArrowUpIcon color={likeIcon} />
      </IconButton>
    </div>
  );
}

export default LikeButton;

const LIKE_POST = gql`
  mutation LikePost($postId: ID!) {
    likePost(postId: $postId) {
      id
      likes
      dislikes
    }
  }
`;