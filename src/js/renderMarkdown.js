import markdownit from 'markdown-it'
import mdBidi from 'markdown-it-bidi'
import hljs from 'highlight.js/lib/common'

const renderer = markdownit({
    linkify: true,
    highlight: function (code, language) {
        if (language && hljs.getLanguage(language)) {
            try {
                return '<pre class="hljs"><code>' + hljs.highlight(code, {language, ignoreIllegrals: true}).value + '</code></pre>'
            } catch (__) {}
        }
        return '<pre class="hljs"><code>' + renderer.utils.escapeHtml(code) + '</code></pre>'
    }
}).use(mdBidi)

function renderMarkdown (md) {
    return renderer.render(md)
}

export default renderMarkdown
