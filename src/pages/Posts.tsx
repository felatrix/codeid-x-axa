import { useEffect, useState } from 'react';
import { api } from '@/api/api';
import { DataTable } from '@/components/posts/data-table';
import { columns } from '@/components/posts/column';
import { PostInterface } from '@/types/api/post';
import { debounce } from 'lodash';
import { useLocation } from 'react-router';
import AddPost from '@/components/posts/addPost';
function Posts() {
  const [posts, setSetPosts] = useState<PostInterface[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const location = useLocation();
  const userId = location.pathname.split('/')[2];
  const queryParameters = new URLSearchParams(window.location.search);
  const userName = queryParameters.get('userName');
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
        <div className="flex flex-row justify-between my-2">
          <p className="text-2xl mb-2 font-bold">{userName}'s Posts</p>
          <AddPost />
        </div>
        <>
          <DataTable columns={columns} data={posts} isLoading={loading} />
        </>
      </div>
    </>
  );
}

export default Posts;
