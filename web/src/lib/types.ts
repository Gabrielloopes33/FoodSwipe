export type CategoryLevel = 1 | 2 | 3;

export interface Category {
    id: string;
    name: string;
    level: CategoryLevel;
    parentId: string | null;
    imageUrl: string;
    searchTerms: string[];
    description?: string;
}

export interface SwipeSession {
    id: string;
    timestamp: string;
    finalChoice: string | null;
    path: string[];
    totalSwipes: number;
    likes: number;
    nopes: number;
    completed: boolean;
}

export interface UserPreferences {
    favoriteCategories: string[];
    dislikedCategories: string[];
    totalSessions: number;
    lastSessionDate: string;
}
