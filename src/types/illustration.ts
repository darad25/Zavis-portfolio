export interface Illustration {
    id: string;
    slug: string;
    title: string;
    category: string;
    year: string;
    image: string;
    description?: string;
    insight?: string;
    process?: {
        src: string;
        caption?: string;
    }[];
}
