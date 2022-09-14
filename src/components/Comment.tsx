import React from "react";
import { ICommentType } from "../data";
import CountDown from "./CountDown";

type IPropType = {
  username: string;
  avatar: string;
  message: string;
  date: string;
  replies: ICommentType[];
  replyId: number | null;
  rate: number;
};

function Comment(props: IPropType) {
  // TODO: Checked from current user, if is you, changed style of this component
  const { avatar, message, username, date, replies, replyId, rate } = props;
  return (
    <>
      <div className="bg-white rounded-md p-7 mb-5 flex flex-col lg:flex-row">
        <div className="hidden lg:flex">
          <CountDown currentNumber={rate} />
        </div>
        <div className="ml-5">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between">
            <div className="flex items-center">
              <div className="w-8 h-8 overflow-hidden relative rounded-full">
                <img
                  src={avatar}
                  className="w-full h-full object-cover"
                  alt={username + " avatar"}
                />
              </div>
              <p className="font-semibold mx-4">{username}</p>
              <p className="text-gray-300 font-semibold">{date}</p>
            </div>
            <div className="hidden lg:flex items-center">
              <button className="flex items-center text-purple cursor-pointer">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6"
                  />
                </svg>
                <p className="ml-3">Reply</p>
              </button>
              {/* <div className="flex items-center">
                <button className="flex items-center text-red-500 mr-5 cursor-pointer">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                    <p className="ml-3">Delete</p>
                </button>
                <button className="flex items-center text-purple cursor-pointer">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg>
                    <p className="ml-3">Edit</p>
                </button>
            </div> */}
            </div>
          </div>
          <p className="pt-5 text-gray-400">{message}</p>
          <div className="flex lg:hidden items-center justify-between mt-4">
            <CountDown currentNumber={rate} />
            <div className="flex items-center">
              <button className="flex items-center text-purple cursor-pointer">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6"
                  />
                </svg>
                <p className="ml-3">Reply</p>
              </button>
              {/* <div className="flex items-center">
                <button className="flex items-center text-red-500 mr-5 cursor-pointer">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                    <p className="ml-3">Delete</p>
                </button>
                <button className="flex items-center text-purple cursor-pointer">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg>
                    <p className="ml-3">Edit</p>
                </button>
            </div> */}
            </div>
          </div>
        </div>
      </div>
      {replies.length > 0 && (
        <div className="ml-5 lg:ml-20">
          {replies.map((replyItem, replyIndex) => (
            <Comment
              rate={replyItem.rate}
              key={replyIndex}
              avatar={replyItem.profileImage}
              username={replyItem.username}
              date={replyItem.date}
              message={replyItem.message}
              replies={[]}
              replyId={Number(replyItem.parentId)}
            />
          ))}
        </div>
      )}
    </>
  );
}

export default Comment;
