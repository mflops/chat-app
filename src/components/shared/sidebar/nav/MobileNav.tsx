'use client';
import React from 'react';
import { useNavigation } from '../../../../../hooks/useNavigation';
import { Card } from '@/components/ui/card';
import { UserButton } from '@clerk/clerk-react';
import Link from 'next/link';
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from '@/components/ui/tooltip';
import { Button } from '@/components/ui/button';
import { useConversation } from '../../../../../hooks/useConversation';

const MobileNav = () => {
  const { isActive } = useConversation();
  const paths = useNavigation();

  if (isActive) return null;

  return (
    <Card className='fixed bottom-4 w-[calc(100%-32px)] flex items-center h-16 p-2 lg:hidden'>
      <nav className='w-full'>
        <ul className='flex justify-evenly items-center'>
          {paths.map((path, i) => (
            <li key={i} className='relative cursor-pointer'>
              <Link href={path.href}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      size='icon'
                      variant={path.active ? 'default' : 'outline'}
                    >
                      {path.icon}
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent side='right'>
                    <p>{path.name}</p>
                  </TooltipContent>
                </Tooltip>
              </Link>
            </li>
          ))}
          <li>
            <UserButton />
          </li>
        </ul>
      </nav>
    </Card>
  );
};

export default MobileNav;
