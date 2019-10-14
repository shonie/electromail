import { Folder } from '../../types';

export interface FolderProps {
    folder: Folder;
    onSelect: (folder: Folder) => void;
}

export interface FoldersProps {
    onFolderSelect: (folder: Folder) => void;
}
