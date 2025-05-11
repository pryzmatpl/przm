# Portfolio Page Documentation

The portfolio page is designed to showcase the company's products and services. This guide will help you understand how to add, edit, or remove items from the portfolio.

## Architecture Overview

The portfolio page is built with the following components:

1. **Router Configuration** - The route is defined in `src/router/index.js`
2. **Portfolio Component** - The main page component is in `src/components/pages/Portfolio.vue`
3. **Portfolio Card Component** - Each portfolio item is displayed using `src/components/cards/PortfolioCard.vue`
4. **Portfolio Service** - Data management is handled by `src/services/PortfolioService.js`
5. **Image Assets** - Stored in `public/img/portfolio/`

## Adding a New Portfolio Item

### 1. Prepare the Images

For each portfolio item, you should prepare:
- A WebP image (preferred for modern browsers)
- A JPG/PNG fallback image (for older browsers)

Place both images in the `public/img/portfolio/` directory with descriptive filenames.

Recommended image specifications:
- 16:9 aspect ratio
- Resolution: 1280x720 pixels (or similar)
- File size: < 200KB per image

### 2. Update the Portfolio Service

Open `src/services/PortfolioService.js` and add a new entry to the `portfolioData` array:

```javascript
{
  id: 3, // Increment this from the last ID
  title: 'Your Project Title',
  url: 'https://yourproject.com',
  description: 'Short tagline for your project',
  longDescription: 'A more detailed description explaining what the project does, its features, and benefits.',
  imagePath: '/img/portfolio/yourproject.webp',
  imageFallback: '/img/portfolio/yourproject.jpg',
  tags: ['Relevant', 'Tags', 'For', 'Project'],
  featured: true // Set to true if you want to highlight this project
}
```

## Editing a Portfolio Item

Simply find the entry for the item you want to edit in `src/services/PortfolioService.js` and update its properties.

## Removing a Portfolio Item

Remove the entry from the `portfolioData` array in `src/services/PortfolioService.js`.

## Data Structure

Each portfolio item has the following properties:

| Property | Type | Description |
|----------|------|-------------|
| id | Number | Unique identifier for the item |
| title | String | The name of the product/project |
| url | String | The URL to the live project |
| description | String | Short tagline/subtitle |
| longDescription | String | Full description of the project |
| imagePath | String | Path to the WebP image |
| imageFallback | String | Path to the JPG/PNG fallback image |
| tags | Array | List of relevant tags |
| featured | Boolean | Whether to highlight this item |

## Extending the Portfolio Page

### Adding Filtering by Tags

You can implement filtering by modifying the Portfolio.vue component:

1. Add a filter state:
```javascript
const selectedTag = ref(null);
```

2. Add a computed property for filtered items:
```javascript
const filteredItems = computed(() => {
  if (!selectedTag.value) return portfolioItems.value;
  return PortfolioService.getPortfolioItemsByTag(selectedTag.value);
});
```

3. Add UI elements for tag selection and update the v-for loop to use filteredItems.

### Adding Pagination

For large portfolios, you might want to add pagination:

1. Add pagination state:
```javascript
const itemsPerPage = 6;
const currentPage = ref(1);
```

2. Add a computed property for paginated items:
```javascript
const paginatedItems = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  return filteredItems.value.slice(start, end);
});
```

3. Add UI elements for pagination controls and update the v-for loop to use paginatedItems. 