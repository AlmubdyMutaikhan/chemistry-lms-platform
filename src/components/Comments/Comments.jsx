import React, { useState } from 'react';
import './CommentsComponent.css';
import { FaThumbsUp } from 'react-icons/fa'; // Importing the thumbs-up icon

const CommentsComponent = () => {
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState("");

    const handleCommentSubmit = () => {
        if (!newComment.trim()) return;
        const commentToAdd = {
            id: comments.length + 1,
            text: newComment,
            likes: 0,
            replies: []
        };
        setComments([...comments, commentToAdd]);
        setNewComment("");
    };

    const handleReply = (id, replyText) => {
        if (!replyText.trim()) return; // Prevent empty replies
        const updatedComments = comments.map(comment => {
            if (comment.id === id) {
                const newReply = { id: comment.replies.length + 1, text: replyText };
                return { ...comment, replies: [...comment.replies, newReply] };
            }
            return comment;
        });
        setComments(updatedComments);
    };

    const handleLike = (id) => {
        const updatedComments = comments.map(comment => {
            if (comment.id === id) {
                return { ...comment, likes: comment.likes + 1 };
            }
            return comment;
        });
        setComments(updatedComments);
    };

    return (
        <div className="comments-section">
            <h2>Пікірталас</h2>
            <input
                type="text"
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                placeholder="Пікір қалдыр..."
                className="comment-input"
            />
            <button onClick={handleCommentSubmit} className="comment-submit">Пікір қалдыру</button>
            <ul>
                {comments.map(comment => (
                    <li key={comment.id}>
                        {comment.text} <br/>
                        <span className="likes">
                            <FaThumbsUp className="like-icon" onClick={() => handleLike(comment.id)} />
                            {comment.likes}
                        </span>
                        <CommentReply comment={comment} onReply={(id, replyText) => handleReply(id, replyText)} />
                    </li>
                ))}
            </ul>
        </div>
    );
};

const CommentReply = ({ comment, onReply }) => {
    const [replyText, setReplyText] = useState("");

    return (
        <>
            {comment.replies.map(reply => (
                <p key={reply.id} className="reply">{reply.text}</p>
            ))}
            <input
                type="text"
                value={replyText}
                onChange={(e) => setReplyText(e.target.value)}
                placeholder="Жауап беру..."
                className="reply-input"
            />
            <button onClick={() => {
                onReply(comment.id, replyText);
                setReplyText("");
            }} className="reply-submit">Жауап беру</button>
        </>
    );
};

export default CommentsComponent;
