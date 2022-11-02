import UserProfile from "./user/UserProfile";


function Posts(){

    return (
        <>
            Page with posts. <br/>
            Your username: {UserProfile.getUsername()} <br/>
            Are you logged in? {"" + UserProfile.isUserLoggedIn()}
        </>
    )
}

export default Posts;
