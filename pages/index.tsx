import React from "react";
import Header from "components/partials/Header";
import PageIllustration from "components/partials/PageIllustration";
import HeroHome from "components/partials/HeroHome";
import Process from "components/partials/Process";
import FeaturesHome from "components/partials/FeaturesHome";
import Target from "components/partials/Target";
import News from "components/partials/News";
import Newsletter from "components/partials/Newsletter";
import Footer from "components/partials/Footer";

import { Posts } from "interfaces/Post";

function Home({ posts }: { posts: Posts }) {
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
        <HeroHome />
        <Process />
        <FeaturesHome />
        {/* <Tabs /> */}
        <Target />
        <News posts={posts} />
        <Newsletter />
      </main>

      {/*  Site footer */}
      <Footer />
    </div>
  );
}

export default Home;

const FRONTEND_URL =
  process.env.NEXT_PUBLIC_FRONTEND_URL ?? "http://localhost:3000";

export const getServerSideProps = async () => {
  const latestPosts = await fetch(`${FRONTEND_URL}/api/posts?limit=3`);
  const posts = await latestPosts.json();

  return {
    props: {
      posts,
    },
  };
};
