import { useEffect, useState } from 'react'
import api from '../api/index'
import Head from 'next/head'
import Markdown from '../../components/MarkDown'
import Main from '../../components/Main'
import BackButton from '../../components/BackButton'

export default function CreatePostPage() {

    const [_pid, setPID] = useState('')
    const [tags, setTags] = useState('')
    const [slug, setSlug] = useState('')
    const [title, setTitle] = useState('Title')
    const [content, setContent] = useState('')
    const [keywords, setKeywords] = useState('')
    const [description, setDescription] = useState('')
    const [featured_image, setFeaturedImage] = useState('')

    const [mdcontent, setMdcontent] = useState('')

    const handleChangePID = async e => { setPID(e.target.value) }
    const handleChangeTags = async e => { setTags(e.target.value) }
    const handleChangeSlug = async e => { setSlug(e.target.value) }
    const handleChangeTitle = async e => { setTitle(e.target.value) }
    const handleChangeContent = async e => { setContent(e.target.value) }
    const handleChangeKeywords = async e => { setKeywords(e.target.value) }
    const handleChangeDescription = async e => { setDescription(e.target.value) }
    const handleChangeFeaturedImage = async e => { setFeaturedImage(e.target.value) }

    const handleCreatePost = async () => {
        const payload = {
            _pid,
            slug,
            title,
            content,
            description,
            featured_image,
            tags: tags.split(', '),
            keywords: keywords.split(', ')
        }
        await api
            .createPost(JSON.stringify(payload))
            .then(res => {
                window.alert('Post created successfully')
                setPID('')
                setTags('')
                setSlug('')
                setTitle('')
                setContent('')
                setKeywords('')
                setDescription('')
                setFeaturedImage('')
            })
    }

    useEffect(() => {
        const timeout = setTimeout(() => {
            setMdcontent(content)
        }, 800)
        return () => clearTimeout(timeout)
    }, [content])

    return (
        <div className="flex-layout">
            <Head>
                <title>Blog | Create new post</title>
                <link rel="icon" href="/code.png" />
            </Head>
            {/* <Header /> */}
            <Main>
                <div className="flex" style={{ background: '#fff' }}>
                    <div className="detail-ctrl">
                        <h3>Details</h3>
                        <p>Slug</p>
                        <input
                            type="text"
                            value={slug}
                            onChange={handleChangeSlug}
                        />
                        <p>Description</p>
                        <input
                            type="text"
                            value={description}
                            onChange={handleChangeDescription}
                        />
                        <p>Keywords</p>
                        <input
                            type="text"
                            value={keywords}
                            onChange={handleChangeKeywords}
                        />
                        <p>Tags</p>
                        <input
                            type="text"
                            value={tags}
                            onChange={handleChangeTags}
                        />
                        <p>Src Image</p>
                        <input
                            type="text"
                            value={featured_image}
                            onChange={handleChangeFeaturedImage}
                        />
                        <p>Post ID</p>
                        <input
                            type="text"
                            value={_pid}
                            onChange={handleChangePID}
                        />
                    </div>
                    <div className="form-ctrl">
                        <input
                            type="text"
                            value={title}
                            onChange={handleChangeTitle}
                            className="title-input"
                        />
                        <h3>Your content</h3>
                        <textarea
                            type="text"
                            value={content}
                            onChange={handleChangeContent}
                        />
                        <button className="btn-primary" onClick={handleCreatePost}>Post</button>
                        <BackButton />
                    </div>
                    <div className="markdown-ctrl">
                        <h3>Basic use Markdown</h3>
                        <MDSyntaxTable />
                    </div>
                </div>
                <div className="post-result">
                    <h3>Preview (Content MD)</h3>
                    <div className="container container-wrapper">
                        <div className="markdown-body">
                            <Markdown markdown={mdcontent} />
                        </div>
                    </div>
                </div>
            </Main>
        </div>
    )
}

const MDSyntaxTable = () => {
    return (
        <div className="markdown-table flex">
            <div>
                <p># h1 ... ###### h6</p>
                <p>*emphasize*</p>
                <p>**bold**</p>
                <p>***bold and emphasize***</p>
                <p>[Link](href link)</p>
                <p>![alt](src img)</p>
                <p>
                    * Item 1<br />
                * Item 2
            </p>
                <p>> quoted</p>
                <p>` inline code `</p>
                <p>
                    ``` <br />
                block code <br />
                ```
            </p>
            </div>
            <div>
                <p>H1...H6 Header</p>
                <p><i>emphasize</i></p>
                <p><b>bold</b></p>
                <p><i><b>bold and emphasize</b></i></p>
                <p><a href="#">Link</a></p>
                <p><img src="" alt="img" /></p>
                <p>
                    <ul style={{ listStyleType: 'disc' }}>
                        <li>Item 1</li>
                        <li>Item 2</li>
                    </ul>
                </p>
                <p><div className="quo">quoted</div></p>
                <p><code>inline code</code></p>
                <p>
                    <pre>block code</pre>
                </p>
            </div>
        </div>
    )
}