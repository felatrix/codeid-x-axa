import { useEffect, useState } from 'react';
import { api } from '@/api/api';
import { DataTable } from '@/components/posts/data-table';
import { columns } from '@/components/posts/column';
import { PostInterface } from '@/types/api/post';
import { debounce } from 'lodash';
import {useLocation} from 'react-router';

function Posts() {
  const [posts, setSetPosts] = useState<PostInterface[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const location = useLocation()
  const userId = location.pathname.split("/")[2]
  
  const fetchUsers = async () => {
    try {
      setLoading(true);
      const data = await api.getUserPosts(parseInt(userId));
      setSetPosts(data);
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
        <p className="text-2xl mb-2 font-bold">Post List</p>
        <>
          <DataTable columns={columns} data={posts} isLoading={loading} />
        </>
      </div>
    </>
  );
}

export default Posts;
