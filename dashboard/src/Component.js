import React, { useState, useEffect, useRef } from 'react';
import {
  Bell, Book, Calendar, ChevronDown, DollarSign, GraduationCap, 
  Menu, PieChart, Users, Truck, ClipboardList, 
  FileText, Award
} from 'lucide-react';

export default function Component() {
  const [isPaused, setIsPaused] = useState(false);
  const carouselRef = useRef(null);

  const username = "John Doe";

  const managementCards = [
    { title: 'Teacher Management', icon: <Users size={32} /> },
    { title: 'Class Management', icon: <Book size={32} /> },
    { title: 'Subject Management', icon: <Book size={32} /> },
    { title: 'Exam Management', icon: <ClipboardList size={32} /> },
    { title: 'Promotion Management', icon: <Award size={32} /> },
    { title: 'Student Management', icon: <GraduationCap size={32} /> },
    { title: 'Parents Management', icon: <Users size={32} /> },
    { title: 'Transport Management', icon: <Truck size={32} /> },
    { title: 'Attendance Management', icon: <Calendar size={32} /> },
    { title: 'Fee Management', icon: <DollarSign size={32} /> },
    { title: 'Result Management', icon: <Award size={32} /> },
    { title: 'Noticeboard Management', icon: <Bell size={32} /> },
    { title: 'Notification Management', icon: <Bell size={32} /> },
    { title: 'Report Management', icon: <FileText size={32} /> },
    { title: 'Progress Card Management', icon: <PieChart size={32} /> }
  ];

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const animateCarousel = () => {
      if (!isPaused) {
        carousel.scrollLeft += 1;
        if (carousel.scrollLeft >= (carousel.scrollWidth - carousel.clientWidth)) {
          carousel.scrollLeft = 0;
        }
      }
      requestAnimationFrame(animateCarousel);
    };

    const animationId = requestAnimationFrame(animateCarousel);

    return () => cancelAnimationFrame(animationId);
  }, [isPaused]);

  const handleMouseEnter = () => setIsPaused(true);
  const handleMouseLeave = () => setIsPaused(false);

  return (
    <div className="dashboard">
      <main className="main-content">
        <header className="navbar">
          <button className="icon-button">
            <Menu size={24} />
          </button>
          <div className="welcome-message">Welcome, {username}!</div>
          <div className="navbar-actions">
            <button className="icon-button"><Bell size={20} /></button>
            <button className="profile-button">
              <img src="/placeholder.svg?height=32&width=32" alt="Profile" className="profile-image" />
              <span>{username}</span>
              <ChevronDown size={16} />
            </button>
          </div>
        </header>

        <div className="dashboard-content">
          <div className="carousel-container">
            <div
              className="management-carousel"
              ref={carouselRef}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              {managementCards.map((card, index) => (
                <div key={`${card.title}-${index}`} className="carousel-card">
                  {card.icon}
                  <h3>{card.title}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* CSS Styles */}
      <style jsx>{`
        .dashboard {
          font-family: 'Inter', sans-serif;
          background-color: #f0f4f8;
          min-height: 100vh;
        }

        .main-content {
          max-width: 1200px;
          margin: 0 auto;
          padding: 20px;
        }

        .navbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 15px 20px;
          background-color: #ffffff;
          box-shadow: 0 2px 4px rgba(12, 74, 110, 0.1);
          border-radius: 10px;
          margin-bottom: 20px;
        }

        .icon-button, .profile-button {
          background: none;
          border: none;
          cursor: pointer;
          color: #0C4A6E;
          transition: color 0.3s ease;
        }

        .icon-button:hover, .profile-button:hover {
          color: #0F609B;
        }

        .welcome-message {
          font-size: 18px;
          font-weight: 600;
          color: #0C4A6E;
        }

        .navbar-actions {
          display: flex;
          align-items: center;
          gap: 15px;
        }

        .profile-button {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .profile-image {
          width: 32px;
          height: 32px;
          border-radius: 50%;
        }

        .carousel-container {
          overflow: hidden;
          margin-top: 20px;
        }

        .management-carousel {
          display: flex;
          gap: 20px;
          padding: 10px 0;
          overflow-x: auto;
          scroll-behavior: smooth;
          -webkit-overflow-scrolling: touch;
          scrollbar-width: none;
          -ms-overflow-style: none;
        }

        .management-carousel::-webkit-scrollbar {
          display: none;
        }

        .carousel-card {
          flex: 0 0 auto;
          width: calc(20% - 16px);
          min-width: 200px;
          max-width: 250px;
          height: 150px;
          background: linear-gradient(135deg, #0C4A6E, #0F609B);
          border-radius: 10px;
          padding: 20px;
          color: #ffffff;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          text-align: center;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          cursor: pointer;
          box-shadow: 0 4px 6px rgba(12, 74, 110, 0.1);
        }

        .carousel-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 6px 12px rgba(12, 74, 110, 0.2);
        }

        .carousel-card h3 {
          margin: 10px 0 0 0;
          font-size: 16px;
          font-weight: 600;
        }

        @media (max-width: 1200px) {
          .carousel-card {
            width: calc(25% - 15px);
          }
        }

        @media (max-width: 992px) {
          .carousel-card {
            width: calc(33.33% - 13.33px);
          }
        }

        @media (max-width: 768px) {
          .carousel-card {
            width: calc(50% - 10px);
          }
        }

        @media (max-width: 480px) {
          .carousel-card {
            width: calc(100% - 20px);
            max-width: none;
          }
        }
      `}</style>
    </div>
  );
}
