import React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import Sidebar, { SidebarProps } from '../components/Sidebar';
import { FoldersActions, folderSelected } from '../actions/foldersActions';

const mapDispatchToProps = (dispatch: Dispatch<FoldersActions>) => ({
    onFolderSelect: (f: string) => dispatch(folderSelected(f))
});

const Container: React.ComponentType<Partial<SidebarProps>> = connect(
    null,
    mapDispatchToProps
)(Sidebar);

export default Container;
