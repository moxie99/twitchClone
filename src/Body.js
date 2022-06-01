import Profile from "./Profile";
import "./Body.css";
import Stream from "./Stream";
const Body = ()=> {
    return (
        <div className="body">
            <div className="body__left">
                <Stream/>
                <Profile />
            </div>
            <div className="body__rightPlaceholder">

            </div> 
        </div>
    )
}

export default Body;