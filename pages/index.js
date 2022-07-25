import Head from "next/head";
import styles from '../styles/home.module.css'
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
      <title>Home</title>
      <meta name="keywords" contents="sections"/>
      </Head>
      <div className={styles.text}>       <h1>welcome!</h1>
        <p className={styles.text}>Nostrud est mollit velit est exercitation voluptate ut nisi cupidatat proident quis ex tempor quis. Laboris eiusmod aliquip laboris excepteur cillum consectetur duis excepteur incididunt ea deserunt quis tempor. Qui consequat laboris commodo est irure non fugiat Lorem Lorem commodo esse enim elit. Irure officia dolore et ut eu sit commodo elit nostrud sit officia dolor pariatur exercitation. Cillum sint reprehenderit ut velit est anim pariatur Lorem Lorem deserunt mollit.</p>
        <p className={styles.text}>Nostrud est mollit velit est exercitation voluptate ut nisi cupidatat proident quis ex tempor quis. Laboris eiusmod aliquip laboris excepteur cillum consectetur duis excepteur incididunt ea deserunt quis tempor. Qui consequat laboris commodo est irure non fugiat Lorem Lorem commodo esse enim elit. Irure officia dolore et ut eu sit commodo elit nostrud sit officia dolor pariatur exercitation. Cillum sint reprehenderit ut velit est anim pariatur Lorem Lorem deserunt mollit.</p>
      </div>
    </>
  )
}