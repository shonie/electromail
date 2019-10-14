import React from 'react';
import classNames from 'classnames';
import { LetterProps } from './types';
import { LetterToolbar } from './LetterToolbar';
import * as theme from './Letter.scss';
import * as deleteIcon from './icons/delete.svg';
import * as readIcon from './icons/read.svg';
import * as unreadIcon from './icons/unread.svg';

export default function Letter({ letter, updateLetter, deleteLetter }: LetterProps) {
    const ref: React.RefObject<HTMLParagraphElement> = React.useRef(null);

    React.useEffect(() => {
        if (ref && ref.current && letter) {
            ref.current.innerHTML = letter.content;
        }
    }, [letter ? letter.content : '']);

    return (
        letter && (
            <div className={classNames(theme.letter)}>
                <LetterToolbar
                    commands={[
                        {
                            title: letter.isRead ? 'Mark as Unread' : 'Mark as Read',
                            icon: letter.isRead ? unreadIcon : readIcon,
                            execute: () => updateLetter(letter.id, { isRead: !letter.isRead })
                        },
                        {
                            title: 'Delete',
                            icon: deleteIcon,
                            execute: () => deleteLetter(letter.id)
                        }
                    ]}
                />
                <h3 className={theme.subject}>{letter.subject}</h3>
                <p>From: {letter.from}</p>
                <p>To: {letter.to}</p>
                <p>Date: {letter.date.slice(0, 19).replace('T', ' ')}</p>
                <p className={theme.content} ref={ref} />
            </div>
        )
    );
}
