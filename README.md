# 💸 Instant-Pay

A modern web application for digital wallet management and seamless money transfers using banking APIs.

## 🌟 Overview

Instant Pay allows users to add money to their digital wallet and make instant payments to other users. Built on a robust tech stack with a focus on security and user experience, this application provides real-time transaction capabilities in a responsive interface.

## ✨ Features

- **💰 Digital Wallet Management**: Add funds to your wallet using secure banking APIs
- **👥 Peer-to-Peer Transfers**: Send money instantly to other users
- **⚡ Real-time Transaction Updates**: Track your payments and transfers as they happen
- **🔒 Secure Authentication**: User authentication and authorization built-in
- **📱 Responsive Design**: Modern UI built with Tailwind CSS

## 🛠️ Tech Stack

- **🖥️ Frontend & Backend**: Next.js
- **🚀 API Servers**: Express.js
- **🗄️ Database**: PostgreSQL
- **🔌 ORM**: Prisma
- **🎨 Styling**: Tailwind CSS
- **📦 Monorepo Management**: Turborepo
- **🐳 Containerization**: Docker
- **⌨️ Language**: TypeScript

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm or yarn
- Docker (for PostgreSQL)
- Git

### Installation Steps

1. **Clone the repository**

```bash
git clone https://github.com/100xdevs-cohort-2/week-17-final-code
```

2. **Install dependencies**

```bash
npm install
```

3. **Set up PostgreSQL**

Either run locally with Docker:

```bash
docker run -e POSTGRES_PASSWORD=mysecretpassword -d -p 5432:5432 postgres
```

Or use a cloud provider like [neon.tech](https://neon.tech)

4. **Configure environment variables**

- Copy all `.env.example` files to `.env` in their respective directories
- Update all `.env` files with your database URL and other required variables

5. **Set up the database**

```bash
cd packages/db
npx prisma migrate dev
npx prisma db seed
```

6. **Start the development server**

```bash
cd apps/user-app
npm run dev
```

7. **Log in to the application**

Use the following demo credentials:
- Phone: 1111111111
- Password: alice

*Note: These are seed data credentials. See `seed.ts` for more demo accounts.*

## 📂 Project Structure

This project is organized as a monorepo using Turborepo:

- `apps/user-app`: Main Next.js application
- `packages/db`: Prisma schema and database utilities
- Additional auxiliary services in their respective directories


## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the [MIT License](LICENSE).

