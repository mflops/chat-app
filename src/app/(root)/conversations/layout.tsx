import ItemList from '@/components/shared/item-list/ItemList';
import React from 'react';

type Props = React.PropsWithChildren<object>;

const ConversationsLayout = ({ children }: Props) => {
  return (
    <>
      <ItemList title='Conversations'>Conversations Page</ItemList>
      {children}
    </>
  );
};

export default ConversationsLayout;
