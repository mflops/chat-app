import React from 'react';

type Props = React.PropsWithChildren<object>;

const ConversationsLayout = ({ children }: Props) => {
  return <div>{children}</div>;
};

export default ConversationsLayout;
