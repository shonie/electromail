import React from 'react';
import * as theme from './Folders.scss';
import { FolderProps } from './types';

export function Folder({ folder, onSelect }: FolderProps) {
    const handleClick = () => onSelect(folder.category);

    return (
        <li className={theme.folder} onClick={handleClick}>
            {folder.title}
        </li>
    );
}
