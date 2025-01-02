// gets the `conversationId` from the URL and checks if it is active

import { useParams } from 'next/navigation';
import { useMemo } from 'react';

export const useConversation = () => {
  const params = useParams();

  const conversationId = useMemo(() => params?.conversationId || '', [params]);

  const isActive = useMemo(() => !!conversationId, [conversationId]);

  return { conversationId, isActive };
};
