import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header.tsx";
import PostList from "./components/Home/PostList.tsx";
import AddPost from "./components/Add/AddPost.tsx";
import About from "./components/About/About.tsx";
import Contacts from "./components/Contacts/Contacts.tsx";
import PostDetail from "./components/Post/PostDetail.tsx";
import EditPost from "./components/Post/EditPost.tsx";
import "./App.css"; // Импортируем стили

const App: React.FC = () => {
  return (
    <div className="app-container">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<PostList />} />
          <Route path="/posts" element={<PostList />} />
          <Route path="/new-post" element={<AddPost />} />
          <Route path="/about" element={<About />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/posts/:id" element={<PostDetail />} />
          <Route path="/posts/:id/edit" element={<EditPost />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
