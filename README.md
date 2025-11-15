# Mini Task Manager

A small, focused React project designed to test core React concepts: components, state, props, refs, portals, Context API, and `useEffect`. The app is intentionally minimal so you can implement and evaluate each feature in ~2 days.

---

## Features

- Add, complete, and delete tasks
- Add-task modal implemented with a Portal
- Modal input autofocus using `ref`
- Global theme (light / dark) using Context API
- Tasks persisted to `localStorage` using `useEffect`
- Clean component structure to practice prop drilling and callbacks

---

## Tech Stack

- React
- JavaScript
- Tailwind CSS

---

## Project Structure

```
src/
├─ components/
│ ├─ TaskList.jsx
│ ├─ TaskItem.jsx
│ ├─ AddTaskModal.jsx
│ └─ ThemeToggle.jsx
├─context/
│ └─ ThemeContext.jsx
├─ App.jsx
├─ main.jsx
└─ index.css
public/
index.html (contains a for portals)
LICENSE
Package.json
Package-lock.json
vite.config.js
eslint.config.js
```

---

## Getting Started

### Prerequisites

- Node.js
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone https://github.com/fasih124/Mini-Task-Manager.git
cd mini-task-manager
```

2. Install dependencies:
   npm install
   or
   yarn

3. Start the dev server:
   npm start
   or
   yarn start

Open http://localhost:5173 to view the app.

# How to Test the Concepts (Checklist)

- Add a task via the modal — verifies parent state mutation from child.
- Toggle task complete — verifies child invoking parent callback.
- Delete a task — verifies state update and re-render.
- Open modal and confirm input autofocus — verifies ref behavior.
- Inspect DOM to verify modal is rendered in #modal-root — verifies portal usage.
- Toggle theme — verifies Context API usage and global styling.
- Reload the page — tasks remain (persisted via localStorage using useEffect).

# Useful Commands

```
npm start # run dev server
npm run build # build for production
```

# Contributing

Contributions are welcome. If you'd like to add features or polish, please:

1. Fork the repository
2. Create a feature branch (git checkout -b feature/your-feature)
3. Commit your changes (git commit -m "feat: add ...")
4. Push to the branch (git push origin feature/your-feature)
5. Open a Pull Request

# Author

Fasih Ahmad Khan
