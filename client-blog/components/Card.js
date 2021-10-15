import Link from 'next/link'

export default function Card({ posts }) {
    return (
        <>
            {posts.map((post, idx) => (
                <li key={idx} className="card">
                    <div>
                        <p style={{ color: "#818181", fontSize: '1.5rem' }}>{post.title}</p>
                        <p>{post.description}</p>
                        <p>{post.tags.map((tag, index) => (
                            <Link href={'/t/' + tag} key={index}>
                                <button className="btn-tag"><span>#{tag}</span></button>
                            </Link>
                        ))}</p>
                        <Link href={'/p/' + post.slug}>
                            <a>View post →</a>
                        </Link>
                    </div>
                </li>
            ))}
        </>
    )
}