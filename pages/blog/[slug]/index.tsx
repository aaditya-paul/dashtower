import React from "react";
import Header from "components/partials/Header";
import PageIllustration from "components/partials/PageIllustration";
import BlogSingle from "components/partials/Blog/BlogSingle";
import Newsletter from "components/partials/Newsletter";
import Footer from "components/partials/Footer";

import { Blogpost, Posts } from "interfaces/Post";

import Head from "next/head";

interface BlogProps {
  posts: {
    posts: Blogpost[];
  };
  featured?: Posts;
}

function BlogPost(props: BlogProps) {
  const BASE_URL =
    process.env.NEXT_PUBLIC_FRONTEND_URL ?? "https://localhost:3000";
  const POST_URL = `${BASE_URL}/blog/${props.posts.posts[0].slug}`;

  // TODO: Use Vercel OG Image Generator For OG Image

  return (
    <>
      <Head>
        <meta
          name="title"
          content={
            props.posts.posts[0].meta_title ?? props.posts.posts[0].title
          }
        />
        <meta
          name="description"
          content={
            props.posts.posts[0].meta_description ??
            props.posts.posts[0].excerpt
          }
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={POST_URL} />
        <meta
          property="og:title"
          content={
            props.posts.posts[0].meta_title ?? props.posts.posts[0].title
          }
        />
        <meta
          property="og:description"
          content={
            props.posts.posts[0].meta_description ??
            props.posts.posts[0].excerpt
          }
        />
      </Head>
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
          {props.featured && (
            <BlogSingle
              post={props.posts.posts[0]}
              featured={props.featured.posts}
            />
          )}
          <Newsletter />
        </main>

        {/*  Site footer */}
        <Footer />
      </div>
    </>
  );
}

export default BlogPost;

const FRONTEND_URL =
  process.env.NEXT_PUBLIC_FRONTEND_URL ?? "http://localhost:3000";

export const getServerSideProps = async (context: any) => {
  const { slug } = context.params;
  const post = await fetch(`${FRONTEND_URL}/api/post/${slug}`);
  const posts = await post.json();

  // Get Featured Posts
  const featuredPost = await fetch(`${FRONTEND_URL}/api/featured?limit=1`);
  const featured = await featuredPost.json();

  return {
    props: {
      posts,
      featured,
    },
  };
};
