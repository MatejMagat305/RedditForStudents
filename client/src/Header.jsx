import useAlert from "./hooks/useAlrert";
import {studentLogout} from "./constants/urls";
import UserProfile from "./user/UserProfile";
import Button from "./components/Button";
import Alert from "./components/Alert";
import {Navigate} from "react-router-dom";
import {useState} from "react";

function Header() {

    const [loggedOut, setLoggedOut] = useState(false);

    const [showAlert, setShowAlert,
        alertType, setAlertType,
        alertTitle, setAlertTitle,
        alertContext, setAlertContext] = useAlert();

    const showError = (errorMessage) => {
        setShowAlert(true);
        setAlertType('error');
        setAlertTitle("Error");
        setAlertContext(`${errorMessage}`)
    }

    const logoutSend = () => {
        const req = fetch(studentLogout, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            credentials: 'include'
        });

        req.then(res => {
            if (res.ok) {
                UserProfile.setUsername('')
                setLoggedOut(true)
            } else {
                res.json().then(data => showError(data.msg))
            }
        }).catch(err => {
            showError(err)
        })
    }

    if (loggedOut) {
        return <Navigate to="/"/>
    }
    return (
        <header>
            {UserProfile.getUsername()}
            <Button
                type={'secondary'}
                children={'Logout'}
                onClick={() => logoutSend()}
            />
            {showAlert &&
                <Alert type={alertType} title={alertTitle} context={alertContext}/>
            }
        </header>
    )
}

export default Header;
