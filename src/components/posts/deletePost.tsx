import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '../ui/button';
import { api } from '@/api/api';
import { useState } from 'react';
import { useToast } from '../ui/use-toast';
type DeletePost = {
  postId: number;
};
const DeletePost = ({ postId }: DeletePost) => {
  const [open, setOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false); // State for loading
  const { toast } = useToast();
  const onSubmit = async () => {
    try {
      setIsLoading(true);

      const newPost = await api.deletePost(postId);
      console.log('Post Successful Edited:', newPost);
      setOpen(false);
      toast({
        title: 'Post Successful Delete',
      });
    } catch (error) {
      toast({
        title: 'Something wrong',
      });
      console.error('Error creating post:', error);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger>
        <Button>Delete</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you absolutely sure?</DialogTitle>
          <DialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </DialogDescription>
          {!isLoading ? (
            <div className="flex flex-row justify-center gap-3">
              <Button onClick={() => onSubmit()}>Delete</Button>
              <Button onClick={() => setOpen(false)}>Cancel</Button>
            </div>
          ) : (
            <p>Loading...</p>
          )}
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default DeletePost;
