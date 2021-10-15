import '../styles/globals.css'
import '../styles/header.css'
import '../styles/footer.css'
import '../styles/edit.css'
import '../styles/post.css'

import 'viblo-sdk/themes/prism-github.scss'
import 'github-markdown-css/github-markdown.css'

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp