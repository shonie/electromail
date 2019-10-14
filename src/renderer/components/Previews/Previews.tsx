import React from 'react';
import { PreviewsProps } from './types';
import { Letter } from '../../types';
import { Preview } from './Preview';
import * as theme from './Previews.scss';

export default function Previews({ letters, onLetterSelect }: PreviewsProps) {
    return (
        <ul className={theme.previews}>
            {letters.map((l: Letter) => (
                <Preview letter={l} onSelect={onLetterSelect} key={l.id} />
            ))}
        </ul>
    );
}
