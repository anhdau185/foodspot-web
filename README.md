# FoodSpot Web

> 🍽️ Discover your perfect meal in Vietnam

FoodSpot helps you find the ideal restaurant based on your preferences. Built with Next.js 14, TypeScript, and Tailwind CSS.

## 🌟 Features

- 🏙️ **City Selection**: Major Vietnamese cities
- 🍜 **Cuisine Filtering**: Multiple cuisine types
- 🥗 **Dietary Options**: Vegetarian, vegan, gluten-free
- 💰 **Budget Control**: Price range filtering
- ⭐ **Favorites**: Save your preferred spots
- 📱 **Mobile-First**: Responsive design

## 🚀 Tech Stack

- **Framework**: Next.js 14 with Turbopack
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **State**: Zustand
- **API**: Yelp Fusion API
- **Icons**: Lucide React

## 🏗️ FoodSpot Ecosystem

- **foodspot-web** (this repo) - Web application
- **foodspot-mobile** (planned) - Mobile app
- **foodspot-backend** (planned) - API server
- **foodspot-admin** (planned) - Admin dashboard

## 📋 Prerequisites

- Node.js 18+
- npm or yarn
- Yelp Fusion API key

## 🛠️ Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/foodspot-web.git
   cd foodspot-web
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**
   ```bash
   cp .env.example .env.local
   ```

4. **Add your Yelp API key to `.env.local`:**
   ```env
   YELP_API_KEY=your_yelp_api_key_here
   ```

5. **Run the development server:**
   ```bash
   npm run dev
   ```

6. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
src/
├── app/                  # Next.js App Router
├── components/           # React components
│   ├── ui/              # Reusable UI components
│   ├── forms/           # Form components
│   └── restaurant/      # Restaurant-specific components
├── lib/                 # Business logic
│   ├── api/             # API utilities
│   ├── stores/          # Zustand stores
│   └── utils/           # Utility functions
├── types/               # TypeScript type definitions
├── data/                # Static data and constants
└── hooks/               # Custom React hooks
```

## 🔧 API Integration

### Yelp Fusion API

The app uses the Yelp Fusion API to fetch restaurant data. To get your API key:

1. Visit [Yelp Developers](https://www.yelp.com/developers/v3/manage_app)
2. Create a new app
3. Copy your API key
4. Add it to your `.env.local` file

### API Endpoints

- `POST /api/yelp` - Search restaurants using Yelp Fusion API

## 📜 Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy

### Other Platforms

The app can be deployed to any platform that supports Next.js:

- Netlify
- Railway
- DigitalOcean App Platform

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 🙏 Acknowledgments

- [Yelp Fusion API](https://www.yelp.com/developers/documentation/v3) for restaurant data
- [Next.js](https://nextjs.org/) for the amazing framework
- [Tailwind CSS](https://tailwindcss.com/) for styling utilities
- [Lucide](https://lucide.dev/) for beautiful icons

---

Made with ❤️ for food lovers in Vietnam