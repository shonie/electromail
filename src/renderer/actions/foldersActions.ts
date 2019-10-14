import { Action, ActionCreator } from 'redux';

export const FOLDER_SELECTED = 'FOLDER_SELECTED';

export interface FolderSelectedAction extends Action {
    type: 'FOLDER_SELECTED';
    payload: string;
}

export const folderSelected: ActionCreator<FolderSelectedAction> = (payload: string) => ({
    payload,
    type: FOLDER_SELECTED
});

export type FoldersActions = FolderSelectedAction;
