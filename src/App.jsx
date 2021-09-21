
import React, { useState } from 'react'
import About from './About'
import Alert from './Alert'
import Navbar from './Navbar'
import TextForm from './TextForm'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

const App = () => {
    const [darkMode, setDarkMode] = useState('')
    const [navDark, setNavDark] = useState('light')
    const [check, setCheck] = useState(false)
    const [alert, setAlert] = useState(null);


    let showAlert = (message, type) => {
        setAlert({
            msg: message,
            type: type
        })
    }




    let DarkMode = (e) => {
        if (check === false) {
            setDarkMode('my-style-2')
            setNavDark('dark')
            document.body.classList.add('my-style')
            setCheck(true)
            showAlert(' Dark Mode Enabled', 'success')
            setTimeout(() => {
                setAlert(null)
            }, 1500);
        }
        else {
            setDarkMode('')
            setNavDark('light')
            setCheck(false)
            document.body.classList.remove('my-style')
            showAlert(' Dark Mode Disabled', 'success')
            setTimeout(() => {
                setAlert(null)
            }, 1500);

        }
    }

    return (
        <>
            <Router>
                <Navbar
                    DarkMode={DarkMode}
                    darkMode={darkMode}
                    navDark={navDark}
                    check={check}
                    showAlert={showAlert}
                />


                <Alert
                    alert={alert}
                />
                <Switch>
                    <Route exact path="/about">
                        <About />
                    </Route>
                    <Route exact path="/">
                        <TextForm
                            Heading='Enter The Text To Analyse Below'
                            Button1='Convert To Uppercase'
                            Button2='Convert To Lowercase'
                            DarkMode={DarkMode}
                            darkMode={darkMode}
                            check={check}
                            showAlert={showAlert}
                        />
                    </Route>
                </Switch>
            </Router>


        </>
    )
}

export default App
