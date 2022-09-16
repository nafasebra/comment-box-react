import { useContext } from "react";
import { CommentListContext } from "../context/CommentContext";
import { StateModalContext } from "../context/ModalContext";

function DeleteModal() {
  const UseStateModalContext = useContext(StateModalContext);
  const UseCommentContext = useContext(CommentListContext);

  const DeleteYourComment = () => {
    // first showing modal, and delete selected comment.
    UseCommentContext.setCommentList([
      ...UseCommentContext.commentList.filter((item) => item.id !== UseStateModalContext.currentId),
    ]);
    UseStateModalContext.setStateModal(false);
  };

  return (
    <div
      className={`items-center justify-center contents-["*"] w-screen h-screen bg-dark-overlay fixed top-0 left-0 ${
        UseStateModalContext.stateModal ? "flex" : "hidden"
      }`}
    >
      <div className="z-20 w-[90%] sm:w-[330px] bg-white rounded-md py-4 px-5">
        <h3 className="font-semibold text-xl">Delete comment</h3>
        <p className="py-3 text-gray-500">
          Are you sure you want to delete this comment? This will remove and
          cannot be undone.
        </p>
        <div className="flex items-center justify-between">
          <button
            onClick={() => UseStateModalContext.setStateModal(false)}
            className="bg-gray-500 text-white rounded-md uppercase py-3 px-6 hover:opacity-50"
          >
            No, cancel
          </button>
          <button onClick={DeleteYourComment} className="bg-red-500 text-white rounded-md uppercase py-3 px-6 hover:opacity-50">
            yes, delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeleteModal;
