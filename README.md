# 🚀 Creative Social Media App

A modern and interactive social media platform where users can create accounts, post content, like, comment, and follow other users.

## 🌟 Features

- 🔐 **User Authentication** (Signup, Login, JWT-based authentication)
- 👥 **User Profiles** (Profile picture, followers, following)
- 📝 **Post System** (Create, delete, like, and comment on posts)
- 🔔 **Real-time Notifications** (Coming soon)
- 🌍 **Responsive UI** (Designed with React.js and Tailwind CSS)
- 📊 **Interactive Dashboard** (For user insights and engagement tracking)

---

## 🛠 Tech Stack

### **Frontend**
- React.js (Next.js for SSR)
- Tailwind CSS (For styling)
- Axios (For API requests)

### **Backend**
- Node.js & Express.js
- MongoDB (Mongoose ORM)
- JSON Web Token (JWT for authentication)

### **Deployment**
- Vercel (Frontend)
- Render/Railway (Backend)
- MongoDB Atlas (Database)

---

## 📂 Project Structure

```bash
Creative-SocialMedia-App/
│── frontend/         # React.js (Next.js) Frontend
│── backend/          # Node.js & Express Backend
│── models/           # Database models
│── routes/           # API routes
│── middleware/       # Authentication middleware
│── public/           # Static assets
│── .env              # Environment variables
│── README.md         # Project Documentation
```

---

## ⚡ Installation & Setup

### **1️⃣ Clone the Repository**
```sh
git clone https://github.com/your-username/Creative-SocialMedia-App.git
cd Creative-SocialMedia-App
```

### **2️⃣ Install Dependencies**
#### Backend
```sh
cd backend
npm install
```

#### Frontend
```sh
cd ../frontend
npm install
```

### **3️⃣ Configure Environment Variables**
Create a `.env` file in the `backend/` folder:
```
MONGO_URI=your-mongodb-connection-string
JWT_SECRET=your-secret-key
```

### **4️⃣ Start the Development Server**
#### Backend
```sh
cd backend
npm start
```
#### Frontend
```sh
cd frontend
npm start
```

---

## 🚀 API Endpoints

### **User Authentication**
| Method | Endpoint          | Description        |
|--------|------------------|--------------------|
| POST   | /api/users/signup | Register a new user |
| POST   | /api/users/login  | Login and get JWT |

### **Post Management**
| Method | Endpoint        | Description |
|--------|----------------|-------------|
| POST   | /api/posts      | Create a new post |
| GET    | /api/posts      | Get all posts |
| PUT    | /api/posts/:id/like | Like/Unlike a post |

---

## 🎯 Future Enhancements

- ✅ **Real-time Chat System**
- ✅ **Dark Mode UI**
- ✅ **Improved User Recommendations**
- ✅ **More Profile Customization Options**

---

## 💡 Contributing

Feel free to contribute by forking this repository and submitting a pull request. 🚀

---

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---



