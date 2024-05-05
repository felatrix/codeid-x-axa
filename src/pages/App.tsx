import { useEffect, useState } from 'react';
import { api } from '@/api/api';
import { DataTable } from '@/components/users/data-table';
import { columns } from '@/components/users/column';
import { UserInterface } from '@/types/api/user';
import { Button } from '@/components/ui/button';
import { debounce } from 'lodash';

function Home() {
  const [users, setUsers] = useState<UserInterface[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchUsers = async () => {
    try {
      setLoading(true);
      const data = await api.getUsers();
      setUsers(data);
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

  console.log(users);
  return (
    <>
      <div className="container">
        <p className="text-2xl mb-2 font-bold">Users List</p>
        <>
          <DataTable columns={columns} data={users} isLoading={loading} />
          <Button onClick={debouncedFetchUsers}>Refresh Users</Button>
        </>
      </div>
    </>
  );
}

export default Home;
