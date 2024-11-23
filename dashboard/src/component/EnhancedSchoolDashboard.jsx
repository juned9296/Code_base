import React, { useState, useEffect, useRef } from "react";
import { CustomTooltip, CustomLineTooltip } from "./CustomTooltips";

import {
  Bell,
  Book,
  Calendar,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  DollarSign,
  Home,
  Menu,
  PieChart,
  Users,
} from "lucide-react";
import {
  BarChart,
  LineChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart as RechartsPieChart,
  Pie,
  Cell,
  Line,
} from "recharts";

import "./EnhancedSchoolDashboard.css";

export default function EnhancedSchoolDashboard() {
  const [selectedClass, setSelectedClass] = useState("All");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const carouselRef = useRef(null);
  const username = "John Doe";

  const classes = [
    "Nursery",
    "LKG",
    "UKG",
    "1st",
    "2nd",
    "3rd",
    "4th",
    "5th",
    "6th",
    "7th",
    "8th",
    "9th",
    "10th",
    "11th",
    "12th",
  ];

  const managementCards = [
    { title: "Teacher Management", icon: Users },
    { title: "Class Management", icon: Book },
    { title: "Subject Management", icon: Book },
    { title: "Exam Management", icon: PieChart },
    { title: "Promotion Management", icon: ChevronRight },
    { title: "Student Management", icon: Users },
    { title: "Parents Management", icon: Users },
    { title: "Transport Management", icon: ChevronRight },
    { title: "Attendance Management", icon: Calendar },
    { title: "Fee Management", icon: DollarSign },
    { title: "Result Management", icon: PieChart },
    { title: "Noticeboard Management", icon: Bell },
    { title: "Notification Management", icon: Bell },
    { title: "Report Management", icon: PieChart },
    { title: "Progress Card Management", icon: PieChart },
  ];

  const [notices, setNotices] = useState([
    {
      name: "Annual Day",
      date: "2024-05-15",
      info: "Preparations start next week",
      icon: Calendar,
      color: "gradient-blue",
    },
    {
      name: "Parent-Teacher Meeting",
      date: "2024-03-20",
      info: "For all classes",
      icon: Users,
      color: "gradient-blue",
    },
    {
      name: "Sports Day",
      date: "2024-04-10",
      info: "Inter-school competition",
      icon: Calendar,
      color: "gradient-blue",
    },
  ]);

  const renderCalendar = () => {
    const year = currentMonth.getFullYear();
    const month = currentMonth.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDay = firstDay.getDay();

    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    const days = [];
    for (let i = 0; i < startingDay; i++) {
      days.push(<div key={`empty-${i}`} className="calendar-day empty"></div>);
    }
    for (let i = 1; i <= daysInMonth; i++) {
      days.push(
        <div key={i} className="calendar-day">
          {i}
        </div>
      );
    }

    return (
      <div className="calendar">
        
        <div className="calendar-header">
          <button
            onClick={() => setCurrentMonth(new Date(year, month - 1))}
            className="calendar-nav-button"
          >
            <ChevronLeft size={20} />
          </button>
          <h3 className="calendar-title">
            {monthNames[month]} {year}
          </h3>
          <button
            onClick={() => setCurrentMonth(new Date(year, month + 1))}
            className="calendar-nav-button"
          >
            <ChevronRight size={20} />
          </button>
        </div>
        <div className="calendar-grid">
          {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
            <div key={day} className="calendar-day-name">
              {day}
            </div>
          ))}
          {days}
        </div>
      </div>
    );
  };

  const moveCarousel = (direction) => {
    if (carouselRef.current) {
      const scrollAmount = carouselRef.current.offsetWidth;
      carouselRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className={`dashboard_front ${isSidebarOpen ? "sidebar-open" : ""}`}>
      <aside className="sidebar">
        <div className="sidebar-header">
          <h2 className="navbar_logo">Dashboard</h2>
        </div>
        <nav className="sidebar-nav">
          <ul>
            <li>
              <a href="#" className="active">
                <Home size={20} /> <span>Overview</span>
              </a>
            </li>
            <li>
              <a href="#">
                <Users size={20} /> <span>Students</span>
              </a>
            </li>
            <li>
              <a href="#">
                <Book size={20} /> <span>Teachers</span>
              </a>
            </li>
            <li>
              <a href="#">
                <DollarSign size={20} /> <span>Finances</span>
              </a>
            </li>
            <li>
              <a href="#">
                <Calendar size={20} /> <span>Calendar</span>
              </a>
            </li>
            <li>
              <a href="#">
                <PieChart size={20} /> <span>Reports</span>
              </a>
            </li>
          </ul>
        </nav>
      </aside>

      <main className="main-content">
      {/* <div className="page-title-box">Mai hu Kaluwa</div> */}
        <header className="navbar">
        
          <button
            className="toggle-sidebar"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          >
            <Menu size={24} />
          </button>
          <div className="welcome-message">Welcome, {username}!</div>
          <div className="navbar-actions">
            <button className="icon-button">
              <Bell size={20} />
            </button>
            <button className="profile-button">
              <img
                src="/placeholder.svg?height=32&width=32"
                alt="Profile"
                className="profile-image"
              />
              <span>{username}</span>
              <ChevronDown size={16} />
            </button>
          </div>
        </header>

        <div className="dashboard-content">
          <div className="carousel-container">
            <button
              className="carousel-button prev"
              onClick={() => moveCarousel("left")}
            >
              <ChevronLeft size={24} />
            </button>
            <div className="overview-carousel" ref={carouselRef}>
              {managementCards.map((card, index) => (
                <div
                  key={index}
                  className="carousel-card"
                  style={{ backgroundColor: `hsl(${index * 20}, 70%, 60%)` }}
                >
                  <card.icon size={32} />
                  <span>{card.title}</span>
                </div>
              ))}
            </div>
            <button
              className="carousel-button next"
              onClick={() => moveCarousel("right")}
            >
              <ChevronRight size={24} />
              
            </button>
            
          </div>
          

          <section className="overview">
            <h2>Overview</h2>
            <div className="overview-grid">
              <div className="overview-card">
                <h3>Total Students</h3>
                <p>1200</p>
              </div>
              <div className="overview-card">
                <h3>Total Teachers</h3>
                <p>80</p>
              </div>
              <div className="overview-card">
                <h3>Total Earnings</h3>
                <p>₹500,000</p>
              </div>
              <div className="overview-card">
                <h3>Total Dues</h3>
                <p>₹50,000</p>
              </div>
            </div>
          </section>

          {/* Graphs Section */}
          <section className="graphs-section">
            <div className="graph-container">
              <h3>Student Gender Distribution</h3>
              <ResponsiveContainer width="100%" height={300}>
                <RechartsPieChart>
                  <Pie
                    data={[
                      { name: "Boys", value: 700 },
                      { name: "Girls", value: 500 },
                    ]}
                    cx="50%"
                    cy="50%"
                    outerRadius={100}
                    label={({ name, percent }) => (
                      <text
                        fill="white"
                        fontFamily="'Roboto', sans-serif"
                        fontSize="16"
                        textAnchor="middle"
                      >
                        {`${name}: ${Math.round(percent * 100)}%`}
                      </text>
                    )}
                  >
                    <Cell fill="#007acc" />
                    <Cell fill="#FF6F61" />
                  </Pie>
                  <Tooltip content={<CustomTooltip />} />
                </RechartsPieChart>
              </ResponsiveContainer>
              <div className="legend">
                <span style={{ color: "#00C49F" }}>Boys: 700</span>
                <span style={{ color: "#FF8042", marginLeft: "10px" }}>
                  Girls: 500
                </span>
              </div>
            </div>

            <div className="graph-container">
              <h3>Monthly Earnings</h3>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={monthlyData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#ddd" />
                  <XAxis dataKey="month" stroke="#9fa3a7" />
                  <YAxis stroke="#cacdd0" />
                  <Tooltip content={<CustomLineTooltip />} />
                  <Legend />
                  <Line type="monotone" dataKey="earnings" stroke="#00C49F" />
                </LineChart>
              </ResponsiveContainer>
              <div className="legend">
                <span style={{ color: "#00C49F" }}>Earnings Over Time</span>
              </div>
            </div>
          </section>

          {/* Bottom Section */}
          <section className="bottom-section">
            <div className="noticeboard">
              <h3 className="noticeboard-title">Noticeboard</h3>
              <div className="noticeboard-cards">
                {notices.map((notice, index) => (
                  <div
                    key={index}
                    className={`noticeboard-card ${notice.color}`}
                  >
                    <div className="notice">
                      <h4>{notice.name}</h4>
                      <div className="notice-date">{notice.date}</div>
                      <div className="notice-info">{notice.info}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="event-calendar">
              <h3 className="calendar-title">Event Calendar</h3>
              <section className="calendar-section">{renderCalendar()}</section>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

// Sample data for graphs and notices
const monthlyData = [
  { month: "Jan", earnings: 50000 },
  { month: "Feb", earnings: 60000 },
  { month: "Mar", earnings: 70000 },
  { month: "Apr", earnings: 80000 },
  { month: "May", earnings: 90000 },
];
