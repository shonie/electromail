import React from 'react';
import classNames from 'classnames';
import { PreviewProps } from './types';
import * as theme from './Previews.scss';

function stripContent(content: string, maxCharCount: number) {
    const htmlTagsReg = /<[^>]*>/g;

    return content.length > maxCharCount
        ? `${content.replace(htmlTagsReg, '').slice(0, maxCharCount)}...`
        : content.replace(htmlTagsReg, '');
}

export function Preview({ letter, onSelect }: PreviewProps) {
    const handleLetterSelect = React.useCallback(() => onSelect(letter.id), [letter.id]);

    return (
        <li
            className={classNames(theme.preview, {
                [theme.unread]: !letter.isRead
            })}
            onClick={handleLetterSelect}
        >
            <h4 className={theme.previewTitle}>{letter.from}</h4>
            <h5 className={theme.previewSubTitle}>{letter.subject}</h5>
            <p className={theme.previewText}>{stripContent(letter.content, 50)}</p>
        </li>
    );
}
