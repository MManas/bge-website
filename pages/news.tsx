import {NextPageWithLayout} from "./_app";
import React, {ReactElement} from "react";
import Layout from "../components/shared/layout/Layout";

const News: NextPageWithLayout = () => {
  return (
    <div className=''></div>
  )
}

News.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
}

export default News;