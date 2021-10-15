import Head from 'next/head'
import Markdown from '../../components/MarkDown'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Main from '../../components/Main'
import PostHeader from '../../components/PostHeader'

export default function PostPage({ post, posts }) {
  return (
    <div className="flex-layout">
      <Head>
        <title>{post.title}</title>
        <link rel="icon" href="/code.png" />
      </Head>
      <Header />
      <Main>
        <div className="container">
          <PostHeader post={post} />
        </div>
        <div className="container container-wrapper shadow">
          <PostBody content={post.content} />
        </div>
        <div className="container">
          {/* <PostFooter /> */}
        </div>
      </Main>
      <Footer />
    </div>
  )
}

function PostBody({ content }) {
  return (
    <div className="markdown-body">
      <Markdown markdown={content} />
    </div>
  )
}

PostPage.getInitialProps = async (ctx) => {
  const data = await fetch(`http://localhost:5035/api/posts/${ctx.query.slug}`)
  const post = await data.json()
  const datas = await fetch(`http://localhost:5035/api/posts`)
  const posts = await datas.json()
  return {
    post: post.data,
    posts: posts.data
  }
}