# TokenPulse Website

A modern, responsive Next.js website for TokenPulse - a next-generation Web3 infrastructure platform.

## Features

- **Modern Design**: Clean, professional design with Tailwind CSS
- **Responsive Layout**: Mobile-first responsive design
- **Web3 Focused**: Built specifically for Web3 infrastructure and blockchain services
- **Component-Based**: Reusable UI components with TypeScript
- **Performance Optimized**: Built with Next.js 15 for optimal performance

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **UI Components**: Custom component library
- **Fonts**: Inter (Google Fonts)

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd website
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Project Structure

```
src/
├── app/                 # Next.js App Router pages
│   ├── globals.css     # Global styles
│   ├── layout.tsx      # Root layout
│   └── page.tsx        # Home page
├── components/         # Reusable components
│   ├── ui/            # Base UI components
│   │   ├── button.tsx
│   │   └── card.tsx
│   └── navigation.tsx # Navigation component
└── lib/               # Utility functions
    └── utils.ts       # Common utilities
```

## Design System

The website uses a consistent design system with:

- **Colors**: Primary blue theme with semantic colors (success, warning, error)
- **Typography**: Inter font family
- **Spacing**: Consistent spacing scale using Tailwind CSS
- **Components**: Reusable UI components with consistent styling

## Customization

### Colors
Update the color palette in `tailwind.config.ts`:

```typescript
colors: {
  primary: {
    50: '#eff6ff',
    100: '#dbeafe',
    // ... more shades
  }
}
```

### Components
All UI components are located in `src/components/ui/` and can be customized as needed.

## Deployment

The website can be deployed to any platform that supports Next.js:

- **Vercel** (Recommended)
- **Netlify**
- **AWS Amplify**
- **Self-hosted**

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Support

For support and questions, please contact the TokenPulse team.
