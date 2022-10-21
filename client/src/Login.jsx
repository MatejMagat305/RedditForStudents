import InputField from "./components/InputField";
import {useState} from "react";
import Button from "./components/Button";

function Login(){
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    return (
        <div className={"border-4 border-blue-600 rounded-2xl w-1/3 min-w-max mx-auto mt-32 p-6"}>
            <form className={"flex-col space-y-5"}>
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
                <Button type={'primary'} children={'Log In'}/>
            </form>
        </div>
    )
}

export default Login;