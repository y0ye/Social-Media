import { useState, useEffect } from 'react';  // Import useEffect here
import Post from './assets/Post.tsx';
import SideBar from './assets/SideBar.tsx';
import classes from './App.module.css';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import {
  IconFlame,
  IconDatabaseImport,
  IconLock,
  IconLogout,
  IconSettings,
} from '@tabler/icons-react';
import { px } from '@mantine/core';
import CreatePost from './assets/CreatePost.tsx';
import Login from './assets/Login.tsx';
import Signup from './assets/Signup.tsx';

// If you want mock data initially, make sure you define it like this:
const mockPosts = [
  {
    post_id: 6,
    title: "First Post",
    description: "Cat 1",
    awslink: "https://photos-catposting.s3.us-east-1.amazonaws.com/cat1.webp",
    username: null,
  },
  {
    post_id: 7,
    title: "Second Post",
    description: "Cat 2",
    awslink: "https://photos-catposting.s3.us-east-1.amazonaws.com/3c63100127d896f366c1933622e65e97.jpg",
    username: null,
  },
];

const dataOptions = [
  { link: '', label: 'Home', icon: IconFlame },
  { link: '', label: 'Security', icon: IconLock },
  { link: '', label: 'Upload Images', icon: IconDatabaseImport },
  { link: '', label: 'Settings', icon: IconSettings },
  { link: '', label: 'Logout', icon: IconLogout },
];

function App() {
  const isMobile = window.screen.width <= 520;

  const [active, setActive] = useState('Billing');
  const [loggedin, setLoginState] = useState(false);
  const [posts, setPosts] = useState(mockPosts);  // Use mockPosts as initial state

  // Fetch posts from API on component mount
  useEffect(() => {
    fetch("http://localhost:5000/posts")  // Fix the URL (remove the extra '/')
      .then(response => response.json())
      .then(data => setPosts(data))  // Set the fetched posts to the state
      .catch(err => console.error("Error fetching posts:", err));
  }, []);  // Empty dependency array, so it runs only once on mount

  const options = dataOptions.map((item) => (
    <a
      className={classes.link}
      data-active={item.label === active || undefined}
      href={item.link}
      key={item.label}
      onClick={(event) => {
        event.preventDefault();
        setActive(item.label);
      }}
    >
      <item.icon className={classes.linkIcon} stroke={1.5} />
      <span>{item.label}</span>
    </a>
  ));

  return (
    <Router>
      <Routes>
        <Route path="/App" element={<App />} />
        <Route path="/createPost" element={<CreatePost />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <div>
        <div className={classes.container}>
          {isMobile && <SideBar />}
          <div className={classes.navbar}>
            <div className={classes.titleversion}>
              <h1>Cat Posting</h1>
              <h4>v0.0.1</h4>
            </div>
            <div className={classes.navbaroption}>
              <a
                className={classes.link}
                data-active={'Home' === active || undefined}
                href=""
                onClick={(event) => {
                  event.preventDefault();
                  setActive('Home');
                }}
              >
                <IconFlame className={classes.linkIcon} stroke={1.5} />
                <Link to="/">Home</Link>
              </a>

              <a
                className={classes.link}
                data-active={'Signup' === active || undefined}
                href=""
                onClick={(event) => {
                  event.preventDefault();
                  setActive('Signup');
                }}
              >
                <IconLock className={classes.linkIcon} stroke={1.5} />
                <Link to="/signup">Signup</Link>
              </a>

              <a
                className={classes.link}
                data-active={'Create Post' === active || undefined}
                href=""
                onClick={(event) => {
                  event.preventDefault();
                  setActive('Create Post');
                }}
              >
                <IconDatabaseImport className={classes.linkIcon} stroke={1.5} />
                <Link to="/createPost">Create Post</Link>
              </a>

              <a
                className={classes.link}
                data-active={'Settings' === active || undefined}
                href=""
                onClick={(event) => {
                  event.preventDefault();
                  setActive('Settings');
                }}
              >
                <IconSettings className={classes.linkIcon} stroke={1.5} />
                <span>Settings</span>
              </a>

              <a
                className={classes.link}
                data-active={'Logout' === active || undefined}
                href=""
                onClick={(event) => {
                  event.preventDefault();
                  setActive('Logout');
                }}
              >
                <IconLogout className={classes.linkIcon} stroke={1.5} />
                <Link to="/login">Login</Link>
              </a>
            </div>
          </div>
          <div className={classes.maincontent}>
            {posts.map((post) => (
              <Post key={post.post_id} post={post} />
            ))}
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
