export interface Project {
    slug: string;
    title: string;
    type: string;
    year: string;
    role: string;
    tools: string[];
    timeline: string;
    summary: string;
    problem: string;
    goals: string[];
    constraints: string[];
    uxDecisions: string[];
    problemsSolved: {
        ux: string[];
        accessibility: string[];
        delivery: string[];
    };
    screens: {
        src: string;
        alt: string;
        caption?: string;
    }[];
    links: {
        figma?: string;
        prototype?: string;
        live?: string;
    };
    featured?: boolean;
    thumbnail: string;
}
