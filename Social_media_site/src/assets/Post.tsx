import classes from '../App.module.css'

export default function Post(){
    return(
        <div className={classes.post}>
              {/* Post Header */}
              <div className={classes.postHeader}>
                <img
                  src="https://via.placeholder.com/40"
                  alt="User"
                  className={classes.profilePic}
                />
                <span className={classes.username}>john_doe</span>
              </div>

              {/* Post Image */}
              <img
                src="/src/assets/cat1.webp"
                alt="Post"
                className={classes.postImage}
              />

              {/* Post Actions */}
              <div className={classes.postActions}>
                <button className={classes.actionBtn}>❤️
                </button>
                <button className={classes.actionBtn}>💬</button>
                <button className={classes.actionBtn}>🔖</button>
              </div>

              {/* Likes Count */}
              <div className={classes.likesCount}>{ } likes</div>

              {/* Post Description */}
              <div className={classes.postDescription}>
                <span className={classes.boldText}>john_doe</span> Loving this beautiful
                sunset! 🌅 #nature #sunset
              </div>
            </div>
    )
}