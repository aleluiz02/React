import styles from './post.module.css';
import { Comment } from './comment.jsx';    
import { Avatar } from './avatar.jsx';

export function Post({author, publishedAt}) {
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

                <time title="18 de Agosto às 17:13h" dateTime="2025-08-18 17:13:30">{publishedAt.toString()}</time>

            </header>

            <div className={styles.content}>

            </div>

            <form className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>
                <textarea placeholder='Deixe um comentário' />
                <footer>
                    <button type='submit'>Publicar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                <Comment text="Great post! Thanks for sharing." author="Alice Smith"/>
                <Comment text="Informative read, looking forward to more!" author="Bob Johnson"/>
            </div>

        </article>
    ) 
}