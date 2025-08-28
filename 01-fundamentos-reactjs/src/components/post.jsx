import styles from './post.module.css';
import { Comment } from './comment.jsx';    
import { Avatar } from './avatar.jsx';

export function Post({ title, author }) {
    return (   
        <article className={styles.post}>
            <header>

                <div className={styles.author}>
                    <Avatar 
                        src='https://github.com/FernaCaroline.png'
                    />
                    <div className={styles.authorInfo}>
                        <strong>{author}</strong>
                        <span>Web Developer</span>
                    </div>
                </div>

                <time title="18 de Agosto às 17:13h" dateTime="2025-08-18 17:13:30">Publicado há 1h</time>

            </header>

            <div className={styles.content}>

                <p>{title}</p>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam soluta enim ab modi obcaecati dolorum quis, illo suscipit ratione voluptatem quam assumenda totam eius dolore reprehenderit odio, vero quibusdam amet.</p>
                <p><a href="">Teste.link</a></p>

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