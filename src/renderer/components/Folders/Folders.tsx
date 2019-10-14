import React from 'react';
import { FoldersProps } from './types';
import { Folder as FolderComponent } from './Folder';
import * as theme from './Folders.scss';
import { Folder } from '../../types';
import * as categories from '../../constants/letterCategories';

const folders: Folder[] = [
    {
        title: 'Inbox',
        category: categories.INBOX,
        icon: ''
    },
    {
        title: 'Sent',
        category: categories.SENT,
        icon: ''
    },
    {
        title: 'Drafts',
        category: categories.DRAFT,
        icon: ''
    },
    {
        title: 'Archive',
        category: categories.ARCHIVED,
        icon: ''
    },
    {
        title: 'Spam',
        category: categories.SPAM,
        icon: ''
    }
];

export default function Folders({ onFolderSelect }: FoldersProps) {
    return (
        <div className={theme.folders}>
            <ul className={theme.folderList}>
                {folders.map((f: Folder) => (
                    <FolderComponent
                        folder={f}
                        onSelect={onFolderSelect}
                        key={`folder-${f.category}`}
                    />
                ))}
            </ul>
        </div>
    );
}
