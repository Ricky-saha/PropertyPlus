import { useContext, useState, useEffect } from "react";
import "./navbar.scss";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { useNotificationStore } from "../../lib/notificationStore";

const navigationLinks = [
    { to: "/", label: "Home" },
    { to: "/", label: "About" },
    { to: "/", label: "Contact" },
    { to: "/", label: "Agents" },
];

function Navbar() {
    const [open, setOpen] = useState(false);
    const { currentUser } = useContext(AuthContext);
    
    const fetch = useNotificationStore((state) => state.fetch);
    const number = useNotificationStore((state) => state.number);
    console.log("Current notification number:", number);
    
    useEffect(() => {
        if(currentUser) fetch();
    }, [currentUser, fetch]);
    
    return (
        <nav>
            <div className="left">
                <Link to="/" className="logo">
                    <img src="/logo.png" alt="Property Plus Logo" />
                    <span>Property Plus <b>+</b></span>
                </Link>
                {navigationLinks.map(link => (
                    <Link key={link.label} to={link.to}>{link.label}</Link>
                ))}
            </div>
            <div className="right">
                {currentUser ? (
                    <div className="user">
                        <img
                            src={currentUser.avatar || "noavatar.jpg"}
                            alt={`${currentUser.username}'s avatar`}
                        />
                        <span>{currentUser.username}</span>
                        <Link to="/profile" className="profile">
                            {number > 0 && <div className="notification">{number}</div>}
                            <span>Profile</span>
                        </Link>
                    </div>
                ) : (
                    <div className="auth-links">
                        <Link to="/login">Sign in</Link>
                        <Link to="/register" className="register">
                            Sign up
                        </Link>
                    </div>
                )}
                <div className="menuIcon">
                    <img
                        src="/menu.png"
                        alt="Menu toggle"
                        onClick={() => setOpen((prev) => !prev)}
                    />
                </div>
                <div className={open ? "menu active" : "menu"}>
                    {navigationLinks.map(link => (
                        <Link key={link.label} to={link.to}>{link.label}</Link>
                    ))}
                    {!currentUser ? (
                        <>
                            <Link to="/login">Sign in</Link>
                            <Link to="/register">Sign up</Link>
                        </>
                    ) : (
                        <Link to="/profile">Profile</Link>
                    )}
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
