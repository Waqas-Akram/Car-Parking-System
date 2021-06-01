import React, { Fragment, useState } from "react";

const Admin = () => {
  const [loading, setLoading] = useState(true);

  return loading ? <>loadingg...</> : <Fragment>Admin</Fragment>;
};

export default Admin;
