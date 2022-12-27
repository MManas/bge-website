import {NextPageWithLayout} from "./_app";
import React, {ReactElement} from "react";
import Layout from "../components/shared/layout/Layout";

const WhoWeAre: NextPageWithLayout = () => {
  return (
      <div className=''></div>
  )
}

WhoWeAre.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
}

export default WhoWeAre;