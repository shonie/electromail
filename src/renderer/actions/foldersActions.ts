import { Action, ActionCreator } from 'redux';
import { Folder } from '../types';

export const FOLDER_SELECTED = 'FOLDER_SELECTED';

export interface FolderSelectedAction extends Action {
    type: 'FOLDER_SELECTED';
    payload: Folder;
}

export const folderSelected: ActionCreator<FolderSelectedAction> = (payload: Folder) => ({
    payload,
    type: FOLDER_SELECTED
});

export type FoldersActions = FolderSelectedAction;
