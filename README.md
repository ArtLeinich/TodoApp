# Todo List Application

A simple, responsive Todo List application built with Next.js and TypeScript, designed to help users organize their tasks efficiently.

## 🚀 Features

- ✨ **Add New Task:** Create tasks with a title, category, and priority
- 📝 **Edit Task:** Modify the title, category, and priority of existing tasks
- ✅ **Mark as Completed/Uncompleted:** Toggle task status with visual feedback
- 🗑️ **Delete Task:** Remove tasks from the list

## 🛠️ Technologies Used

- **Next.js** - React framework for server-side rendering
- **TypeScript** - For type safety across the codebase
- **Prisma** - Database ORM for managing tasks
- **React Icons** - Enhanced UI with modern icons
- **Tailwind CSS** - Utility-first CSS framework

## 📁 Project Structure

```
app/
├── actions/           # Server actions
│   └── todo/         # Task-related operations
├── page.tsx          # Main Todo List page
│
components/
├── ui/               # Shared UI components
└── shared/           # Task operation components
    ├── AddTodo
    ├── EditTodo
    ├── DeleteTodo
    └── ChangeTodo

types/                # TypeScript types
utils/                # Utility files
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- PostgreSQL database

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/your-repository.git
   cd your-repository
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment**
   
   Create a `.env` file in the root directory:
   ```env
   DATABASE_URL="your_database_url"
   ```

4. **Run Prisma migrations**
   ```bash
   npx prisma migrate dev
   ```

5. **Start the development server**
   ```bash
   npm run dev
   ```

Visit `http://localhost:3000` to see the application running.

## 💡 Usage

1. **Adding a Task**
   - Enter task title
   - Select category and priority
   - Click "Add"

2. **Managing Tasks**
   - ✅ Click "Mark as Completed" to toggle task status
   - 📝 Use the edit icon to modify tasks
   - 🗑️ Click the trash icon to delete tasks


## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.
