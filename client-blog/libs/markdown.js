import { createRenderer } from 'viblo-sdk/markdown';

const md = createRenderer({
    baseURL: 'http://localhost:3000',
    absoluteURL: false,
    embed: {
        wrapperClass: 'embed-responsive embed-responsive-16by9',
        iframeClass: 'embed-responsive-item',
    },
    katex: {
        maxSize: 500,
        maxExpand: 100,
        maxCharacter: 1000,
    },
});

export default md;