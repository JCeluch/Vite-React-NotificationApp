# Notification Management App

This project is a React application built with Vite, TypeScript, and SCSS modules. It features a notification system with different types of notifications, a notification modal, and a global state management system using React Context.

## Features

- **Navbar with Notification Icon**: A bell icon with a counter that displays the number of unread notifications.
- **Notification Modal**: Displays all notifications and unread notifications, with an option to mark all as read.
- **Notification Types**: Supports three types of notifications - Request, Status change to on hold, and New feature.
- **Persistent Notifications**: Notifications are persisted across page reloads using `localStorage`.
- **Notification Interactions**: Notifications are clickable and redirect to different pages. They can also be marked as read individually.
- **Global State Management**: Manages notifications globally using React Context.

## Getting Started

### Prerequisites

- Node.js (>= 14.x)
- npm (>= 6.x) or yarn (>= 1.x)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/notification-management-app.git
   cd notification-management-app

2. Install dependencies:

    npm install
    # or
    yarn install

## Running the App
### To start the development server, run:
    npm run dev
    # or
    yarn dev

This will start the app at `http://localhost:5173`.

### Building the App
To build the app for production, run:

    npm run build
    # or
    yarn build

The build files will be in the `dist` directory.

### Running Tests
To run the tests, use:

    npm run test
    # or
    yarn test

## Project Structure
├── public
├── src
│   ├── components
│   │   ├── Navbar.tsx
│   │   ├── Notification.tsx
│   │   ├── NotificationModal.tsx
│   ├── context
│   │   ├── NotificationContext.tsx
│   ├── pages
│   │   ├── NewFeaturePage.tsx
│   │   ├── OnHoldPage.tsx
│   │   ├── RequestPage.tsx
│   ├── tests
│   │   ├── Notification.test.tsx
│   │   ├── NotificationContext.test.tsx
│   │   ├── OnHoldPage.test.tsx
│   │   ├── NewFeaturePage.test.tsx
│   │   ├── RequestPage.test.tsx
│   │   ├── setupTests.ts
│   ├── types
│   │   ├── types.ts
│   ├── App.tsx
│   ├── main.tsx
│   ├── vite-end.d.ts
│   └── styles
│       ├── App.module.scss
│       ├── Navbar.module.scss
│       ├── Notification.module.scss
│       └── NotificationModal.module.scss
├── .gitignore
├── index.html
├── package.json
├── README.md
└── vite.config.ts
