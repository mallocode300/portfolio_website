# AI Engineer Portfolio Website

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS. This portfolio showcases AI engineering work, blog posts, and professional information.

## Features

- Responsive design that works on all devices
- Dark mode support
- Blog section for sharing AI insights
- Project showcase
- Contact form
- About page with skills and experience
- Modern and professional UI

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env.local` file in the root directory and add any necessary environment variables
4. Run the development server:
   ```bash
   npm run dev
   ```
5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
src/
├── app/                 # Next.js app directory
│   ├── about/          # About page
│   ├── blog/           # Blog page
│   ├── contact/        # Contact page
│   └── page.tsx        # Home page
├── components/         # Reusable components
│   ├── Navbar.tsx     # Navigation component
│   └── Footer.tsx     # Footer component
└── public/            # Static assets
    └── images/        # Image files
```

## Required Images

Place the following images in the `public` directory:
- `profile-placeholder.jpg` - Your profile picture
- `about-placeholder.jpg` - Image for the about page
- `project-1-placeholder.jpg` - Project 1 image
- `project-2-placeholder.jpg` - Project 2 image
- `project-3-placeholder.jpg` - Project 3 image
- `blog-healthcare-ai.jpg` - Blog post image
- `blog-llm.jpg` - Blog post image
- `blog-ethics.jpg` - Blog post image

## Customization

1. Update the content in each page component to match your information
2. Replace placeholder images with your own
3. Update social media links in the Footer component
4. Customize the color scheme in `tailwind.config.js` if desired

## Technologies Used

- Next.js 14
- TypeScript
- Tailwind CSS
- React
- ESLint

## License

MIT
