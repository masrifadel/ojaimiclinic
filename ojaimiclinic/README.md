# Dr. Karl Ojaimi Eye Clinic Website

A modern, responsive eye clinic website built with Next.js 13, featuring advanced ophthalmic care services including cataract surgery, refractive surgery, and comprehensive eye diagnostics.

## Features

- **Modern Design**: Dark theme with glassmorphism effects and smooth animations
- **Responsive Layout**: Fully responsive design for desktop, tablet, and mobile devices
- **Service Pages**: Detailed pages for Cataract Surgery, Refractive Surgery, and Clinic Diagnosis
- **Interactive Navigation**: Smooth scrolling navigation with dropdown menus
- **Contact Form**: Functional contact form with Nodemailer integration
- **SEO Optimized**: Comprehensive SEO metadata for better search engine visibility
- **Performance**: Optimized for speed and performance with Next.js 13 App Router

## Services Offered

### Cataract Surgery

- Advanced phacoemulsification technology
- Quick recovery and excellent visual outcomes
- Premium intraocular lens options

### Refractive Surgery

- LASIK and PRK procedures
- Customized treatment plans
- State-of-the-art laser technology

### Clinic Diagnosis

- Comprehensive eye examinations
- Advanced diagnostic imaging
- Early detection of eye conditions

## Tech Stack

- **Framework**: Next.js 13 with App Router
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: React Icons
- **Email**: Nodemailer with Gmail SMTP
- **Deployment**: Vercel (recommended)

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn package manager

### Installation

1. Clone the repository:

```bash
git clone https://github.com/masrifadel/ojaimiclinic.git
cd ojaimiclinic
```

2. Install dependencies:

```bash
npm install
```

3. Set up environment variables:

```bash
cp .env.local.example .env.local
```

4. Configure your email credentials in `.env.local`:

```env
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

### Local Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Build for Production

```bash
npm run build
npm start
```

## Deployment

### Vercel (Recommended)

1. **Automatic Deployment**:
   - Go to [vercel.com](https://vercel.com)
   - Sign up/login with your GitHub account
   - Click "New Project"
   - Select your `masrifadel/ojaimiclinic` repository
   - Click "Deploy"

2. **Manual Deployment**:
   - Install Vercel CLI: `npm i -g vercel`
   - Run: `vercel`
   - Follow the prompts

3. **Environment Variables**:
   - Add your environment variables in Vercel dashboard
   - Set `EMAIL_USER` and `EMAIL_PASS` for contact form functionality

### Alternative Deployment Options

- **Netlify**: Connect your GitHub repository and configure build settings
- **GitHub Pages**: Use static export (requires additional configuration)
- **Self-hosted**: Build and deploy to any Node.js hosting provider

## Environment Variables

Create a `.env.local` file with the following variables:

```env
# Email Configuration (for contact form)
EMAIL_USER=your-gmail@gmail.com
EMAIL_PASS=your-gmail-app-password

# Site Configuration
NEXT_PUBLIC_SITE_URL=https://your-domain.vercel.app
```

**Important**: Use Gmail App Password, not your regular Gmail password. Generate one at: [Google App Passwords](https://myaccount.google.com/apppasswords)

## Project Structure

```
ojaimiclinic/
|-- app/
|   |-- api/contact/          # Contact form API endpoint
|   |-- cataract-surgery/     # Cataract surgery page
|   |-- refractive-surgery/    # Refractive surgery page
|   |-- clinic-diagnosis/     # Clinic diagnosis page
|   |-- components/           # Reusable components
|   |-- layout.tsx           # Root layout with SEO metadata
|   |-- page.tsx             # Homepage
|   |-- globals.css          # Global styles
|-- public/                  # Static assets
|-- .env.local              # Environment variables (gitignored)
|-- vercel.json             # Vercel configuration
|-- package.json            # Dependencies and scripts
```

## SEO Features

- **Meta Tags**: Comprehensive metadata for all pages
- **Open Graph**: Social media sharing optimization
- **Twitter Cards**: Twitter-specific metadata
- **Structured Data**: JSON-LD for search engines
- **Sitemap**: Automatic sitemap generation
- **Robots.txt**: Search engine crawling instructions

## Contact Form

The contact form uses Nodemailer to send emails through Gmail SMTP. Ensure:

- Gmail App Password is configured
- Environment variables are set
- Vercel environment variables are configured for production

## Performance Optimization

- **Image Optimization**: Next.js Image component
- **Code Splitting**: Automatic route-based code splitting
- **Static Generation**: Where possible for better performance
- **Lazy Loading**: Components and images load as needed
- **Bundle Analysis**: Optimized bundle size

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
- Mobile browsers (iOS Safari 14+, Chrome Mobile 90+)

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## License

This project is proprietary and owned by Dr. Karl Ojaimi Eye Clinic.

## Support

For support or questions:

- Email: masrifadel313@gmail.com
- Phone: +961 81 174 657
- Location: Baabda, Mount Lebanon, Lebanon

## Deployment Checklist

Before deploying to production:

- [ ] Environment variables are configured
- [ ] Contact form is tested
- [ ] All pages are loading correctly
- [ ] SEO metadata is properly set
- [ ] Images are optimized
- [ ] Mobile responsiveness is verified
- [ ] Performance is acceptable (< 3s load time)
- [ ] SSL certificate is configured
- [ ] Domain is properly pointed

## Monitoring

After deployment:

- Monitor site performance with Vercel Analytics
- Check contact form functionality
- Monitor SEO performance with Google Search Console
- Set up error tracking (optional)

---

**Built with Next.js 13, Tailwind CSS, and Framer Motion**
