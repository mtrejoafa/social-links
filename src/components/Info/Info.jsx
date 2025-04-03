import "./Info.css";   
import img from "../../images/avatar-jessica.jpeg"; 

export const Info = () => {
    return (
        <div className="info">
            <img src={img} alt="Avatar" className="profile-img"/>
            <h4 className="profile-name">Jessica Randall</h4>
            <h6 className="profile-location">London, United Kingdom</h6>
            <p className="profile-job">"Front-end Developer and avide reader."</p>
        </div>
    )
}