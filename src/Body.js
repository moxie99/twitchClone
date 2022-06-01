import Profile from "./Profile";
import "./Body.css";
const Body = ()=> {
    return (
        <div className="body">
            <div className="body__left">
                <Profile />
            </div>
            <div className="body__rightPlaceholder">

            </div> 
        </div>
    )
}

export default Body;