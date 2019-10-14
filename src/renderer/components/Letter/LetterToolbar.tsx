import React from 'react';
import { LetterToolbarProps, LetterToolbarCommand } from './types';
import * as theme from './Letter.scss';

export function LetterToolbar({ commands }: LetterToolbarProps) {
    return (
        <div className={theme.letterToolbar}>
            {commands.map((command: LetterToolbarCommand, i: number) => (
                <div onClick={command.execute} className={theme.tool} key={i}>
                    <img
                        src={command.icon}
                        alt={command.title}
                        title={command.title}
                        className={theme.icon}
                    />
                </div>
            ))}
        </div>
    );
}
