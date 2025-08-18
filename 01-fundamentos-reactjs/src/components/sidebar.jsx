import {PencilLine} from 'phosphor-react'

import styles from './sidebar.module.css';

export function Sidebar() {
    return (
        <aside className={styles.sidebar}>

            <img   
            className={styles.cover}
            src="https://images.unsplash.com/photo-1605379399642-870262d3d051?q=60&w=500&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"    
            alt="Capa do usuário" />    

            <div className={styles.profile}>

                <img
                src='https://media.licdn.com/dms/image/v2/D4D03AQGpGwOvX1aJug/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1718588423549?e=1758153600&v=beta&t=tUNM2LzpRW6VCwnZ8MfE30xtEFiyNs9gl-2MHuzxLk8'
                />
                
                <strong>Alexandre Olicshevis</strong>
                <span>Web Developer</span>
            </div>

            <footer>
                <a href="#">
                    <PencilLine size={20} />
                    Editar seu perfil
                </a>
            </footer>

         </aside>
    )
}