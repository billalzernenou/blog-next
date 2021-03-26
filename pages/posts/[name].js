import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";

const Article = ({ article }) => {
  //   const router = useRouter();
  //   console.log(router);
  //   const name = router.query.name;

  //find post

  // router.push("/hello-world");

  return (
    <div>
      <h1>{article.title}</h1>
      <p>{article.date}</p>
      <p>{article.title}</p>
      <p className="abc">{article.content}</p>
      <a href="ksjdfh">qsd</a>

      <Link href="/"> go back</Link>
    </div>
  );
};

export async function getServerSideProps(context) {
  const { name } = context.query;
  //   console.log(name);
  // Fetch data from external API
  const res = await fetch(`${process.env.API_URL}/api/article?name=${name}`);
  const article = await res.json();

  // Pass data to the page via props
  return {
    props: {
      article: article,
    },
  };
}

export default Article;
