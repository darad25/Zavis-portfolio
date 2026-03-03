import type { Project } from '../types/project';

export const PROJECTS: Project[] = [
    {
        slug: 'learn-hub',
        title: 'LearnHub',
        type: 'Mobile / EdTech',
        year: '2025',
        role: 'UI/UX Designer',
        tools: ['Figma'],
        timeline: '2 Months',
        summary: 'A modern EdTech platform designed to personalize learning paths and streamline the onboarding experience for creative and technical skills.',
        featured: true,
        thumbnail: '/src/assets/edtech.png', // User will replace this path manually
        problem: 'Users often find it difficult to navigate vast course libraries and frequently drop off during complex sign-up processes.',
        goals: [
            'Implement a personalization-first onboarding flow',
            'Reduce friction in account creation with social authentication',
            'Ensure a high-contrast, accessible UI for varied environments'
        ],
        constraints: [
            'Adhering to a minimalist aesthetic while maintaining high information density'
        ],
        uxDecisions: [
            'Used a bright lime green accent color for primary actions and selection states to drive engagement',
            'Implemented a card-based selection system for interest tagging',
            'Designed a clean, multi-step authentication flow to avoid cognitive overload'
        ],
        problemsSolved: {
            ux: [
                'Created an intuitive "What do you want to learn?" selection screen that immediately filters content',
                'Simplified the transition between discovery and account creation'
            ],
            accessibility: [
                'Used large touch targets and high-contrast color combinations for better mobile usability',
                'Implemented focus states that are clearly visible even on small screens'
            ],
            delivery: [
                'Provided a modular design system that allows for quick scaling of course categories',
                'Documented interaction patterns for the personalized selection chips'
            ]
        },
        screens: [
            {
                src: '/src/assets/edtech.png', // User will replace this path manually
                alt: 'LearnHub App Showcase',
                caption: 'Personalized onboarding and authentication screens.'
            }
        ],
        links: {
            prototype: 'https://example.com'
        }
    },
    {
        slug: 'vault-fintech',
        title: 'Financial App',
        type: 'Mobile / Fintech',
        year: '2025',
        role: 'Product Designer',
        tools: ['Figma'],
        timeline: '3 Months',
        summary: 'A comprehensive financial dashboard providing real-time wealth tracking, categorized spending analysis, and social expense management.',
        featured: true,
        thumbnail: '/src/assets/finance.png', // User will replace this path manually
        problem: 'Managing personal finances is often overwhelming due to fragmented data and lack of clear visual spending patterns.',
        goals: [
            'Create a high-level wealth overview for instant financial pulses',
            'Develop a social tagging system for group-based expense management',
            'Implement location-based tracking for granular spending insights'
        ],
        constraints: [
            'Ensuring sensitive data visibility remains secure yet accessible',
            'Balancing high information density with a minimalist, non-stressful UI'
        ],
        uxDecisions: [
            'Used a cardinal purple and lavender theme to evoke a sense of premium security and calm',
            'Leveraged modular cards to allow for custom dashboard personalization',
            'Introduced a "Category" ring chart for quick visual budget monitoring'
        ],
        problemsSolved: {
            ux: [
                'Collapsed multiple financial accounts into a single "Dashboard" view',
                'Reduced the complexity of expense categorization through automated tagging'
            ],
            accessibility: [
                'Designed color-independent status indicators for financial trends',
                'Optimized graph visibility for small screen mobile devices'
            ],
            delivery: [
                'Created a library of financial data visualization components',
                'Defined clear interactive states for all modular dashboard tiles'
            ]
        },
        screens: [
            {
                src: '/src/assets/finance.png', // User will replace this path manually
                alt: 'Vault App Showcase',
                caption: 'Financial overview and categorized spending breakdown.'
            }
        ],
        links: {
            prototype: 'https://example.com'
        }
    },
    {
        slug: 'zavis-messaging',
        title: 'Messaging App',
        type: 'Mobile / Communication',
        year: '2025',
        role: 'Product Designer',
        tools: ['Figma'],
        timeline: '3 Months',
        summary: 'A premium messaging platform focused on seamless communication, featuring interactive stories, real-time chat, and multimedia support.',
        featured: true,
        thumbnail: '/src/assets/messaging.png', // User will replace this path manually
        problem: 'Users need a more intuitive way to balance casual social updates with deep, organized communication.',
        goals: [
            'Integrate a modern "Stories" feature for quick updates',
            'Design a cohesive chat interface for multiple media types',
            'Streamline navigation across messages, calls, and settings'
        ],
        constraints: [
            'Maintaining a consistent visual language across vastly different functional areas (Stories vs. Settings)'
        ],
        uxDecisions: [
            'Used a soft purple and lavender palette to create a creative and professional aesthetic',
            'Implemented distinct unread status bubbles and active status indicators',
            'Designed rounded, spacious chat bubbles to improve readability'
        ],
        problemsSolved: {
            ux: [
                'Enhanced story discovery through a dedicated, horizontal scrolling header',
                'Reduced cognitive load by using clear icons and labels for navigation'
            ],
            accessibility: [
                'Ensured high color contrast for all chat text and status indicators',
                'Optimized interactive targets for single-hand mobile usage'
            ],
            delivery: [
                'Provided comprehensive design tokens for the lavender color system',
                'Documented specific animation transitions for opening chat threads'
            ]
        },
        screens: [
            {
                src: '/src/assets/messaging.png', // User will replace this path manually
                alt: 'Zavis Messaging Showcase',
                caption: 'Chat list and individual conversation screens.'
            }
        ],
        links: {
            prototype: 'https://example.com'
        }
    },
    {
        slug: 'online-cors',
        title: 'Online Learning App',
        type: 'Mobile / EdTech',
        year: '2025',
        role: 'Product Designer',
        tools: ['Figma'],
        timeline: '2 Months',
        summary: 'A vibrant and engaging educational platform designed to inspire creative learning through structured course categories and interactive lesson paths.',
        featured: true,
        thumbnail: '/src/assets/online-cors.png', // User will replace this path manually
        problem: 'Traditional learning platforms often feel sterile, leading to low engagement for creative subjects like drawing and UI/UX design.',
        goals: [
            'Create a vibrant, high-energy landing experience to inspire learning',
            'Implement an easy-to-navigate category system for artistic and technical courses',
            'Design a detailed course view with structured lesson breakdowns and progress tracking'
        ],
        constraints: [
            'Balancing a high-energy visual style with the need for focused, distraction-free learning content'
        ],
        uxDecisions: [
            'Utilized a playful, high-contrast color palette (Blue, Yellow, Red) to boost user motivation',
            'Incorporated custom illustrations and high-quality photography to make the platform feel human and creative',
            'Designed a clean, card-based course overview for quick scannability'
        ],
        problemsSolved: {
            ux: [
                'Simplified the course enrollment flow with a prominent "Enroll Now" call to action',
                'Reduced search friction through a personalized "Find Your Course" landing section'
            ],
            accessibility: [
                'Ensured large, legible typography throughout the course content',
                'Maintained high contrast ratios for critical action buttons and navigation'
            ],
            delivery: [
                'Defined a modular component system for course categories and lesson lists',
                'Provided detailed specs for the progress tracking micro-interactions'
            ]
        },
        screens: [
            {
                src: '/src/assets/online-cors.png', // User will replace this path manually
                alt: 'OnlineCors App Showcase',
                caption: 'Welcome screen, course categories, and course details view.'
            }
        ],
        links: {
            prototype: 'https://example.com'
        }
    },
    {
        slug: 'zavis',
        title: 'Fashion E-commerce',
        type: 'Mobile / E-commerce',
        year: '2025',
        role: 'Product Designer',
        tools: ['Figma'],
        timeline: '2 Months',
        summary: 'A premium fashion e-commerce experience designed to simplify the discovery of trendy collections.',
        featured: true,
        thumbnail: '/src/assets/zavis.png',
        problem: 'Fashion enthusiasts often struggle with cluttered interfaces that make finding and purchasing specific collections tedious.',
        goals: [
            'Create a minimalist, high-fashion aesthetic that emphasizes product imagery',
            'Streamline the checkout process with a "Continue as Guest" option',
            'Implement a seamless search and filtering system for diverse collections'
        ],
        constraints: [
            'Ensuring high performance image loading for catalog heavy pages',
            'Maintaining a cohesive brand identity across all mobile touchpoints'
        ],
        uxDecisions: [
            'Used a soft cream background to create a premium, gallery like feel',
            'Implemented large, high quality imagery to showcase products effectively',
            'Designed intuitive size and color swatches for quick selection'
        ],
        problemsSolved: {
            ux: [
                'Simplified the sign in flow by offering a fast guest checkout',
                'Improved product discovery through clean, grid based navigation'
            ],
            accessibility: [
                'Ensured high color contrast for all text elements',
                'Implemented large interactive targets for mobile first usability'
            ],
            delivery: [
                'Provided detailed micro interaction specs for the engineering team',
                'Documented edge case behaviors for better developer handoff'
            ]
        },
        screens: [
            {
                src: '/src/assets/zavis.png',
                alt: 'Zavis App Showcase',
                caption: 'Mobile UI screens for the E-commerce fashion app.'
            }
        ],
        links: {
            prototype: 'https://example.com'
        }
    }
];
