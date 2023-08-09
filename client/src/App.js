import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { useSelector } from "react-redux";
import { useMemo } from "react";
import { themeSettings } from "theme.js";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Dashboard from 'pages/Dashboard'
import Layout from 'pages/common/Layout'
import Members from "pages/Members";
import EditForm from "pages/EditForm";




function App() {
  const mode = useSelector((state) => state.global.mode);

  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

  return (
    <div className="app">
      <Router>
        <ThemeProvider theme={theme}>
          {/* CssBaseLIne remove default mui css */}
          <CssBaseline />
          <Routes>
            <Route element={<Layout />} >
              <Route path="/" element={<Navigate to="/dashboard" replace />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/members" element={<Members />} />
              <Route path="/edit/member/:id" element={<EditForm />} />




            </Route>
          </Routes>

        </ThemeProvider>
      </Router>
    </div>
  )
}

export default App