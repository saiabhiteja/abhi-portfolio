const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ''
const projectsData = [
  {
    title: 'Subscription Management Platform',
    description: `A robust subscription management platform with automated email reminders, enabling users to track, manage, and receive timely alerts for recurring subscriptions to prevent unwanted charges. Features JWT authentication, role-based access, and analytics dashboard delivering real-time spending insights and subscription metrics across categories and currencies.`,
    imgSrc: `${basePath}/static/images/subscription-management.png`,
    href: '',
    github: 'https://github.com/saiabhiteja/subscription-management',
    tech1: 'Node.js',
    tech2: 'Express.js',
    tech3: 'MongoDB',
  },
  {
    title: 'Six Degrees of Spotify Music',
    description: `Maps connections between any two musicians through collaboration chains, typically under five links, enabling exploration of music networks using real Spotify data. Developed a Spring Boot MVC web app with Neo4j graph database to visualize 450,000+ artist collaborations.`,
    imgSrc: `${basePath}/static/images/spotify-six-degrees.png`,
    href: '',
    github: 'https://github.com/saiabhiteja/six-degrees-spotify',
    tech1: 'Java',
    tech2: 'Spring Boot',
    tech3: 'Neo4j',
  },
]

export default projectsData
