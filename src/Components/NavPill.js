const NavPill = ({ setIsNavOpen, isNavOpen }) => {
    return (
        <nav>
            {/* <div className="top">
                <a href="/">Logo
                    <LogoIcon />
                </a>
            </div> */}
            <div
                className={`menu ${isNavOpen ? "open" : ""}`}
                onClick={() => {
                    setIsNavOpen(!isNavOpen);
                }}
            >
                {[...Array(parseInt(3))].map((e, i) => (
                    <span key={i}></span>
                ))}
            </div>
        </nav>
    );
};

export default NavPill