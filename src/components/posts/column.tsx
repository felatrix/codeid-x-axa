import { ColumnDef } from '@tanstack/react-table';
import { PostInterface } from '@/types/api/post';
import PostDetail from '../detail post/post-detail';
import EditPost from './editPost';
import DeletePost from './deletePost';


export const columns: ColumnDef<PostInterface>[] = [
  {
    accessorKey: 'userId',
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
    cell: ({ row }) => <PostDetail postDetailData={row.original} />,
  },
  {
    id: 'actions2',
    cell: ({ row }) => (
      <div className="flex flex-row gap-2">
        <EditPost detailPostData={row.original} />
        <DeletePost postId={row.original.id}/>
      </div>
    ),
  },
];
