import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Header({ children }) {
    const router = useRouter()
    return (
        <>
            <header>
                <ul>
                    <li className={router.pathname == "/" ? "active" : ""}>
                        <Link href={{ pathname: '/' }} exact>
                            <a>Home</a>
                        </Link>
                    </li>
                    <li className={((router.pathname == "/t") || (router.pathname == "/t/[slug]")) ? "active" : ""}>
                        <Link href={{ pathname: '/t/' }}>
                            <a>Tags</a>
                        </Link>
                    </li>
                    <li className={router.pathname == "/about" ? "active" : ""}>
                        <Link href={{ pathname: '/about' }} exact>
                            <a>About</a>
                        </Link>
                    </li>
                    <li>
                        <Link href={{ pathname: '/new/post' }} exact>
                            <a>Create Post</a>
                        </Link>
                    </li>
                </ul>
            </header>
            <div>{children}</div>
        </>
    )
}