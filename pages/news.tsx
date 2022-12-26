import {NextPageWithLayout} from "./_app";
import React, {ReactElement} from "react";
import Layout from "../components/shared/layout/layout";

const News: NextPageWithLayout = () => {
  return (
    <Layout>
      <div className='bg-black w-full h-screen mb-52'></div>
    </Layout>
  )
}

News.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
}

export default News;