import React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { RootState } from './../reducers/index';
import LetterComponent, { LetterProps } from '../components/Letter';
import { Letter } from '../../types';
import { updateLetter, deleteLetter, saveLetterToDisk } from './../actions/lettersActions';

const mapStateToProps = ({ letters: { current, map } }: RootState) => ({
    letter: map[current as string] || null
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
    updateLetter: (letterId: string, payload: Partial<Letter>) =>
        dispatch(updateLetter(letterId, payload)),
    deleteLetter: (letterId: string) => dispatch(deleteLetter(letterId)),
    saveLetterToDisk: (letter: Letter) => dispatch(saveLetterToDisk(letter))
});

const Container: React.ComponentType<Partial<LetterProps>> = connect(
    mapStateToProps,
    mapDispatchToProps
)(LetterComponent);

export default Container;
