import Link from "next/link";
import st from '../styles/A.module.css'

export default function A({text, href}) {
    return (
        <Link legacyBehavior href={href}>
            <a className={st.link}>{text}</a>
        </Link>
    )
}