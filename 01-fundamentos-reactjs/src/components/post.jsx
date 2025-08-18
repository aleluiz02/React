import styles from './post.module.css';

export function Post({ title, author }) {
    return (   
        <article className={styles.post}>
            <header>

                <div className={styles.author}>
                    <img
                    className={styles.avatar}
                    src='https://media.licdn.com/dms/image/v2/D4D03AQGpGwOvX1aJug/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1718588423549?e=1758153600&v=beta&t=tUNM2LzpRW6VCwnZ8MfE30xtEFiyNs9gl-2MHuzxLk8'
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
        </article>
    ) 
}