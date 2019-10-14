import React from 'react';
import classNames from 'classnames';
import { LetterProps } from './types';
import * as theme from './Letter.scss';

export default function Letter({ letter }: LetterProps) {
    const ref: React.RefObject<HTMLDivElement> = React.useRef(null);

    React.useEffect(() => {
        if (ref && ref.current && letter) {
            ref.current.innerHTML = letter.content;
        }
    }, [letter ? letter.content : '']);

    return <div className={classNames(theme.letter)} ref={ref} />;
}
