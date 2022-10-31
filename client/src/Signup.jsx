import InputField from "./components/InputField";
import {useState} from "react";
import Button from "./components/Button";
import Alert from './components/Alert';
import useAlert from "./hooks/useAlrert";

function Signup(){
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [isic, setIsic] = useState("");
    const [password2, setPassword2] = useState("");
    

    const[showAlert, setShowAlert,
        alertType, setAlertType,
        alertTitle, setAlertTitle,
        alertContext, setAlertContext] = useAlert();

    const SignupSend = () => {
        
        try{
            console.log("som tuna ")
            if(password !== password2){
                throw Error("not matching passwords");
            }
            const req = fetch("./student/register",{
                method:"POST",
                headers:{"Content-Type":"application/json"},
                body: JSON.stringify({"nick_name":username,"password":password,"isic":isic}) 
                
            });
            console.log(req)
            req.then(data => {
                console.log(data.status)
                setShowAlert(true);
                setAlertType('success');
                setAlertTitle("You profile has been registred");
                setAlertContext("plase login nad ");
            
            }).catch(err => {
                setShowAlert(true);
                setAlertType('error');
                setAlertTitle("Something went WRONG!");
                setAlertContext(`${err} `);
                console.log(`ERRROR ${err}`)
            })
        }catch(err){
            console.log(err);
        }
        
    }

    return (
        <div className={"border-4 border-blue-600 rounded-2xl w-1/3 min-w-max mx-auto mt-32 p-6"}>
            {showAlert && <Alert type={alertType} title={alertTitle} context={alertContext}/>}
            <div className={"flex-col space-y-5"}>
                <h2 className={"text-center text-3xl"}>Create an Account</h2>
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
                <InputField type={'password'}
                            label={'repeat password'}
                            value={password2}
                            onChange={e => setPassword2(e.target.value)}
                />
                <InputField type={'text'}
                            label={'isic'}
                            value={isic}
                            onChange={e => setIsic(e.target.value)}
                />
                
                <Button onClick={() => SignupSend() } type={'primary'} children={'Sign Up'}/>
            </div>
        </div>
    )
}

export default Signup;