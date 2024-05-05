import { ColumnDef } from '@tanstack/react-table';
import { PostInterface } from '@/types/api/post';

export const columns: ColumnDef<PostInterface>[] = [
  {
    accessorKey: 'id',
    header: 'User Id',
  },
  {
    accessorKey: 'title',
    header: 'Title Post',
  },
  {
    accessorKey: 'body',
    header: 'Content',
  },
];
