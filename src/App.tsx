import { useContext, useState } from "react";
import Comment from "./components/Comment";
import SendCommentBox from "./components/SendCommentBox";
import CommentContainer from "./container/CommentContainer";
import { CommentListProvider } from "./context/CommentContext";


function App() {
  return (
    <CommentListProvider>
      <div className="relative overflow-hidden w-[90%] lg:w-[900px] mx-auto min-h-[calc(100vh-50px)] py-5">
        <CommentContainer />
        <SendCommentBox />
      </div>
    </CommentListProvider>
  );
}

export default App;
