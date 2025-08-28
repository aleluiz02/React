import {format, formatDistanceToNow} from 'date-fns'
import { ptBR } from 'date-fns/locale'; 
import styles from './post.module.css';
import { Comment } from './comment.jsx';    
import { Avatar } from './avatar.jsx';

export function Post({author, publishedAt, content}) {
    const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {locale: ptBR})
    const publisedDateRelativeToNow = formatDistanceToNow(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {locale: ptBR, addSuffix: true})


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