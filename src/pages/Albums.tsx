import { useEffect, useState } from 'react';
import { api } from '@/api/api';
import { DataTable } from '@/components/posts/data-table';
import { columns } from '@/components/posts/column';
import { AlbumInterface } from '@/types/api/album';
import { debounce } from 'lodash';
import {useLocation} from 'react-router';

function Albums() {
  const [albums, setSetAlbums] = useState<AlbumInterface[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const location = useLocation()
  const userId = location.pathname.split("/")[2]
  
  const fetchUsers = async () => {
    try {
      setLoading(true);
      const data = await api.getUserAlbum(parseInt(userId));
      setSetAlbums(data);
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
    <>
      <div className="container">
        <p className="text-2xl mb-2 font-bold">Albums List</p>
        <>
          <DataTable columns={columns} data={albums} isLoading={loading} />
        </>
      </div>
    </>
  );
}

export default Albums;
