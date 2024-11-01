export const LogoComponent = () => {
    return (
        <div className="logoContainer">
            <img src={process.env.REACT_APP_LOGO_URL} />
        </div>
    )
}