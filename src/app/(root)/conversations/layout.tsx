'use client';

import ItemList from '@/components/shared/item-list/ItemList';
import { useQuery } from 'convex/react';
import React from 'react';
import { api } from '../../../../convex/_generated/api';
import { Loader2 } from 'lucide-react';
import DMConversationItem from './_component/DMConversationItem';

type Props = React.PropsWithChildren<object>;

const ConversationsLayout = ({ children }: Props) => {
  const conversations = useQuery(api.conversations.get);

  return (
    <>
      <ItemList title='Conversations'>
        {conversations ? (
          conversations.length === 0 ? (
            <p className='w-full h-full flex items-center justify-center'>
              No conversations yet.
            </p>
          ) : (
            conversations.map((conversation) => {
              return conversation.conversation.isGroup ? null : (
                <DMConversationItem
                  key={conversation.conversation._id}
                  id={conversation.conversation._id}
                  imageUrl={conversation.otherMember?.imageUrl || ''}
                  username={conversation.otherMember?.username || ''}
                  lastMessageContent={conversation.lastMessage?.content}
                  lastMessageSender={conversation.lastMessage?.sender}
                ></DMConversationItem>
              );
            })
          )
        ) : (
          <Loader2></Loader2>
        )}
      </ItemList>
      {children}
    </>
  );
};

export default ConversationsLayout;
