import { UserProps } from "../types/user";

import { MdLocationPin } from "react-icons/md";
import { RiBuilding4Line } from "react-icons/ri";
import { Link } from "react-router-dom";

import classes from "./User.module.css"

const User = ({
    login,
    avatar_url,
    location,
    company,
    followers,
    following,
}: UserProps) => {
    return (
        <div className={classes.user}>
            <img
                src={avatar_url}
                alt={login}
            />
            <h2>{login}</h2>
            {location && (
                <p className={classes.location}>
                    <MdLocationPin />
                    <span>{location}</span>
                </p>
            )}
            {company && (
                <p className={classes.company}>
                    <RiBuilding4Line />
                    <span>{company}</span>
                </p>
            )}
            <div className={classes.stats}>
                <div>
                    <p>Seguidores:</p>
                    <p className={classes.number} >{followers}</p>
                </div>
                <div>
                    <p>Seguindo:</p>
                    <p className={classes.number} >{following}</p>
                </div>
            </div>
            <a href="https://github.com/Rafael-Boscolo">Veja os melhores projetos:</a>
        </div>
    );
};

export default User;