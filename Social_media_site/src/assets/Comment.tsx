import classes from './comment.module.css';

export default function Comment({ comment }) {

  return (
    <div className={classes.commentcontainer}>
      <div className={classes.comment}>
        <span className={classes.username}>@{comment.user_id}:</span>
        <span className={classes.message}> {comment.message}</span>
      </div>
    </div>
  )
}