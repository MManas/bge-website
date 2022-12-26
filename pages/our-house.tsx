import {NextPageWithLayout} from "./_app";
import React, {ReactElement} from "react";
import Layout from "../components/shared/layout/layout";

const OurHouse: NextPageWithLayout = () => {
  return (
    <div className='mb-52'></div>
  )
}

OurHouse.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
}

export default OurHouse;