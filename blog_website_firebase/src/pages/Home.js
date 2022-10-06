import React, { useEffect, useState } from "react";
import { collection, deleteDoc,  doc,  getDocs } from "firebase/firestore";
import { auth, db } from "../firebase-config";
import {AiOutlineDelete} from "react-icons/ai"

const Home = ({isAuth}) => {
  const [postLists, setPostList] = useState([]);
  const postsCollectionRef = collection(db, "posts");

  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(postsCollectionRef);
      setPostList(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
    };
    getPosts()
  },[deletePost]);

  const deletePost = async (id) =>{
    const postDoc = doc(db, "posts", id)
    await deleteDoc(postDoc)
  }

  return <div className="homePage">{postLists.map((post) =>{
        return <div className="post"> {" "} 
        <div className="title">
            <h1> {post.title} </h1>
        </div>  
        <div className="deletePost">
        {isAuth && post.author.id === auth.currentUser.uid && (
                  <button
                    onClick={() => {
                      deletePost(post.id);
                    }}
                  >
                    {" "}
                    <AiOutlineDelete/>
                  </button>
                )}        </div>
        <div className="postTextContainer"> {post.postText} </div> 
        <h3>@{post.author.name}</h3>     
        </div>
        
  })}</div>;
};

export default Home;
