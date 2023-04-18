import { getDocs, collection, getDoc } from "firebase/firestore";
import { useState, useEffect } from "react";
import { db } from "../../config/firebase";
import { Post } from "./post";

export interface Post {
  id: string;
  userId: string;
  title: string;
  username: string;
  description: string;
}

export const Main = () => {
  const [postLists, setPostList] = useState<Post[] | null>(null);
  const postsRef = collection(db, "posts");

  const getPost = async () => {
    const data = await getDocs(postsRef);
    setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })) as Post[]);
  };

  useEffect(() => {
    getPost();
  }, []);
  return ( 
  <div>
    {postLists?.map((post) => (
       <Post post={post}/>
     ))}
  </div>
  );
};