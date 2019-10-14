import { Letter } from '../types';

export default function letterTemplate(letter: Letter) {
    return `
        ${letter.subject}

        From: ${letter.from}
        To: ${letter.to}
        Date: ${letter.date.slice(0, 19).replace('T', ' ')}

        ${letter.content}
    `;
}
