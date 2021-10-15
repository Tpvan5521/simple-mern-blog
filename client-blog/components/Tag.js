import Link from "next/link";

export default function Tag({ tags }) {
    return (
        <div>
            <ul className="list-tag">
                {tags.map((tag, idx) => (
                    <li key={idx} className="tag-name">
                        <Link href={'/t/' + tag}><span>#{tag}</span></Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}