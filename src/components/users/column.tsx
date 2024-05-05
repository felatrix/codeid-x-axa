import { ColumnDef } from '@tanstack/react-table';
import { UserInterface } from '@/types/api/user';
import { Button } from '../ui/button';
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
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
              <MenubarItem>User's Posts</MenubarItem>
              <MenubarSeparator />
              <MenubarItem>User's Album</MenubarItem>
            </MenubarContent>
          </MenubarMenu>
        </Menubar>
    ),
  },
];
