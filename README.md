[Live Demo](https://helpdesk-system-one.vercel.app/login)

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
## Screenshots
# Login
![0](https://github.com/user-attachments/assets/705fd337-6cd0-4ff7-9c8a-f13dadf0820f)

# Signup
![1](https://github.com/user-attachments/assets/2e90b5c1-3daa-438d-b525-9b0adbcd9bcb)

# Dashboard
![3](https://github.com/user-attachments/assets/83178b8f-ded9-4946-81af-330b89831c2d)

# New Ticket
![4](https://github.com/user-attachments/assets/e5fed1f0-817c-4312-8eb2-d5ef917879ab)

# My Ticket
![5](https://github.com/user-attachments/assets/088767a9-5c78-4608-9bdd-3d9c7a1a9990)

# Ticket Details
![6](https://github.com/user-attachments/assets/d6f19cfe-05a2-4265-8b7b-ae08e7eb8328)

# Performance
![2](https://github.com/user-attachments/assets/5b68ffb5-df81-4b91-9c81-1ee5ca10b09c)

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
