const Profile =(props)=>{
    return (
    <div>
        <h1>full name : {props.fullName}</h1>
    <h1>bio : {props.bio}</h1>
    <h1>profession : {props.profession}</h1>
    </div>
    )
}
export default Profile;