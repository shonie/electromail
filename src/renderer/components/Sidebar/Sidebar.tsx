import React from 'react';
import { SidebarProps } from './types';
import Folders from '../Folders';
import * as theme from './Sidebar.scss';

export default function Sidebar({ onFolderSelect }: SidebarProps) {
    return (
        <aside className={theme.aside}>
            <Folders onFolderSelect={onFolderSelect} />
        </aside>
    );
}
