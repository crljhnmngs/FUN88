export type Category = {
    name: string;
    icon: React.FC<React.SVGProps<SVGSVGElement>>;
}

export type Games = {
    id: number;
    name: string;
    img: string;
    category: string;
    provider: string;
};

export type GamesState = {
    items: Games[];
    loading: boolean;
    error: string | null; 
}

export type FavoritesState = {
    favorites: number[];
}

export type GamesProps = GamesState & FavoritesState & {
    handleFavorite: (gameId: number) => void;
    currentCategory: string;
    filterBy?: string;
};

export type FooterState = {
    activeFooter: string;
}