import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from './Components/common/Layout';
import './style/Styles.css';
import './style/Responsive.css';
import Login from "./Pages/Login";
import Content from "./Pages/Content";
import Bill from "./Pages/Bill";
import TraficReport from "./Pages/TraficReport";
import Profile from "./Pages/Profile";
import { createContext, useEffect, useState } from "react";
 import PrivateRoute from "./PrivateRoute"
import Notfound from "./Components/Other/Notfound";
import ChangePassword from "./Pages/ChangePassword";
import Facture from "./Pages/Facture";
import AddAudit from "./Pages/AddAudit";
import ListOfAudit from "./Pages/ListOfAudit";
  
 
export const ThemeContext = createContext(null);

const App = () => {
 
    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
        setTheme((curr) => (curr === 'light' ? "dark" : "light"))
    }

    useEffect(() => {
        localStorage.setItem('theme', theme);
    }, [theme]);

    const savedTheme = localStorage.getItem('theme');
    useEffect(() => {
        if (savedTheme) {
            setTheme(savedTheme);
        }
    }, []);

    // Save theme to local storage whenever it changes
    useEffect(() => {
        if (theme === 'dark') {
            document.body.classList.add('dark-theme');
        } else {
            document.body.classList.remove('dark-theme');
        }
    }, [theme]);

    return (
             <BrowserRouter>
                     <ThemeContext.Provider value={{ theme, toggleTheme }}>
                        <div id={theme}>
                            <Routes>
                                <Route element={<Login />} path="/login" />
                                <Route element={<Notfound />} path="*" />
                                <Route element={<PrivateRoute />}>
                                <Route path="/" element={<Layout />}>
                                <Route exact path="/" element={<Profile />} />
                                <Route path="/content" element={<Content />} />
                                <Route path="/bill" element={<Bill />} />
                                <Route path="/traffic" element={<TraficReport />} />
                                <Route path="/ChangePassword" element={<ChangePassword />} />
                                <Route path="/facture" element={<Facture />} />
                                <Route path="/addAudit" element={<AddAudit />} />
                                <Route path="/audit" element={<ListOfAudit />} />



                                </Route>
                            </Route>
                            </Routes>
                        </div>
                    </ThemeContext.Provider>
             </BrowserRouter>
 
    )
}

export default App