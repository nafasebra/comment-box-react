import SendCommentBox from "./components/SendCommentBox";
import CommentContainer from "./container/CommentContainer";
import { CommentListProvider } from "./context/CommentContext";
import { StateModalProvider } from "./context/ModalContext";

function App() {
  return (
    <CommentListProvider>
      <StateModalProvider>
        <div className="relative overflow-hidden w-[90%] lg:w-[900px] mx-auto min-h-[calc(100vh-50px)] py-5">
          <CommentContainer />
          <SendCommentBox doReply={false} parentId={null} />
        </div>
      </StateModalProvider>
    </CommentListProvider>
  );
}

export default App;
