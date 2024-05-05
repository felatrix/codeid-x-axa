import { api } from '@/api/api';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';

import { CommentInterface } from '@/types/api/comment';
import { debounce } from 'lodash';
import { useEffect, useState } from 'react';
import React from 'react';
import { Button } from '../ui/button';

interface ListCommentsProps {
  postId: number;
}

const CardItem = () => (
  <Card>
    <CardHeader>
      <CardTitle>Card Title</CardTitle>
      <CardDescription>Card Description</CardDescription>
    </CardHeader>
    <CardContent>
      <p>Card Content</p>
    </CardContent>
    <CardFooter>
      <p>Card Footer</p>
    </CardFooter>
  </Card>
);
const ListComments = ({ postId }: ListCommentsProps) => {
  const [comments, setSetComments] = useState<CommentInterface[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const fetchUsers = async () => {
    try {
      setLoading(true);
      const data = await api.getPostComments(postId);
      setSetComments(data);
    } catch (error) {
      console.error('Error fetching users:', error);
      // Handle error
    } finally {
      setLoading(false);
    }
  };
  const debouncedFetchUsers = debounce(fetchUsers, 500);

  useEffect(() => {
    debouncedFetchUsers();
    return () => {
      debouncedFetchUsers.cancel();
    };
  }, []);
  return (
    <Dialog>
      <DialogTrigger>
        <Button> See Comments ({comments.length})</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Comments</DialogTitle>
          {!loading ? (
            <DialogDescription>
              <ScrollArea className="h-[400px] rounded-md border p-4">
                {comments.map((value, index) => (
                  <React.Fragment key={index}>
                    <Card className="mb-2">
                      <CardHeader className="py-2">
                        <CardTitle>{value.name}</CardTitle>
                        <CardDescription>{value.email}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p>{value.body}</p>
                      </CardContent>
                    </Card>
                  </React.Fragment>
                ))}
              </ScrollArea>
            </DialogDescription>
          ) : (
            ''
          )}
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default ListComments;
