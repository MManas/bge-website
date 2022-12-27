import {NextPageWithLayout} from "./_app";
import React, {ReactElement} from "react";
import Layout from "../components/shared/layout/Layout";

const OurHouse: NextPageWithLayout = () => {
  return (
    <div className=''></div>
  )
}

OurHouse.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
}

export default OurHouse;