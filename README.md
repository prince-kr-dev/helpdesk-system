# 🛠️ Helpdesk Ticketing System

A simple web-based Helpdesk Ticketing System built using **React.js** that allows users to create and track support tickets. It includes features like user authentication, a dashboard, ticket submission, and performance tracking.

---

## 🚀 Features

- 🔐 **User Authentication**  
  - Signup and login functionality with local storage session handling

- 📊 **Dashboard**  
  - Displays key statistics like total tickets, status distribution, and performance summaries

- 📝 **New Ticket Submission**  
  - Users can create new tickets by providing a subject, description, and priority

- 📁 **My Tickets**  
  - Users can view and manage the tickets they have submitted

- 📈 **Performance Tracking**  
  - Displays metrics related to the user’s ticket activity and resolution stats

---

## 🧑‍💻 Tech Stack

- **Frontend**: React.js, Tailwind CSS (or your styling choice)
- **Routing**: React Router DOM
- **State Management**: React Hooks, Local Storage

---

## 📂 Project Structure

```
src/
├── assets/                # Static images, icons, or logo
│   └── logo.png
├── components/            # UI Components
│   ├── Login.jsx
│   ├── Signup.jsx
│   ├── Dashboard.jsx
│   ├── NewTicket.jsx
│   ├── MyTicket.jsx
│   ├── Performance.jsx
│   └── MainScreen.jsx
├── styles/                # CSS or Tailwind config files
├── App.jsx                # Root app with routing
├── index.js               # Entry point
```


---

## 🛠️ Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/helpdesk-project.git
cd helpdesk-project
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run the Development Server

```bash
npm start
```

The app will run locally at: [http://localhost:3000](http://localhost:3000)
