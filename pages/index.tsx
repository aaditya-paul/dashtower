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

function Home() {
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
        <News />
        <Newsletter />
      </main>

      {/*  Site footer */}
      <Footer />
    </div>
  );
}

export default Home;
