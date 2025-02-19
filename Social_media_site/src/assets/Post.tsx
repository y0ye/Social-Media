import classes from '../App.module.css';
import CommentPanel from './CommentPanel';
import {
    setFocus,
} from './state';

export default function Post({ post }) {
    return (
        <div onMouseEnter={() => setFocus(post.post_id)} className={classes.post}>
            <div className={classes.postHeader}>
                <span className={classes.username}>@{post.username}</span>
                <span className={classes.username}>{post.title}</span>
            </div>

            {/* Post Image */}
            <img
                src={post.awslink} // Dynamically set the image URL
                alt="Post"
                className={classes.postImage}
            />

            {/* Post Description */}
            <div className={classes.postDescription}>
                <span className={classes.boldText}>{post.username}</span> {post.description}
                <div className={classes.comments}>
                    Comments:<CommentPanel post = {post}/>
                </div>
            </div>
        </div>
    );
}
