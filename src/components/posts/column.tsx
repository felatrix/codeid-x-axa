import { ColumnDef } from '@tanstack/react-table';
import { PostInterface } from '@/types/api/post';
import PostDetail from '../detail post/post-detail';

export const columns: ColumnDef<PostInterface>[] = [
  {
    accessorKey: 'User id',
    header: 'User Id',
  },
  {
    accessorKey: 'id',
    header: 'Post Id',
  },
  {
    accessorKey: 'title',
    header: 'Title',
  },
  {
    accessorKey: 'body',
    header: 'Content',
  },
  {
    id: 'actions',
    cell: ({ row }) => <PostDetail postDetailData={row.original}/>,
  },
];
