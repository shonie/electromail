import React from 'react';
import { PreviewProps } from './types';
import * as theme from './Previews.scss';

export function Preview({ letter, onSelect }: PreviewProps) {
    const handleLetterSelect = React.useCallback(() => onSelect(letter.id), [letter.id]);

    return (
        <li className={theme.preview} onClick={handleLetterSelect}>
            {letter.subject}
        </li>
    );
}
