import { ColumnDef } from '@tanstack/react-table';
import { AlbumInterface } from '@/types/api/album';
import AlbumDetail from '../detail album/album-detail';

export const columns: ColumnDef<AlbumInterface>[] = [
  {
    accessorKey: 'userId',
    header: 'User Id',
  },
  {
    accessorKey: 'id',
    header: 'Album Id',
  },
  {
    accessorKey: 'title',
    header: 'Title',
  },
  {
    id: 'actions',
    cell: ({ row }) => <AlbumDetail albumDetailData={row.original} />,
  },
];
