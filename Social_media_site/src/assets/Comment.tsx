import classes from './comment.module.css';
import { useGlobalState } from './state';
import { useEffect, useState } from 'react';


export default function Comment({ comment }) {
  const [user] = useGlobalState('user');

  return (
    <div className={classes.commentcontainer}>
      <div className={classes.comment}>
        <span className={classes.username}>@{comment.user_id}:</span>
        <span className={classes.message}> {comment.message}</span>
      </div>
    </div>
  )
}