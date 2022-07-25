import Head from "next/head";
import Link from "next/link";
import styles from '/styles/home.module.css'

const blog = () => {
    return (
        <>
        <Head>
        <title>Blog</title>
        <meta name="keywords" contents="sections"/>
        </Head>
        <div>
        <Link href="https://dev.to/samarthsb4real">
         <a>
          <h1>my blogs</h1>
         </a>
        </Link>
        <p>Nostrud est mollit velit est exercitation voluptate ut nisi cupidatat proident quis ex tempor quis. Laboris eiusmod aliquip laboris excepteur cillum consectetur duis excepteur incididunt ea deserunt quis tempor. Qui consequat laboris commodo est irure non fugiat Lorem Lorem commodo esse enim elit. Irure officia dolore et ut eu sit commodo elit nostrud sit officia dolor pariatur exercitation. Cillum sint reprehenderit ut velit est anim pariatur Lorem Lorem deserunt mollit.</p>
        <p>Nostrud est mollit velit est exercitation voluptate ut nisi cupidatat proident quis ex tempor quis. Laboris eiusmod aliquip laboris excepteur cillum consectetur duis excepteur incididunt ea deserunt quis tempor. Qui consequat laboris commodo est irure non fugiat Lorem Lorem commodo esse enim elit. Irure officia dolore et ut eu sit commodo elit nostrud sit officia dolor pariatur exercitation. Cillum sint reprehenderit ut velit est anim pariatur Lorem Lorem deserunt mollit.</p>  
        </div>
        </>
    );
}
 
export default blog;