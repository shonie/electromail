import { Letter } from '../../../types';

export interface PreviewProps {
    letter: Letter;
    onSelect: (letterId: string) => void;
}

export interface PreviewsProps {
    letters: Letter[];
    onLetterSelect: (letterId: string) => void;
}
