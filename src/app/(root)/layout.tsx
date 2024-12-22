import React from 'react';

type Props = React.PropsWithChildren<object>;

const Layout = ({ children }: Props) => {
  return <div>{children}</div>;
};

export default Layout;
