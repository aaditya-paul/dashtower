import React from "react";
import Header from "components/partials/Header";
import PageIllustration from "components/partials/PageIllustration";
import BlogSingle from "components/partials/Blog/BlogSingle";
import Newsletter from "components/partials/Newsletter";
import Footer from "components/partials/Footer";

import { Blogpost } from "interfaces/Post";

interface BlogProps {
  posts: {
    posts: Blogpost[];
  };
}

function BlogPost(props: BlogProps) {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="grow">
        {/*  Page illustration */}
        <div
          className="relative max-w-6xl mx-auto h-0 pointer-events-none"
          aria-hidden="true"
        >
          <PageIllustration />
        </div>

        {/*  Page sections */}
        <BlogSingle post={props.posts.posts[0]} />
        <Newsletter />
      </main>

      {/*  Site footer */}
      <Footer />
    </div>
  );
}

export default BlogPost;

export const getServerSideProps = async (context: any) => {
  const { slug } = context.params;
  const post = await fetch(
    `${process.env.NEXT_PUBLIC_FRONTEND_URL}/api/post/${slug}`
  );
  const posts = await post.json();

  return {
    props: {
      posts,
    },
  };
};
