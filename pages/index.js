import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import Image from "next/image";

export default function Home({ articles }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>My Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <main className={styles.main}>hello</main> */}
      <div className={styles.profile}>
        <Image
          className={styles.profile_img}
          src="/shu.jpg"
          alt="Picture of the author"
          width={150}
          height={150}
        />
        <h1>Shu Uesugi</h1>
      </div>
      <div className={styles.description}>
        <p>
          Hello, I’m <b>Shu</b>. I’m a software engineer and a translator
          (English/Japanese). You can contact me on <a href="#">Twitter</a>.
        </p>
        <div>
          (This is a sample website - you’ll be building a site like this in
          <a href="#">our Next.js tutorial.</a>)
        </div>
      </div>
      <div className={styles.posts}>
        {articles.map((elem, index) => {
          return (
            <div key="index">
              <Link href={elem.url}>{elem.title}</Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export async function getServerSideProps() {
  console.log(process.env.API_URL);
  // Fetch data from external API
  const res = await fetch(process.env.API_URL + "/api/articles");
  const articles = await res.json();

  // Pass data to the page via props
  return {
    props: {
      articles: articles,
    },
  };
}
