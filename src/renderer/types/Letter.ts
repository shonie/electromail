export interface Letter {
    id: string;
    from: string;
    to: string;
    date: string;
    subject: string;
    content: string;
    preview: string;
    isRead: boolean;
    deleted: boolean;
    category: string;
}

export interface InboxLetter extends Letter {
    category: 'INBOX';
}

export interface SentLetter extends Letter {
    category: 'SENT';
}

export interface DraftLetter extends Letter {
    category: 'DRAFT';
}

export interface ArchivedLetter extends Letter {
    category: 'ARCHIVED';
}

export interface SpamLetter extends Letter {
    category: 'SPAM';
}
