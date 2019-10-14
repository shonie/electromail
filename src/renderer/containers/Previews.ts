import React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { RootState } from './../reducers';
import { setCurrentLetter, LettersActions } from '../actions/lettersActions';
import Previews, { PreviewsProps } from '../components/Previews';
import { getLettersFromFolder } from '../selectors';

const mapStateToProps = (state: RootState) => ({
    letters: getLettersFromFolder(state)
});

const mapDispatchToProps = (dispatch: Dispatch<LettersActions>) => ({
    onLetterSelect: (f: string) => dispatch(setCurrentLetter(f))
});

const Container: React.ComponentType<Partial<PreviewsProps>> = connect(
    mapStateToProps,
    mapDispatchToProps
)(Previews);

export default Container;
