import React from "react";
import Header from "components/partials/Header";
import PageIllustration from "components/partials/PageIllustration";
import BlogList from "components/partials/Blog/BlogList";
import Newsletter from "components/partials/Newsletter";
import Footer from "components/partials/Footer";

import { Posts, FeaturedPosts } from "interfaces/Post";
import { GetServerSideProps } from "next";

interface BlogProps {
  posts: Posts;
  featured?: FeaturedPosts;
}

function Blog(props: BlogProps): JSX.Element {
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
        <BlogList posts={props.posts.posts} />
        <Newsletter />
      </main>

      {/*  Site footer */}
      <Footer />
    </div>
  );
}

export default Blog;

const FRONTEND_URL =
  process.env.NEXT_PUBLIC_FRONTEND_URL ?? "http://localhost:3000";

export const getServerSideProps: GetServerSideProps = async () => {
  const featuredPost = await fetch(`${FRONTEND_URL}/api/featured`);
  const featured = await featuredPost.json();
  const allPosts = await fetch(`${FRONTEND_URL}/api/posts`);
  const posts = await allPosts.json();

  return {
    props: {
      featured,
      posts,
    },
  };
};
