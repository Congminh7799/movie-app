import { Link as RouterLink } from "react-router-dom";

const Link = ({ href, label }: { href: string, label: string }) => {
    return (
        <RouterLink to={href}>
            <p className="hover:text-sky-400">{label}</p>
        </RouterLink>
    )
}

export default Link;