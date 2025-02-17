import classes from './commentpanel.module.css';
import { useEffect, useState } from 'react';
import Comment from './Comment';
import { Button } from '@mantine/core';
import CreateComment from './CreateComment';
import { Link } from 'react-router-dom';

const mockComment = [
    {
        comment_id: 0,
        message: "No comments yet!",
        user_id: "System",
        post_id: 0,
    }
];

type CommentType = {
    comment_id: number;
    message: string;
    user_id: string;
    post_id: number;
};

export default function CommentPanel({ post }) {  // Accept post as a prop
    const [comments, setComments] = useState<CommentType[]>(mockComment);
    const [showCreateComment, setShowCreateComment] = useState(false);

    // Fetch comments for THIS post only
    useEffect(() => {
        if (post.post_id) {
            console.log("Fetching comments for post:", post.post_id);
            fetch(`http://localhost:5000/comments/${post.post_id}`)
                .then((response) => response.json())
                .then((data) => setComments(data.length > 0 ? data : mockComment))
                .catch((err) => console.error("Error fetching comments:", err));
        }
    }, [post.post_id]); // Dependency: Only re-fetch when THIS post is clicked

    return (
        <div className={classes.comentcontainer}>
            <div className={classes.comment}>
                {comments.map((comment) => (
                    <Comment key={comment.comment_id} comment={comment} />
                ))}
            </div>

            <div className={classes.bar}>
                <Link to= '/CreateComment'>
                <Button onClick={() => setShowCreateComment(showCreateComment)}>Create Comment</Button>
                </Link>
            </div>

            {showCreateComment && <CreateComment postId={post.post_id} />}
        </div>
    );
}
