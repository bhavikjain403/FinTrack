import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MantineProvider } from "@mantine/core";

import "./App.css";
import Dashboard from "./components/Dashboard/Dashboard";
import Expense from "./components/Expense/Expense";
import Home from "./components/Home/Home";
import Learn from "./components/Learn/Learn";
import SignupPage from "./components/Signup/SignupPage";
import LoginPage from "./components/Login/LoginPage";
import ProtectedRoute from "./components/ProtectedRoutes/ProtectedRoute";
import DefaultWidget from './components/Setting/DefaultWidget';
import MarketOvervieww from './components/Setting/MarketOverview';
import StockMarkett from './components/Setting/StockMarket';
import Calculator from "./components/Calculator/Calculator";
import EconomicCalendarr from './components/Setting/EconomicCalendar';
import Portfolio from "./components/Portfolio/Portfolio";
import Budget from "./components/Budget/Budget";
import Investments from "./components/Card/Investments";
import {Toaster} from 'react-hot-toast'

function App() {
  return (
    <MantineProvider theme={{}}>
      <Toaster position="top-right" />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<LoginPage />}></Route>
          <Route path="/signup" element={<SignupPage />}></Route>
          <Route
            path="/dashboard/:username"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/expense/:username"
            element={
              <ProtectedRoute>
                <Expense />
              </ProtectedRoute>
            }
          />
          <Route
            path="/portfolio/:username"
            element={
              <ProtectedRoute>
                <Portfolio />
              </ProtectedRoute>
            }
          />
          <Route
            path="/budget/:username"
            element={
              <ProtectedRoute>
                <Budget />
              </ProtectedRoute>
            }
          />
          <Route
            path="/learn/:username"
            element={
              <ProtectedRoute>
                <Learn />
              </ProtectedRoute>
            }
          />
          <Route
            path="/widgets/tradingview/:username"
            element={
              <ProtectedRoute>
                <DefaultWidget />
              </ProtectedRoute>
            }
          />
          {/* <Route
            path="/widgets/economiccalendar/:username"
            element={
              <ProtectedRoute>
                <EconomicCalendarr />
              </ProtectedRoute>
            }
          />
          <Route
            path="/widgets/marketoverview/:username"
            element={
              <ProtectedRoute>
                <MarketOvervieww />
              </ProtectedRoute>
            }
          /> */}
          <Route
            path="/widgets/stockmarket/:username"
            element={
              <ProtectedRoute>
                <StockMarkett />
              </ProtectedRoute>
            }
          />
          <Route
            path="/investments/:username"
            element={
              <ProtectedRoute>
                <Investments />
              </ProtectedRoute>
            }
          />
          {/* <Route
            path="/widgets/technicalanalysis/:username"
            element={
              <ProtectedRoute>
                <TechnicalAnalysiss />
              </ProtectedRoute>
            }
          /> */}
          <Route
            path="/emicalculator/:username"
            element={
              <ProtectedRoute>
                <Calculator />
              </ProtectedRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </MantineProvider>
  );
}

export default App;
