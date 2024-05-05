import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '../ui/button';
import { PostInterface } from '@/types/api/post';
import ListComments from './comments';

interface PostDetailProps {
  postDetailData: PostInterface;
}

const PostDetail = ({ postDetailData }: PostDetailProps) => {
  return (
    <Dialog>
      <DialogTrigger>
        <Button>Detail</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{postDetailData.title}</DialogTitle>
          <DialogDescription>
            <div className="flex flex-col">
              <p>{postDetailData.body}</p>
              <div className='mt-2'>
              <ListComments postId={postDetailData.id}/>
              </div>
            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default PostDetail;
