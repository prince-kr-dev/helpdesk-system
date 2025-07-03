[Live Demo]((https://helpdesk-system-one.vercel.app/login)

# 🛠️ Helpdesk Ticketing System

A simple web-based Helpdesk Ticketing System built using **React.js** that allows users to create and track support tickets. It includes features like user authentication, a dashboard, ticket submission, and performance tracking.

## 🔐 Default Login Credentials (For Testing Without Signup)

You can use the following sample credentials to log in without signing up:

```
Email: prince@gmail.com  
Password: prince123
```

> Or, if you prefer, you can create a new account using the **Signup** page.


---
## 📦 Data Storage Disclaimer

This project **does not use any database or backend server**.  
All user session and ticket data are temporarily stored in the **browser's local storage**.

> ⚠️ This means:
> - Data will be lost if the user clears browser storage or switches devices/browsers.
> - This project is intended for demonstration or front-end practice purposes only.
> - I will extend it in the future by integrating a backend like Firebase, Express, or MongoDB.


## 🚀 Features

- 🔐 **User Authentication**  
  - Signup and login functionality with local storage session handling

- 📊 **Dashboard**  
  - Displays key statistics like total tickets, status distribution, and performance summaries

- 📝 **New Ticket Submission**  
  - Users can create new tickets by providing a subject, description, and priority etc.

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
https://github.com/prince-kr-dev/helpdesk-system.git
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
