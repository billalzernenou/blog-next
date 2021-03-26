// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
  res.status(200).json([
    {
      url: "/posts/ssg-ssr",
      title: "When to Use Static Generation v.s. Server-side Rendering",
      content:
        "We recommend using Static Generation (with and without data) whenever possible because your page can be built once and served by CDN, which makes it much faster than having a server",
      date: "January 2, 2020",
    },
    {
      url: "/posts/pre-rendering",
      title: "Two Forms of Pre-rendering",
      content: "# Two Forms of Pre-rendering\n- element 1\n- **element** 2",
      date: "January 2, 2020",
    },
  ]);
};
