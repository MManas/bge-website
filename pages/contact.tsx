import {NextPageWithLayout} from "./_app";
import React, {ReactElement} from "react";
import Layout from "../components/shared/layout/layout";

const Contact: NextPageWithLayout = () => {
  return (
    <Layout>
      <div className='bg-black w-full h-screen mb-52'></div>
      </Layout>
  )
}

Contact.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
}

export default Contact;