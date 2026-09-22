import { Link } from "@tanstack/react-router"
import logoImage from "@/assets/images/Logo.png"

export const Logo = () => {
    return (
        <Link to="/" className="self-center">
            <img src={logoImage} alt="Logo SyntaxWear" className="w-40" />
        </Link>
    )
}