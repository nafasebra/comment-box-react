import { useContext } from "react";
import Comment from "../components/Comment";
import { CommentListContext } from "../context/CommentContext";

function CommentContainer() {
  const UseCommentContext = useContext(CommentListContext);

  const handleReplies = (id: number) => {
    return UseCommentContext.commentList.filter(
      (beforeComment) => beforeComment.parentId === id
    );
  };

  return (
    <div>
      {UseCommentContext.commentList.map((comment, index) => {
        if (comment.parentId === null) {
          return (
            <Comment
              key={index}
              avatar={comment.profileImage}
              username={comment.username}
              message={comment.message}
              date={comment.date}
              replies={handleReplies(comment.id)}
              replyId={null}
              rate={comment.rate}
            />
          );
        }
      })}
    </div>
  );
}

export default CommentContainer;
