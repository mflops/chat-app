// define conversations and friends path and check which one is active

import { usePathname } from 'next/navigation';
import { MessageCircle, UsersRound } from 'lucide-react';
import { useMemo } from 'react';

export const useNavigation = () => {
  const pathName = usePathname();
  const paths = useMemo(
    () => [
      {
        name: 'Conversations',
        href: '/conversations',
        icon: <MessageCircle />,
        active: pathName.startsWith('/conversations'),
      },
      {
        name: 'Friends',
        href: '/friends',
        icon: <UsersRound />,
        active: pathName === '/friends',
      },
    ],
    [pathName]
  );
  return paths;
};
