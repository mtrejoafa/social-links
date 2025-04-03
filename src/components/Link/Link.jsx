import "./Link.css";

export const Link = ({url,name}) => {
    return (
        <a href={url} className="link" target="_blank">{name}</a>
    )
}