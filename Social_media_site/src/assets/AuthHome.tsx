import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link, useNavigate, Navigate } from "react-router-dom";
import Post from "./Post.tsx";
import SideBar from "./SideBar.tsx";
import classes from "./auth.module.css";
import { useGlobalState } from "./state.ts";
import { NewNavAuth } from "./NewNavAuth.tsx";

// Mock Data for Initial State
const mockPosts = [
  {
    post_id: 0,
    title: "Placeholder",
    description: "Placeholder",
    awslink: "https://photos-catposting.s3.us-east-1.amazonaws.com/cat1.webp",
    username: null,
  },
];

type PostType = {
  post_id: number;
  title: string;
  description: string;
  awslink: string;
  username: string | null;
};

function App() {
  const isMobile = window.screen.width <= 520;
  const [active, setActive] = useState("Home");
  const [posts, setPosts] = useState<PostType[]>(mockPosts);
  const [user] = useGlobalState("user");
  const navigate = useNavigate();

  // Redirect unauthorized users
  useEffect(() => {
    if (!user.auth) {
      console.log("Failed to Authenticate");
      navigate("/");
    }
  }, [user.auth, navigate]);

  // Fetch posts if authenticated
  useEffect(() => {
    if (user.auth) {
      fetch("http://localhost:5000/posts")
        .then((response) => response.json())
        .then((data) => setPosts(data))
        .catch((err) => console.error("Error fetching posts:", err));
    }
  }, [user.auth]);

  return (
    <div className={classes.containerauth}>
      {isMobile && <SideBar />}
      <div className={classes.navbar}>
        <NewNavAuth/>
      </div>
      <div className={classes.maincontent}>
        {posts.map((post) => (
          <Post key={post.post_id} post={post} />
        ))}
      </div>
    </div>
  );
}

export default App;
