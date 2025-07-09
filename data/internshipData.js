/*
Template for internshipData.js:
{
  title: 'Intern Title',
  company: 'Company Name',
  location: 'City, Country',
  range: 'Month Year - Month Year',
  startYear: 2024,
  endYear: 2024, // or null for ongoing
  startMonth: 'June',
  endMonth: 'August', // or null for ongoing
  url: 'https://company.com',
  description: 'Short description of your role.',
  achievements: [
    'Achievement 1',
    'Achievement 2'
  ],
}
*/

const internshipData = [
  {
    title: 'Software Engineer Intern',
    company: 'Cloudera',
    location: 'Bangalore, India',
    range: 'January 2023 - July 2023',
    startYear: 2023,
    endYear: 2023,
    startMonth: 'January',
    endMonth: 'July',
    url: 'https://www.cloudera.com/',
    description: 'Redesigned Trial UI for better user experience, developed new public gRPC APIs to enhance cross-system communication and implemented Cloud Custodian policies to clean up unused resources, reducing costs by 56%.',
    achievements: [
      'Reduced cloud infrastructure costs by 56% through smart automation with Cloud Custodian',
      'Contributed production-grade UI and backend features as an intern, showcasing strong ownership and impact',
      'Strengthened system security and data quality by successfully preventing fake/invalid signups through the custom email verification system'
    ],
  },
  {
    title: 'Associate Software Engineer',
    company: 'MAQ Software',
    location: 'Hyderabad, India',
    range: 'May 2022 - July 2022',
    startYear: 2022,
    endYear: 2022,
    startMonth: 'May',
    endMonth: 'July',
    url: 'https://www.maqsoftware.com/',
    description: 'Executed robust ETL workflows and optimized complex SQL queries for efficient data validation, integrity assurance, and a 35% boost in query performance.',
    achievements: [
      'Developed Data models and Power BI dashboards to enable seamless analysis and drive strategic business decisions',
      'Improved query performance by 35% through optimization techniques'
    ],
  },
  {
    title: 'Machine Learning Intern',
    company: 'Enviropromise',
    location: 'Remote',
    range: 'May 2021 - July 2021',
    startYear: 2021,
    endYear: 2021,
    startMonth: 'May',
    endMonth: 'July',
    url: '',
    description: 'Built and Deployed a Django-based analytics dashboard to track real-time sales trends and generate product suggestions, enhancing decision-making and boosting sales by 60%.',
    achievements: [
      'Boosted sales by 60% by delivering actionable insights through the real-time analytics dashboard',
      'Developed an NLP pipeline to analyze customer reviews, enabling personalized marketing strategies',
      'Led a team of 10 members, coordinating efforts and ensuring project milestones were met during the internship'
    ],
  },
];

export default internshipData; 