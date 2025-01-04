# Real-Time Chat App

This is a real-time chat application built with Next.js, Convex, Clerk, Tailwind CSS, and shadcn. The app allows users to send and receive messages instantly in a clean, modern interface.

---

## Features

- **Real-Time Messaging**: Messages are sent and received instantly without the need to refresh the page.
- **Responsive Design**: Fully responsive UI built with Tailwind CSS for a seamless experience across devices.
- **Authentication**: User authentication managed by Clerk for a secure login and signup process.
- **State Management**: Efficient state handling with Convex for real-time updates.
- **UI Components**: Styled with shadcn for a polished and consistent design.

---

## Tech Stack

- [Next.js](https://nextjs.org/) - React framework for building server-rendered applications.
- [Convex](https://convex.dev/) - Backend as a service for real-time data synchronization.
- [Clerk](https://clerk.dev/) - User authentication and management.
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework.
- [shadcn](https://shadcn.dev/) - Component library for a modern UI design system.

---

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/mflops/chat-app.git
   cd chat-app
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Set up environment variables:
   - Create a `.env.local` file in the root of the project.
   - Add the required environment variables for Convex, Clerk, and any other services you're using. For example:
     ```env
     NEXT_PUBLIC_CONVEX_URL=your-convex-url
     NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your-clerk-publishable-key
     ```

4. Start the Convex server:
   ```bash
   npx convex dev
   ```

5. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

   The app will be available at [http://localhost:3000](http://localhost:3000).

---

## Usage

1. Open the application in your browser.
2. Log in or sign up using Clerk authentication.
3. Start chatting in real time with other users.

---

## Contributing

Contributions are welcome! Feel free to fork the repository and submit a pull request.

---

## License

This project is licensed under the [MIT License](LICENSE).

---

## Acknowledgments

- Thanks to the creators of [Next.js](https://nextjs.org/), [Convex](https://convex.dev/), [Clerk](https://clerk.dev/), [Tailwind CSS](https://tailwindcss.com/), and [shadcn](https://shadcn.dev/).

---

## Contact

For questions or suggestions, feel free to reach out:
- **Email**: madhurchawla10f@gmail.com
- **GitHub**: [mflops](https://github.com/mflops)

