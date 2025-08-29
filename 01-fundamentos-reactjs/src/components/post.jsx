import {format, formatDistanceToNow} from 'date-fns'
import { ptBR } from 'date-fns/locale'; 
import styles from './post.module.css';
import { Comment } from './comment.jsx';    
import { Avatar } from './avatar.jsx';
import { use, useState } from 'react';

export function Post({author, publishedAt, content}) {
    const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {locale: ptBR})
    const publisedDateRelativeToNow = formatDistanceToNow(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {locale: ptBR, addSuffix: true})
    
    const [comments, setComments] = useState ([    ])
    const [newCommentText, setNewCommentText] = useState('');

    function handleCreateNewComment(e) {
        e.preventDefault()
        const text = newCommentText.trim();
        if (!text) return;
            setComments(prev => [...prev, text]); 
            setNewCommentText('');                 
    }

    function deleteComment(commentToDelete) {
        const commentsWithoutDeletedOne = comments.filter(comment => {
            return comment !== commentToDelete;})
        setComments(commentsWithoutDeletedOne);
        
    }


    return (   
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src={author.avatarUrl}/>
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>

                <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>
                    {publisedDateRelativeToNow}
                </time>
            </header>

            <div className={styles.content}>
                {content.map(line => {
                    if(line.type === 'paragraph') {
                        return <p key={line.content}>{line.content}</p>;
                    } else if (line.type === 'link') {
                        return <p key={line.content}><a href="#">{line.content}</a></p>;
                    }
                })}
            </div>

            <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>
                <textarea
                    name='comment'
                    placeholder='Deixe um comentário'
                    value={newCommentText}
                    onChange={e => setNewCommentText(e.target.value)} />
                <footer>
                    <button type='submit'>Publicar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                {comments.map(comment => {
                    return <Comment 
                        key={comment}
                        authorName={author.name}
                        avatarUrl={author.avatarUrl}
                        content={comment}
                        onDeleteComment={deleteComment}
                    />
                })}
            </div>

        </article>
    ) 
}