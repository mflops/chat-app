'use client';
import React, { Dispatch, SetStateAction } from 'react';
import { Id } from '../../../../../../../convex/_generated/dataModel';
import { useMutationState } from '../../../../../../../hooks/useMutationState';
import { api } from '../../../../../../../convex/_generated/api';
import { toast } from 'sonner';
import { ConvexError } from 'convex/values';
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogCancel,
  AlertDialogAction,
} from '@/components/ui/alert-dialog';

type Props = {
  conversationId: Id<'conversations'>;
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
};

const RemoveFriendDialog = ({ conversationId, open, setOpen }: Props) => {
  const { mutate: removeFriend, pending } = useMutationState(api.friend.remove);
  const handleRemoveFriend = async () => {
    removeFriend({ conversationId })
      .then(() => {
        toast.success('Friend removed.');
      })
      .catch((error) =>
        error instanceof ConvexError
          ? toast.error(error.data)
          : toast.error('Unexpected error occured.')
      );
  };
  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            Are you sure you want to remove this friend?
          </AlertDialogTitle>
          <AlertDialogDescription>
            This user will be removed from your friend list and all the messages
            will be deleted. This action is irreversible.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel disabled={pending}>Cancel</AlertDialogCancel>
          <AlertDialogAction disabled={pending} onClick={handleRemoveFriend}>
            Delete
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default RemoveFriendDialog;
