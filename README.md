// Instructions: Create a comprehensive README for the Córdoba permit viewer project

# Córdoba Permit Viewer

A web application that clones the UI design of Córdoba municipality's permit verification page. This project recreates the visual appearance and layout of the official government permit lookup system.

## Features

- ✅ Pixel-perfect clone of the original UI design
- ✅ Responsive layout that works on all devices
- ✅ Official municipality branding and logos
- ✅ Complete permit information display including:
  - Company/business details
  - License information
  - Property details
  - Partnership information
  - Business activity details

## Tech Stack

- **Framework**: Next.js 15 with TypeScript
- **Styling**: Tailwind CSS
- **Package Manager**: Bun
- **Deployment**: Netlify

## Getting Started

### Prerequisites

- Node.js 18+ or Bun
- Git

### Installation

1. Clone the repository:
```bash
git clone https://github.com/[your-username]/cordoba-permit-viewer.git
cd cordoba-permit-viewer
```

2. Install dependencies:
```bash
bun install
```

3. Start the development server:
```bash
bun run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Development

This project is set up for development with:

- **Linting**: ESLint and Biome
- **Type checking**: TypeScript
- **Hot reload**: Next.js development server
- **CSS**: Tailwind CSS with custom color scheme

### Available Scripts

- `bun run dev` - Start development server
- `bun run build` - Build for production
- `bun run start` - Start production server
- `bun run lint` - Run linter

## Visual Studio Code Setup

This project is optimized for Visual Studio Code development:

1. Install recommended extensions
2. Use the integrated terminal for running commands
3. TypeScript intellisense is fully configured
4. ESLint integration for code quality

## Project Structure

```
cordoba-permit-viewer/
├── src/
│   ├── app/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx      # Main permit viewer page
│   └── lib/
│       └── utils.ts
├── public/
├── .same/                # Project documentation
└── README.md
```

## Design Notes

The UI faithfully recreates the original design with:

- Official blue header (#0782be)
- Light blue section headers (#bde4eb)
- White content areas with proper spacing
- Municipality and HOL branding logos
- Responsive card-based layout
- Proper typography and visual hierarchy

## License

This is a UI clone for educational/demonstration purposes. All original design elements belong to the Municipality of Córdoba, Argentina.

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## Original Source

This project clones the UI from: https://hol.cordoba.gob.ar/qr/
Official website of the Municipality of Córdoba's online permit system.
