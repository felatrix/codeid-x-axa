import { ColumnDef } from '@tanstack/react-table';
import { UserInterface } from '@/types/api/user';
import { Link } from 'react-router-dom';
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger,
} from '@/components/ui/menubar';

export const columns: ColumnDef<UserInterface>[] = [
  {
    accessorKey: 'id',
    header: 'User Id',
  },
  {
    accessorKey: 'name',
    header: 'Name',
  },
  {
    accessorKey: 'username',
    header: 'User Name',
  },
  {
    accessorKey: 'email',
    header: 'Email',
  },
  {
    id: 'actions',
    cell: ({ row }) => (
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>Click Me</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>User Detail</MenubarItem>
            <MenubarSeparator />
            <MenubarItem>
              <Link
                to={{
                  pathname: `/users/${row.original.id}/posts`,
                  search: `userName=${row.original.username}`,
                }}
              >
                {' '}
                User's Posts
              </Link>
            </MenubarItem>
            <MenubarSeparator />
            <MenubarItem>
              <Link
                to={{
                  pathname: `/users/${row.original.id}/albums`,
                  search: `userName=${row.original.username}`,
                }}
              >
                {' '}
                User's Album
              </Link>
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    ),
  },
];
