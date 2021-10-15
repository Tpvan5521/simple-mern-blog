import PropTypes from 'prop-types'
import md from '../../libs/markdown'

const Markdown = ({ markdown }) => {
    const rawHtml = md.render(markdown);

    return (
        <div className="md-contents" dangerouslySetInnerHTML={{ __html: rawHtml }} />
    );
}

Markdown.propTypes = {
    markdown: PropTypes.string,
}

Markdown.defaultProps = {
    markdown: '',
}

export default Markdown;