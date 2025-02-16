import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link, useNavigate, Navigate } from "react-router-dom";
import Post from "./Post.tsx";
import SideBar from "./SideBar.tsx";
import classes from "./auth.module.css";
import { IconFlame, IconDatabaseImport, IconLogout, IconSettings } from "@tabler/icons-react";
import { useGlobalState } from "./state.ts";

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
        <div className={classes.titleversion}>
          <h1>Cat Posting</h1>
          <h4>v0.0.1</h4>
        </div>
        <div className={classes.navbaroption}>
          <Link className={classes.link} to="/AuthHome" onClick={() => setActive("Home")} data-active={active === "Home"}>
            <IconFlame className={classes.linkIcon} stroke={1.5} />
            Home
          </Link>

          <Link className={classes.link} to="/CreatePost" onClick={() => setActive("Create Post")} data-active={active === "Create Post"}>
            <IconDatabaseImport className={classes.linkIcon} stroke={1.5} />
            Create Post
          </Link>

          <Link className={classes.link} to="/Settings" onClick={() => setActive("Settings")} data-active={active === "Settings"}>
            <IconSettings className={classes.linkIcon} stroke={1.5} />
            Settings
          </Link>

          <Link className={classes.link} to="/" onClick={() => setActive("Logout")} data-active={active === "Logout"}>
            <IconLogout className={classes.linkIcon} stroke={1.5} />
            Logout
          </Link>
        </div>
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
