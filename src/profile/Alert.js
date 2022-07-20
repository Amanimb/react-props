
import Profile from "./Profile";
const Alert = () => {
    const handleClick = e => {
      e.preventDefault();
      alert({Profile})
    };
   
    return (
      <a href="/" onClick={handleClick} >
       Alert
      </a>
    );
   };
   export default Alert;