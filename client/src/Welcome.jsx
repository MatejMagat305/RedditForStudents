import {Link} from "react-router-dom";
import Button from "./components/Button";

function Welcome(){     //styling is not done yet (add background for example)

    return (
        <div className={"flex-col content-center space-y-5"}>
            <h1 className={"text-center text-4xl"}>WELCOME to Reddit for Students</h1>
            <div className={"flex-col w-1/3 mx-auto"}>
                <Link to="/login">
                    <Button type={'primary'} children={'Log In'}/>
                </Link>
                <div className={"text-center text-2xl my-2"}>OR</div>
                <Link to="/register">
                    <Button type={'secondary'} children={'Create an Account'}/>
                </Link>
            </div>
        </div>
    )
}

export default Welcome;