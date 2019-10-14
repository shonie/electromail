import React from 'react';
import { connect } from 'react-redux';
// import { Dispatch } from 'redux';
import { RootState } from './../reducers/index';
import Letter, { LetterProps } from '../components/Letter';

const mapStateToProps = (state: RootState) => ({
    letter: state.letters.list[state.letters.current]
});

const Container: React.ComponentType<Partial<LetterProps>> = connect(mapStateToProps)(Letter);

export default Container;
