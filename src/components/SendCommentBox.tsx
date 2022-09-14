import React from "react";
import profile from "../assets/avatars/image-amyrobson.webp";

function SendCommentBox() {
  return (
    <form action="" className="bg-white flex flex-col lg:flex-row items-start py-5 px-6 rounded-lg my-4">
      <div className="w-10 h-10 overflow-hidden rounded-full relative hidden lg:block">
        <img
          src={profile}
          className="w-full h-full object-cover"
          alt="your profile"
        />
      </div>
      <textarea className="w-full lg:w-[80%] outline-none border-2 focus:border-purple leading-7 mx-auto bg-transparent resize-none p-3  border-gray-200 rounded-md" placeholder="Add a comment..."></textarea>
      <button type="submit" className="bg-purple hidden lg:block text-white rounded-md py-3 px-7 font-semibold hover:opacity-70">SEND</button>
      <div className="mt-4 w-full flex lg:hidden items-center justify-between">
        <div className="w-10 h-10 overflow-hidden rounded-full relative">
          <img
            src={profile}
            className="w-full h-full object-cover"
            alt="your profile"
          />
        </div>
        <button type="submit" className="bg-purple text-white rounded-md py-3 px-7 font-semibold hover:opacity-70">SEND</button>
      </div>
    </form>
  );
}

export default SendCommentBox;
