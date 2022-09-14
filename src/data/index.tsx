import profile1 from "../assets/avatars/image-amyrobson.webp";
import profile2 from "../assets/avatars/image-juliusomo.webp";
import profile3 from "../assets/avatars/image-maxblagun.webp";
import profile4 from "../assets/avatars/image-ramsesmiron.webp";

export type ICommentType = {
  id: number;
  rate: number;
  parentId?: number | null;
  date: string;
  profileImage: string;
  username: string;
  message: string;
}

export const commnets = [
  {
    id: 1,
    rate: 2,
    parentId: null,
    date: "1 days ago",
    profileImage: profile1,
    username: "amyrobson",
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa ullam unde placeat quaerat et accusamus voluptate excepturi magnam dolorem! Nulla!",
  },
  {
    id: 2,
    rate: 2,
    parentId: 1,
    date: "1 days ago",
    profileImage: profile2,
    username: "juliusomo",
    message:
      "Adipisicing elit. Culpa ullam unde placeat quaerat et accusamus voluptate excepturi magnam dolorem! Nulla!",
  },
  {
    id: 3,
    rate: 2,
    parentId: null,
    date: "1 days ago",
    profileImage: profile4,
    username: "ramsesmiron",
    message:
      "Adipisicing elit. Culpa ullam unde placeat quaerat et accusamus voluptate excepturi magnam dolorem! Nulla!",
  },
  {
    id: 4,
    rate: 2,
    parentId: null,
    date: "1 days ago",
    profileImage: profile3,
    username: "maxblagun",
    message:
      "Adipisicing elit. Culpa ullam unde placeat quaerat et accusamus voluptate excepturi magnam dolorem! Nulla!",
  },
  {
    id: 5,
    rate: 2,
    parentId: 4,
    date: "1 days ago",
    profileImage: profile1,
    username: "amyrobson",
    message:
      "Adipisicing elit. Culpa ullam unde placeat quaerat et accusamus voluptate excepturi magnam dolorem! Nulla!",
  },
];


export const CurrentUser = {
  username: 'amyrobson',
  profileImage: profile1,
}