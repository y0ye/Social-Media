import classes from '../App.module.css';

export default function Post({ post }) {
    return (
        <div className={classes.post}>
            {/* Post Header */}
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

            {/* Post Actions */}
            <div className={classes.postActions}>
                <button className={classes.actionBtn}>❤️</button>
                <button className={classes.actionBtn}>💬</button>
                <button className={classes.actionBtn}>🔖</button>
            </div>

            {/* Likes Count */}
            <div className={classes.likesCount}>{post.likes} likes</div>

            {/* Post Description */}
            <div className={classes.postDescription}>
                <span className={classes.boldText}>{post.username}</span> {post.description}
            </div>
        </div>
    );
}
