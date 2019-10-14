import React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import Application, { ApplicationProps } from '../components/Application';
import { lettersRequested, clearMailbox, LettersActions } from '../actions/lettersActions';

const mapDispatchToProps = (dispatch: Dispatch<LettersActions>) => ({
    fetchLetters: () => dispatch(lettersRequested()),
    clearMailbox: () => dispatch(clearMailbox())
});

const Container: React.ComponentType<Partial<ApplicationProps>> = connect(
    null,
    mapDispatchToProps
)(Application);

export default Container;
