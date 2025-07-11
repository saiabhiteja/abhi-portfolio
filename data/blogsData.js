const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ''
const blogsData = [
  {
    title: 'Building Scalable Microservices with Spring Boot',
    description: `A comprehensive guide on designing and implementing scalable microservices using Spring Boot, covering best practices for service discovery, load balancing, and distributed tracing. Learn how to build resilient systems that can handle high traffic and maintain performance.`,
    imgSrc: `${basePath}/static/images/Blog/spotify-refresh-token.jpg`,
    href: 'https://medium.com/@saiabhitejachepuri/building-scalable-microservices-with-spring-boot',
    medium: 'https://medium.com/@saiabhitejachepuri/building-scalable-microservices-with-spring-boot',
    tech1: 'Spring Boot',
    tech2: 'Microservices',
    tech3: 'Java',
  },
  {
    title: 'Optimizing Database Performance in Distributed Systems',
    description: `Deep dive into database optimization techniques for distributed systems, including query optimization, indexing strategies, and caching mechanisms. Explore real-world scenarios and performance improvements achieved through systematic optimization approaches.`,
    imgSrc: `${basePath}/static/images/Blog/apple-privacy.jpg`,
    href: 'https://medium.com/@saiabhitejachepuri/optimizing-database-performance-in-distributed-systems',
    medium: 'https://medium.com/@saiabhitejachepuri/optimizing-database-performance-in-distributed-systems',
    tech1: 'Database',
    tech2: 'Performance',
    tech3: 'Optimization',
  },
  {
    title: 'Cloud-Native Development with Kubernetes',
    description: `A practical guide to developing and deploying cloud-native applications using Kubernetes. Cover containerization, orchestration, service mesh, and monitoring strategies for building robust, scalable applications in the cloud.`,
    imgSrc: `${basePath}/static/images/Blog/wwdc-2022-hero.jpeg`,
    href: 'https://medium.com/@saiabhitejachepuri/cloud-native-development-with-kubernetes',
    medium: 'https://medium.com/@saiabhitejachepuri/cloud-native-development-with-kubernetes',
    tech1: 'Kubernetes',
    tech2: 'Docker',
    tech3: 'Cloud',
  },
]

export default blogsData 