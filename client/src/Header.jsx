import useAlert from "./hooks/useAlrert";
import {studentLogout} from "./constants/urls";
import UserProfile from "./user/UserProfile";
import Button from "./components/Button";
import Alert from "./components/Alert";

function Header() {

    const [showAlert, setShowAlert,
        alertType, setAlertType,
        alertTitle, setAlertTitle,
        alertContext, setAlertContext] = useAlert();

    const showSuccess = (successMessage) => {
        setShowAlert(true);
        setAlertType('success');
        setAlertTitle("Awesome");
        setAlertContext(`${successMessage}`)
    }

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
                showSuccess("Logout successful")
                UserProfile.setUsername('')
            } else {
                res.json().then(data => showError(data.msg))
            }
        }).catch(err => {
            showError(err)
        })
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
