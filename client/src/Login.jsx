import InputField from "./components/InputField";
import {useState} from "react";
import Button from "./components/Button";
import Alert from './components/Alert';
import useAlert from "./hooks/useAlrert";

function Login(){
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const[showAlert, setShowAlert,
        alertType, setAlertType,
        alertTitle, setAlertTitle,
        alertContext, setAlertContext] = useAlert();

    const loginSend = () => {
        const req = fetch("./student/login",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body: JSON.stringify({"nick_name":username,"password":password}) 
        });
        req.then(res => {
            if(!res.ok){
                res.json().then(data => showError(data.error))
            }
        })
    }

    const showError = (errorMessage) => {
        setShowAlert(true);
        setAlertType('error');
        setAlertTitle("Error");
        setAlertContext(`${errorMessage}`)
    }

    return (
        <div className={"border-4 border-blue-600 rounded-2xl w-1/3 min-w-max mx-auto mt-32 p-6"}>
            {showAlert && <Alert type={alertType} title={alertTitle} context={alertContext}/>}
            <div className={"flex-col space-y-5"}>
                <h2 className={"text-center text-3xl"}>Login to Your Account</h2>
                <InputField type={'text'}
                            label={'username'}
                            value={username}
                            onChange={e => setUsername(e.target.value)}
                />
                <InputField type={'password'}
                            label={'password'}
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                />
                <Button onClick={() => loginSend() } type={'primary'} children={'Log In'}/>
            </div>
        </div>
    )
}

export default Login;