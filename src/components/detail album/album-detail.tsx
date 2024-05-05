import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '../ui/button';
import { AlbumInterface } from '@/types/api/album';
import PhotoList from './photo-list';

interface AlbumDetailProps {
  albumDetailData: AlbumInterface;
}

const AlbumDetail = ({ albumDetailData }: AlbumDetailProps) => {
  return (
    <Dialog>
      <DialogTrigger>
        <Button>Detail</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{albumDetailData.title}</DialogTitle>
          <DialogDescription>
            <div className="flex flex-col w-full relative mt-4">
              <PhotoList
                albumId={albumDetailData.id}
                albumName={albumDetailData.title}
              />
            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default AlbumDetail;
