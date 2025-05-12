/**
 * Portfolio Service
 *
 * This service manages the portfolio data. It can be extended to load data
 * from an API or a local JSON file if needed.
 */

/**
 * Base portfolio data
 */
const portfolioData = [
  {
    id: 1,
    title: 'Photos2Stl',
    url: 'https://photos2stl.com',
    description: 'From Photos to 3D Models',
    longDescription: 'Photos2Stl lets you effortlessly convert images into high-quality STL files for 3D printing. Whether you\'re a designer, maker, or hobbyist, bring your pictures to life with our fast, easy, and precise online conversion tool. Just upload, wait, and download. No technical skills required.',
    imagePath: require('@/assets/photos2stl.webp'),
    imageFallback: require('@/assets/photos2stl.jpg'),
    tags: ['3D Printing', 'Image Conversion', 'STL Files'],
    featured: true,
  },
  {
    id: 2,
    title: 'MythicalHero.me',
    url: 'https://mythicalhero.me',
    description: 'Discover Your Cosmic Hero',
    longDescription: 'Unleash your mythical identity through the power of zodiac influences. Create a unique hero based on your date of birth and cosmic destiny.',
    imagePath: require('@/assets/mythicalhero.webp'),
    imageFallback: require('@/assets/mythicalhero.jpg'),
    tags: ['Zodiac', 'Personalization', 'Identity'],
    featured: true,
  },
  {
    id: 3,
    title: 'SMS 2FA Auth Deployment',
    url: 'https://www.cnet.com/news/privacy/two-factor-authentication-what-you-need-to-know-faq/#inline-product-carousel-top-53bcf96891dd3',
    description: 'Deployment at scale',
    longDescription: 'We have implemented an extensible, scalable 2FA SMS used by thousands of customers',
    imagePath: require('@/assets/mythicalhero.webp'),
    imageFallback: require('@/assets/sms.jpg'),
    tags: ['SMS', '2FA', 'Identity'],
    featured: false,
  },
  {
    id: 4,
    title: 'Automation',
    url: '',
    description: 'Deployment at scale',
    longDescription: 'Enjoy life as it should be. Hassle free. We have freed up significant resources, bringing a legacy code base up to standards and increasing the overall product quality.',
    imagePath: require('@/assets/service-automation.jpg'),
    imageFallback: require('@/assets/service-automation.jpg'),
    tags: ['Automation', 'Testing', 'AI', 'Vibe Coding'],
    featured: false,
  },
  {
    id: 5,
    title: 'Simulation',
    url: '',
    description: 'Analysis and optimization of meshes, models and processes.',
    longDescription: 'Keeping a keen eye on the usage of shaders or AI frameworks to perform scientific computations, we have your back when it comes to efficient modelling.',
    imagePath: require('@/assets/service-modelling.jpg'),
    imageFallback: require('@/assets/service-modelling.jpg'),
    tags: ['Simulation', 'Modelling', 'Patterning'],
    featured: false,
  },
  {
    id: 6,
    title: 'Gateways and APIs',
    url: '',
    description: 'Automation with rapid connectivity between all your services',
    longDescription: 'Reduce the hassle with our nginx-based reverse proxy Authentication layer',
    imagePath: require('@/assets/code.png'),
    imageFallback: require('@/assets/code.png'),
    tags: ['Automation', 'nginx', 'Reverse Proxy'],
    featured: false,
  },
  {
    id: 7,
    title: 'Software and hardware design for a 3D Scanner',
    url: '',
    description: 'Expanding the hardware base as well as programming a full device? We got your back',
    longDescription: 'We have deployed our custom designed hardware and software to achieve a fully automated 3D scanner for dental purposes',
    imagePath: require('@/assets/scanner.png'),
    imageFallback: require('@/assets/scanner.png'),
    tags: ['Hardware', 'Firmware'],
    featured: false,
  },
];

/**
 * Get all portfolio items
 * @return {Array} Array of portfolio items
 */
export function getAllPortfolioItems() {
  return [...portfolioData];
}

/**
 * Get featured portfolio items
 * @return {Array} Array of featured portfolio items
 */
export function getFeaturedPortfolioItems() {
  return portfolioData.filter((item) => item.featured);
}

/**
 * Get a portfolio item by ID
 * @param {Number} id The ID of the portfolio item
 * @return {Object|null} The portfolio item or null if not found
 */
export function getPortfolioItemById(id) {
  return portfolioData.find((item) => item.id === id) || null;
}

/**
 * Get portfolio items by tag
 * @param {String} tag The tag to filter by
 * @return {Array} Array of portfolio items with the specified tag
 */
export function getPortfolioItemsByTag(tag) {
  return portfolioData.filter((item) => item.tags.includes(tag));
}

export default {
  getAllPortfolioItems,
  getFeaturedPortfolioItems,
  getPortfolioItemById,
  getPortfolioItemsByTag,
};
