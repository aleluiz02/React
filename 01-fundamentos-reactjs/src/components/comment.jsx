import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './comment.module.css';
import { Avatar } from './avatar';

export function Comment({authorName, avatarUrl, content, onDeleteComment}) {

    function handleDeleteComment() {
        onDeleteComment(content);
    }

  return (
    <div className={styles.comment}>
        <Avatar 
            hasBorder={false}
            src={avatarUrl} 
            alt='Avatar do usuário'
        />  
        <div className={styles.commentBox}>
            <div className={styles.commentContent}>
                <header>
                    <div className={styles.authorAndTime}>
                        <strong>{authorName}</strong>
                        <time title='11 de Maio às 08:13h' dateTime='2024-05-11 08:13:30'>Cerca de 1h atrás</time>
                    </div>

                    <button onClick={handleDeleteComment} title='Deletar comentário'>
                        <Trash size={24} />
                    </button>
                </header>

                <p>{content}</p>
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