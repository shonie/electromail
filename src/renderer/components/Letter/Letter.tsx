import React from 'react';
import classNames from 'classnames';
import { LetterProps } from './types';
import * as theme from './Letters.scss';

export default function Letter({ letter }: LetterProps) {
    return <div className={classNames(theme.letter)}>{letter}</div>;
}
