import { Folder } from '../../types';

export interface FolderProps {
    folder: Folder;
    onSelect: (folder: string) => void;
}

export interface FoldersProps {
    onFolderSelect: (folder: string) => void;
}
