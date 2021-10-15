import Head from 'next/head'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Main from '../../components/Main'
import Card from '../../components/Card'
import Tag from '../../components/Tag'

export default function ListPostsHasTag({ listPostsHasTag, tagName, tags }) {
    return (
        <div className="flex-layout">
            <Head>
                <title>#{tagName} | List Posts</title>
                <link rel="icon" href="/code.png" />
            </Head>
            <Header />
            <Main>
                <div className="container">
                    <Tag tags={tags} />
                    <small><b>{listPostsHasTag.length === 1 ? '1 result' : `${listPostsHasTag.length} results`}</b> for #{tagName}</small>
                </div>
                <div className="container container-wrapper">
                    <ul>
                        <Card posts={listPostsHasTag} />
                    </ul>
                </div>
            </Main>
            <Footer />
        </div>
    )
}

ListPostsHasTag.getInitialProps = async function (ctx) {
    const res = await fetch(`http://localhost:5035/api/tags/${ctx.query.slug}`)
    const tag = await res.json()

    const t_res = await fetch('http://localhost:5035/api/tags')
    const tags = await t_res.json()

    return {
        listPostsHasTag: tag.data,
        tagName: tag.tag_name,
        tags: tags.data
    }
}