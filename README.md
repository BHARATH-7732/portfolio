# S. Bharath's Portfolio

A personal portfolio website with an integrated full-stack todo application.

## 🚀 Features

### Portfolio Website
- Personal information and skills showcase
- Project highlights with live links
- Contact information
- Responsive design with Tailwind CSS

### Todo Application
- Full-stack Node.js/Express backend with REST API
- Vanilla JavaScript frontend (no external framework dependencies)
- Complete CRUD operations (Create, Read, Update, Delete)
- Real-time todo management
- Filter todos by status (All, Active, Completed)
- In-memory data storage
- Responsive design

## 🛠️ Tech Stack

**Backend:**
- Node.js
- Express.js
- UUID for unique IDs
- CORS for cross-origin requests

**Frontend:**
- Vanilla JavaScript (ES6+)
- HTML5
- Tailwind CSS
- Responsive design

## 📋 API Endpoints

### Todos API
- `GET /api/todos` - Get all todos
- `POST /api/todos` - Create a new todo
- `PUT /api/todos/:id` - Update a todo
- `DELETE /api/todos/:id` - Delete a todo

### Web Routes
- `GET /` - Portfolio homepage
- `GET /todo` - Todo application

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/BHARATH-7732/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the server:
```bash
npm start
```

4. Open your browser and navigate to:
- Portfolio: http://localhost:3001
- Todo App: http://localhost:3001/todo

### Development Mode

For development with auto-restart:
```bash
npm run dev
```

## 📱 Screenshots

### Portfolio Homepage
![Portfolio](https://github.com/user-attachments/assets/581cfbe8-c4f8-40dc-8dc8-2cf4ac4b66ec)

### Todo Application
![Todo App](https://github.com/user-attachments/assets/187a5cfb-ec2a-41a7-9a32-ed83d6f501b1)

## 🎯 Todo App Features

- ✅ Add new todos
- ✅ Mark todos as complete/incomplete
- ✅ Edit todo text inline
- ✅ Delete todos
- ✅ Filter by status (All/Active/Completed)
- ✅ Real-time counter updates
- ✅ Responsive design
- ✅ Smooth animations and hover effects

## 📝 Todo App Usage

1. **Adding Todos**: Type in the input field and click "Add Todo" or press Enter
2. **Completing Todos**: Click the checkbox next to any todo
3. **Editing Todos**: Click the "Edit" button, modify the text, and click "Save"
4. **Deleting Todos**: Click the "Delete" button next to any todo
5. **Filtering**: Use the "All", "Active", or "Completed" buttons to filter todos

## 🔧 Configuration

The server runs on port 3001 by default. You can change this by setting the `PORT` environment variable:

```bash
PORT=8000 npm start
```

## 📂 Project Structure

```
portfolio/
├── server.js              # Express server and API routes
├── package.json           # Project dependencies and scripts
├── index.html             # Portfolio homepage
├── todo-vanilla.html      # Todo application
├── style.css              # Portfolio styles
├── script.js              # Portfolio JavaScript
└── README.md              # Project documentation
```

## 🚀 Deployment

This application can be deployed to any Node.js hosting platform:

1. **Heroku**: Push to Heroku with the included `package.json`
2. **Vercel**: Deploy as a Node.js application
3. **Railway**: Connect your GitHub repository
4. **DigitalOcean App Platform**: Deploy directly from GitHub

## 👨‍💻 Author

**S. Bharath**
- Email: balajibharath31@gmail.com
- Phone: 7989590882
- Location: Chenguballa, Chittoor, Andhra Pradesh
- GitHub: [@BHARATH-7732](https://github.com/BHARATH-7732)
- LinkedIn: [S. Bharath](https://www.linkedin.com/in/s-bharath-32a342270/)

## 📄 License

This project is licensed under the MIT License - see the package.json file for details.