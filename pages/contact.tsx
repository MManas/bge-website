import {NextPageWithLayout} from "./_app";
import React, {ReactElement} from "react";
import Layout from "../components/shared/layout/Layout";

const Contact: NextPageWithLayout = () => {
  return (
    <div className=''></div>
  )
}

Contact.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
}

export default Contact;