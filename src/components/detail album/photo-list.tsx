import { useEffect, useState } from 'react';
import { PhotoInterface } from '@/types/api/photo';
import { api as apiClient } from '@/api/api';
import { debounce } from 'lodash';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from '@/components/ui/carousel';
interface PhotoListProps {
  albumId: number;
  albumName: string;
}
const PhotoList = ({ albumId, albumName }: PhotoListProps) => {
  // carousel states
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);
  //list photo state
  const [photos, setPhotos] = useState<PhotoInterface[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const fetchUsers = async () => {
    try {
      setLoading(true);
      const data = await apiClient.getAlbumPhoto(albumId);
      setPhotos(data);
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

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  //   return <>{!loading ? JSON.stringify(photos) : <p>Loading...</p>}</>;
  return (
    <>
      <div className="w-full ml-8">
        <Carousel
          setApi={setApi}
          opts={{
            align: 'start',
          }}
          className="w-full max-w-sm"
        >
          <CarouselPrevious />
          {!loading ? (
            <CarouselContent>
              {photos.map((value, index) => (
                <CarouselItem
                  key={index}
                  className="flex flex-row justify-center shadow-lg"
                >
                  <div className="w-[85%] relative">
                    <img src={value.url} className="w-full aspect-square" />
                    <div className="absolute left-0 bottom-0 w-full bg-[#ffffff6e] p-2">
                      <p>
                        <span className="font-bold">Album Name :</span>{' '}
                        {albumName}
                      </p>
                      <p>
                        <span className="font-bold">Photo Title : </span>{' '}
                        {value.title}
                      </p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          ) : (
            <p>Loading...</p>
          )}
          <CarouselNext />
        </Carousel>
      </div>

      <div className="py-2 text-center text-sm text-muted-foreground">
        Slide {current} of {count}
      </div>
    </>
  );
};

export default PhotoList;
