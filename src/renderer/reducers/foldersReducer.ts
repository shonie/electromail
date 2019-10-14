import { createReducer } from 'redux-create-reducer';
import { FOLDER_SELECTED, FoldersActions, FolderSelectedAction } from '../actions/foldersActions';
import { INBOX } from '../../constants/letterCategories';

export interface FoldersState {
    readonly current: string;
}

const defaultState: FoldersState = {
    current: INBOX
};

export const foldersReducer = createReducer<FoldersState, FoldersActions>(defaultState, {
    [FOLDER_SELECTED]: (state: FoldersState, action: FolderSelectedAction) => ({
        ...state,
        current: action.payload
    })
});
