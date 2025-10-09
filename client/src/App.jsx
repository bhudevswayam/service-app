import { useState } from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { ServiceCategories } from "./components/ServiceCategories";
import { FeaturedBusinesses } from "./components/FeaturedBusinesses";
import { HowItWorks } from "./components/HowItWorks";
import { Footer } from "./components/Footer";
import  Login  from "./components/Login";
import { Register } from "./components/Register";
import { Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from "./context/AuthContext";  
import { UserProfile } from "./components/UserProfile";
import { RegisterBusiness } from "./components/RegisterBusiness";
import { BookingHistory } from "./components/BookingHistory";
import { BusinessProfile } from "./components/BusinessProfile";

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
            <ServiceCategories />
            <FeaturedBusinesses />
            <HowItWorks />
          </>
        } />
        <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
        <Route path="/register" element={user ? <Navigate to="/" /> : <Register />} />
        <Route path="/register-business" element={user ? <Navigate to="/" /> : <RegisterBusiness />} />
        
         {/* Protected pages */}
        <Route path="/profile" element={user ? <UserProfile user={user}/> : <Navigate to="/login" />} />
        <Route path="/bookings" element={user ? <BookingHistory /> : <Navigate to="/login" />} />
        <Route path="/business" element={user?.role == "business" ? <BusinessProfile /> : <Navigate to="/" />} />

        {/* Catch-all redirect */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>

      <Footer />
    </div>
  );
}
