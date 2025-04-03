import { Info } from "../Info/Info";
import { LinkContainer } from "../LinkContainer/LinkContainer";
import "./Card.css";

export const Card = () => {
    return (
        <div className="card">
            <Info/>
            <LinkContainer/>
        </div>
    )
}