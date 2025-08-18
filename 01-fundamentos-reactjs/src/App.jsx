import styles from './App.module.css';

import { Header } from "./components/header.jsx";
import { Post } from "./components/post.jsx"
import { Sidebar } from "./components/sidebar.jsx";

import './global.css';


export function App() {

  return (
    <div> 
      <Header />
      
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post 
            author="Alexandre Olicshevis" 
            content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam soluta enim ab modi obcaecati dolorum quis, illo suscipit ratione voluptatem quam assumenda totam eius dolore reprehenderit odio, vero quibusdam amet." 
          />
          
          <Post 
            author="Jane Doe" 
            content="This is another post content, showcasing how to use the Post component with different props."
          />
        </main>
      </div>

    </div>
    
  )
}

