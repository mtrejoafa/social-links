import { Link } from "../Link/Link";
import "./LinkContainer.css";
import {socialMediaLinks} from "../../data/datalinks.js";
import { useState } from "react";
import { useEffect } from "react";

export const LinkContainer = () => {
    const [socialMedia, setSocialMediaLinks] = useState([]);

    useEffect(() => {
        const fetchLinks = () => {
            setSocialMediaLinks(socialMediaLinks);
        };
        fetchLinks();
    }, []);

    return (
        <div className="link-container">
            {socialMedia.map((link, index) => (
                <Link key={index} name={link.name} url={link.url} />
            ))}
        </div>
    )
}