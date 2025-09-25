import { useState } from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import  Login  from "./components/Login";
import { Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from "./context/AuthContext";  

export default function App() {
  const { user, loading, logoutUser } = useAuth();

  if (loading) return <div>Loading...</div>;

  return (
    <div className="min-h-screen">
      <Header user={user} onLogout={logoutUser} />
      
      <Routes>
        {/* Public pages */}
        <Route path="/" element={
          <>
            <Hero />
          </>
        } />
        <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
        {/* Catch-all redirect */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>

    </div>
  );
}