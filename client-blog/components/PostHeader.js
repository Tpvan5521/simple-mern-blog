import Link from 'next/link'

export default function PostHeader({ post }) {
    return (
        <>
            <div className="post-ctrl">
                <div className="post-title">{post.title}</div>
                <div className="post-tags">{post.tags.map(tag => { return (<Link href={`/t/` + tag}><a>#{tag}</a></Link>) })}</div>
                <div className="post-author">
                    <div className="flex">
                        <div className="user-avatar">
                            {/* <image
                            src={srcAvatar}
                            alt="user-avatar" /> */}
                        </div>
                        <div className="user-name"><Link href="/about"><a>Trần Phương Vân</a></Link></div>
                        <div className="published-time">published at {post.created_at.split('', 10)}</div>
                    </div>
                </div>
            </div>
            <img src={post.featured_image} alt="..." />
        </>
    )
}