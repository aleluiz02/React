import styles from './sidebar.module.css';

export function Sidebar() {
    return (
        <aside className={styles.sidebar}>

            <img   
            className={styles.cover}
            src="https://images.unsplash.com/photo-1605379399642-870262d3d051?q=60&w=500&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"    
            alt="Capa do usuário" />    

            <div className={styles.profile}>
                <strong>Alexandre Olicshevis</strong>
                <span>Web Developer</span>
            </div>

            <footer>
                <a href="#">Editar seu perfil</a>
            </footer>

         </aside>
    )
}