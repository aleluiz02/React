import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './comment.module.css';

export function Comment({ text, author }) {
  return (
    <div className={styles.comment}>
        <img
            className={styles.avatar}
            src={`https://github.com/aleluiz02.png`} 
            alt='Avatar do usuário'
        />  
        <div className={styles.commentBox}>
            <div className={styles.commentContent}>
                <header>
                    <div className={styles.authorAndTime}>
                        <strong>{author}</strong>
                        <time title='11 de Maio às 08:13h' dateTime='2024-05-11 08:13:30'>Cerca de 1h atrás</time>
                    </div>

                    <button title='Deletar comentário'>
                        <Trash size={24} />
                    </button>
                </header>

                <p>{text}</p>
            </div>

            <footer>
                <button type='button'>  
                    <ThumbsUp size={20} />
                    Aplaudir <span>0</span>
                </button>       
            </footer>
        </div>    
    </div>
  );
}