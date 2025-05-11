# Portfolio Images

This directory contains images for the portfolio page. For each portfolio item, you should add:

1. A WebP image for modern browsers (e.g., `projectname.webp`)
2. A JPG/PNG fallback image for older browsers (e.g., `projectname.jpg`)

## Image Recommendations

- Use a 16:9 aspect ratio (e.g., 1280x720 pixels)
- Optimize images for web (compress them)
- Use descriptive filenames
- Keep file sizes below 200KB if possible

## Adding New Portfolio Items

To add a new portfolio item:

1. Add the images to this directory
2. Update the `portfolioItems` array in `src/components/pages/Portfolio.vue` with a new entry

Example:

```javascript
{
  id: 3, // Increment the ID
  title: 'New Project',
  url: 'https://example.com',
  description: 'Short Description',
  longDescription: 'Longer description of your project that explains what it does and its benefits.',
  imagePath: '/img/portfolio/newproject.webp',
  imageFallback: '/img/portfolio/newproject.jpg',
  tags: ['Tag 1', 'Tag 2', 'Tag 3'],
  featured: true // or false
}
``` 