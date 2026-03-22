# AI Study Companion - Frontend

The **AI Study Companion** is a modern web application designed to help students study more effectively. By leveraging the power of AI, users can upload their study notes (images or PDFs) and receive detailed explanations, key points, and practice quiz questions automatically.

## 🚀 Features

- **File Upload Support**: Seamlessly upload images or PDF files of your study materials.
- **AI-Powered Analysis**: Uses advanced AI models to extract and explain complex topics from your notes.
- **Key Points & Quizzes**: Automatically generates 4-6 key takeaways and 3-5 quiz questions to test your knowledge.
- **Interactive Q&A**: Ask follow-up questions based on the uploaded content for deeper understanding.
- **Modern & Responsive UI**: Built with Next.js and Material UI for a smooth, user-friendly experience across all devices.

## 🛠️ Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **Library**: [React 19](https://reactjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **UI Components**: [Material UI (MUI)](https://mui.com/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Markdown Rendering**: [React Markdown](https://github.com/remarkjs/react-markdown)

## 🏁 Getting Started

### Prerequisites

- Node.js (v18.x or later)
- npm or yarn

### Installation

1.  Navigate to the project directory:

    ```bash
    cd ai-study-companion
    ```

2.  Install dependencies:

    ```bash
    npm install
    ```

3.  Configure environment variables:
    Create a `.env.local` file in the root directory and add your backend API URL:
    ```env
    NEXT_PUBLIC_BASE_URL=http://localhost:3000/api
    ```

### Running the Project

To start the development server:

```bash
npm run dev
```

The application will be available at [http://localhost:3001](http://localhost:3001).

## 📁 Project Structure

- `app/`: Next.js App Router directory containing pages and layouts.
- `app/constants/`: Configuration files for API endpoints and other constants.
- `app/theme/`: Custom MUI theme configuration.
- `public/`: Static assets such as images and icons.

## 📄 License

This project is licensed under the MIT License.
