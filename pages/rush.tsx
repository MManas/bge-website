import {NextPageWithLayout} from "./_app";
import React, {ReactElement} from "react";
import Layout from "../components/shared/layout/layout";

const Rush: NextPageWithLayout = () => {
  return (
    <div className='mb-52'></div>
  )
}

Rush.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
}

export default Rush;