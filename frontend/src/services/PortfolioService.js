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
    imagePath: 'photos2stl.webp',
    imageFallback: '/img/photos2stl.jpg',
    tags: ['3D Printing', 'Image Conversion', 'STL Files'],
    featured: true,
  },
  {
    id: 2,
    title: 'MythicalHero.me',
    url: 'https://mythicalhero.me',
    description: 'Discover Your Cosmic Hero',
    longDescription: 'Unleash your mythical identity through the power of zodiac influences. Create a unique hero based on your date of birth and cosmic destiny.',
    imagePath: 'mythicalhero.webp',
    imageFallback: '/img/mythicalhero.jpg',
    tags: ['Zodiac', 'Personalization', 'Identity'],
    featured: true,
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
