# RADARO - Profesionálne stavebné služby

RADARO is a modern, responsive website for a professional construction services company. The site showcases the company's services, projects, testimonials, and provides a contact form for potential clients to reach out. The site is built with Next.js and Tailwind CSS, and is deployed on Vercel. Preview live site [here](https://radaro.vercel.app/).

## Features

- **Modern UI Design**: Clean, professional interface with consistent styling and a red accent color
- **Responsive Layout**: Fully responsive design that works across all device sizes
- **Interactive Components**:
  - Hero section with call-to-action buttons
  - Services section with detailed descriptions
  - Projects showcase
  - Client testimonials carousel
  - Interactive contact form with email functionality
- **Smooth Scrolling**: Enhanced navigation with smooth scrolling to different sections
- **Email Integration**: Contact form with server-side validation and email sending capability
- **Toast Notifications**: User feedback through toast notifications for form submissions

## Technology Stack

- **Framework**: Next.js (App Router)
- **Styling**: Tailwind CSS
- **UI Components**: Shadcn UI
- **Icons**: React Icons
- **Email**: Nodemailer
- **Form Handling**: React Hook Form
- **Notifications**: Sonner Toast

## Getting Started

### Prerequisites

- Node.js 18.x or later
- npm or yarn

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/yourusername/radaro-website.git
   cd radaro-website
   ```

2. Install dependencies
   ```bash
   npm install
   # or
   yarn install
   ```

3. Set up environment variables
   Create a `.env` file in the root directory with the following variables:
   ```
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=587
   SMTP_SECURE=false
   SMTP_USER=your-email@gmail.com
   SMTP_PASSWORD=your-app-password
   ```

4. Run the development server
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result

## Project Structure

```
├── app/                  # Next.js app router
│   ├── api/              # API routes
│   │   └── contact/      # Contact form API
│   └── page.tsx          # Main page
├── components/           # React components
│   ├── About.tsx         # About section component
│   ├── Contact.tsx       # Contact form component
│   ├── Footer.tsx        # Footer component
│   ├── Hero.tsx          # Hero section component
│   ├── Navigation.tsx    # Navigation component
│   ├── Projects.tsx      # Projects component
│   ├── Services.tsx      # Services component
│   └── Testimonials.tsx  # Testimonials component
├── contexts/             # React contexts
├── lib/                  # Utility functions
├── public/               # Static assets
├── data/                 # Static data
```

## Deployment

The site can be deployed to Vercel with a single click:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fyourusername%2Fradaro-website)

Alternatively, you can build the project for production:

```bash
npm run build
npm start
```

## Email Configuration

The contact form sends emails using Nodemailer. For Gmail accounts, you'll need to:

1. Generate an App Password (Google Account → Security → App Passwords)
2. Use this App Password in your .env file

## License

[MIT](LICENSE)

## Contact

For any inquiries about this project, please contact [andrej.cicmansky@gmail.com](mailto:andrej.cicmansky@gmail.com).
