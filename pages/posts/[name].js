import React from "react";
import { useRouter } from "next/router";

const Article = ({ articles }) => {
  console.log(articles);
  //   const router = useRouter();

  console.log(router);
  const name = router.query.name;

  //find post

  // router.push("/hello-world");

  return (
    <div>
      <h1>{article.title}</h1>
      Hello Article {name}
      <button></button>
    </div>
  );
};

export async function getServerSideProps() {
  const router = useRouter();

  const name = router.query.name;
  // Fetch data from external API
  const res = await fetch(
    `http://localhost:3000/api/article?name${router.query.name}`
  );
  const articles = await res.json();

  // Pass data to the page via props
  return {
    props: {
      articles: articles,
    },
  };
}

export default Article;
