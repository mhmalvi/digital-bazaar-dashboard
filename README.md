<div align="center">

# Digital Bazaar Dashboard

A sleek, modern e-commerce analytics dashboard for managing digital products, tracking sales performance, and monitoring key business metrics — built with React and designed for speed.

![React](https://img.shields.io/badge/React-18.3-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.5-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-5.4-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![Supabase](https://img.shields.io/badge/Supabase-Backend-3FCF8E?style=for-the-badge&logo=supabase&logoColor=white)

</div>

---

## Features

- **Revenue & Sales KPIs** — At-a-glance stats cards displaying total revenue, sales count, active users, and growth rate
- **Recent Sales Table** — Live feed of the latest customer transactions with product, amount, and timestamp
- **Top Products Ranking** — Highlights best-performing products by sales volume
- **Product Catalog Grid** — Browse, edit, and view all digital products with pricing and sales data
- **Collapsible Sidebar** — Navigable sidebar with links to Dashboard, Products, Customers, Analytics, and Settings
- **Global Search** — Quickly find products from the header search bar
- **Notification Center** — Bell icon with unread badge for real-time alerts
- **Responsive Layout** — Fully adaptive design from mobile to ultra-wide displays
- **Supabase Integration** — Authentication and real-time data powered by Supabase

## Tech Stack

| Layer | Technology |
|---|---|
| **Frontend** | React 18, TypeScript, Vite |
| **Styling** | Tailwind CSS, shadcn/ui, Radix UI Primitives |
| **State & Data** | TanStack React Query, React Hook Form, Zod |
| **Backend** | Supabase (Auth, Database) |
| **Routing** | React Router v6 |
| **Charts** | Recharts |
| **Notifications** | Sonner, Radix Toast |

## Getting Started

### Prerequisites

- **Node.js** 18+ (or Bun)
- **npm**, **yarn**, or **bun**
- A **Supabase** project (for authentication and data persistence)

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/mhmalvi/digital-bazaar-dashboard.git
   cd digital-bazaar-dashboard
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Configure environment variables**

   Create a `.env` file in the project root:

   ```env
   VITE_SUPABASE_URL=https://your-project.supabase.co
   VITE_SUPABASE_ANON_KEY=your-anon-key
   ```

4. **Start the development server**

   ```bash
   npm run dev
   ```

   The dashboard will be available at `http://localhost:5173`.

### Build for Production

```bash
npm run build
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── AppSidebar.tsx        # Navigation sidebar
│   ├── DashboardHeader.tsx   # Top bar with search, notifications, and actions
│   ├── ProductCard.tsx       # Product display card with edit/view actions
│   ├── StatsCard.tsx         # KPI metric card
│   └── ui/                   # shadcn/ui component library
├── hooks/                    # Custom hooks (use-toast, use-mobile)
├── integrations/             # Supabase client configuration
├── lib/                      # Utility functions
├── pages/
│   └── Index.tsx             # Main dashboard page
└── main.tsx                  # Application entry point
```

## License

This project is open source and available under the [MIT License](LICENSE).
