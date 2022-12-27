import {NextPageWithLayout} from "./_app";
import React, {ReactElement} from "react";
import Layout from "../components/shared/layout/Layout";

const Rush: NextPageWithLayout = () => {
  return (
    <div className=''></div>
  )
}

Rush.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
}

export default Rush;