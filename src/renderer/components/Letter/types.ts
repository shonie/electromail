import { Letter } from '../../../types';

export interface LetterProps {
    letter: Letter;
    updateLetter: (letterId: string, payload: Partial<Letter>) => void;
    deleteLetter: (letterId: string) => void;
    saveLetterToDisk: (letter: Letter) => void;
}

export interface LetterToolbarCommand {
    icon: string;
    title: string;
    execute: () => void;
}

export interface LetterToolbarProps {
    commands: LetterToolbarCommand[];
}
