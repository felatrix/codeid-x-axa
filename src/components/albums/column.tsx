import { ColumnDef } from '@tanstack/react-table';
import { AlbumInterface } from '@/types/api/album';

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
];
