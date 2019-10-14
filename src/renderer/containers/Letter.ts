import React from 'react';
import { connect } from 'react-redux';
import { RootState } from './../reducers/index';
import Letter, { LetterProps } from '../components/Letter';

const mapStateToProps = ({ letters: { current, map } }: RootState) => ({
    letter: map[current as string] || null
});

const Container: React.ComponentType<Partial<LetterProps>> = connect(mapStateToProps)(Letter);

export default Container;
