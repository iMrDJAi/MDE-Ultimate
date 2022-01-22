import {LitElement, html} from 'lit'
import UndoRedojs from 'undoredo.js'
import Split from 'split.js'
import renderMarkdown from 'imrdjai-mdr'
import '@material/mwc-icon-button'
import { mdiUndo, mdiRedo, mdiFormatBold, mdiFormatItalic, mdiFormatUnderline, mdiFormatStrikethroughVariant, mdiFormatSuperscript, mdiFormatSubscript, mdiFormatHeaderPound, mdiFormatQuoteOpen, mdiAlert, mdiCodeTags, mdiCodeBraces, mdiFormatListNumbered, mdiFormatListBulleted, mdiTable, mdiLinkVariant, mdiImage, mdiArrowLeftRightBold, mdiHelpCircle } from '@mdi/js'
import Style1 from '../style/MDEUltimate.lit.scss'
import Style2 from '../style/markdown.lit.scss'
import Style3 from '../style/MWCIconButton.lit.scss'

export default class MDEUltimate extends LitElement {
    constructor() {
        super()
        this.defaultbuttons = true
        this.cooldown = 5
    }

    static get styles() {
        return [Style1, Style2]
    }

    static get properties() {
        return {
            defaultbuttons: {type: Boolean},
            cooldown: {type: Number}
        }
    }

    render() {
        return html `
            <div class="mde-ultimate-toolbar">
                <slot name="toolbar"></slot>
            </div>
            <div class="mde-ultimate-body">
                <div class="mde-ultimate-textarea-container">
                    <textarea class="mde-ultimate-textarea" @input=${this.handleTextAreaInput}></textarea>
                </div>
                <div class="mde-ultimate-gutter">
                    <svg viewBox="0 0 24 24" role="presentation"><path d="${mdiArrowLeftRightBold}" style="fill: currentcolor;"></path></svg>
                </div>
                <div class="mde-ultimate-preview"></div>
            </div>
        `
    }

    firstUpdated() {
        this.txtHistory = new UndoRedojs(this.cooldown)
        this.previewElement = this.shadowRoot.querySelector('.mde-ultimate-preview')
        this.textArea = this.shadowRoot.querySelector('.mde-ultimate-textarea')
        this.textAreaContainer = this.shadowRoot.querySelector('.mde-ultimate-textarea-container')
        this.gutter = this.shadowRoot.querySelector('.mde-ultimate-gutter')
        this.toolbarSlot = this.shadowRoot.querySelector('.mde-ultimate-toolbar > slot')

        this.split = Split([this.textAreaContainer, this.previewElement], {
            sizes: [100, 0],
            minSize: [0, 0],
            gutter: () => this.gutter,
            gutterSize: 0
        })

        if (this.defaultbuttons) {
            const escapeHtml = html => {
                [/&/g, /"/g, /'/g, /</g, />/g].forEach((reg, i) => {
                    html = html.replace(reg, ['&amp;', '&quot;', '&#39;', '&lt;', '&gt;'][i])
                })
                return html
            }
            const config = {
                undo: {
                    icon: mdiUndo
                },
                redo: {
                    icon: mdiRedo
                },
                bold: {
                    title: 'bold',
                    icon: mdiFormatBold,
                    starttoken: '**',
                    middletoken: 'bold',
                    endtoken: '**'
                },
                italic: {
                    title: 'italic',
                    icon: mdiFormatItalic,
                    starttoken: '*',
                    middletoken: 'italic',
                    endtoken: '*'
                },
                underline: {
                    title: 'underline',
                    icon: mdiFormatUnderline,
                    starttoken: '++',
                    middletoken: 'underline',
                    endtoken: '++'
                },
                strikethrough: {
                    title: 'strikethrough',
                    icon: mdiFormatStrikethroughVariant,
                    starttoken: '~~',
                    middletoken: 'strikethrough',
                    endtoken: '~~'
                },
                supscript: {
                    title: 'supscript',
                    icon: mdiFormatSuperscript,
                    starttoken: '^(',
                    middletoken: 'supscript',
                    endtoken: ')'
                },
                subscript: {
                    title: 'subscript',
                    icon: mdiFormatSubscript,
                    starttoken: '~(',
                    middletoken: 'subscript',
                    endtoken: ')'
                },
                heading: {
                    icon: mdiFormatHeaderPound
                },
                quote: {
                    icon: mdiFormatQuoteOpen
                },
                spoiler: {
                    title: 'spoiler',
                    icon: mdiAlert,
                    starttoken: '>!',
                    middletoken: 'spoiler',
                    endtoken: '!<'
                },
                inlineCode: {
                    title: 'inline code',
                    icon: mdiCodeTags,
                    starttoken: '`',
                    middletoken: 'inline code',
                    endtoken: '`'
                },
                codeBlock: {
                    title: 'code block',
                    icon: mdiCodeBraces,
                    starttoken: '\n```js\n',
                    middletoken: '    //code block',
                    endtoken: '\n```\n'
                },
                orderedList: {
                    title: 'ordered list',
                    icon: mdiFormatListNumbered,
                    starttoken: '\n1. ',
                    middletoken: 'list item.',
                    endtoken: ''
                },
                unorderedList: {
                    title: 'unordered list',
                    icon: mdiFormatListBulleted,
                    starttoken: '\n- ',
                    middletoken: 'list item.',
                    endtoken: ''
                },
                table: {
                    title: 'table',
                    icon: mdiTable,
                    starttoken: '\n| ',
                    middletoken: '01',
                    endtoken: ' | 02 | 03 | 04 |\n|:--:|:--:|:--:|:--:|\n| 05 | 06 | 07 | 08 |\n| 09 | 10 | 11 | 12 |\n'
                },
                link: {
                    title: 'link',
                    icon: mdiLinkVariant,
                    starttoken: '[',
                    middletoken: 'link',
                    endtoken: '](https://www.example.com "link")'
                },
                embed: {
                    title: 'embed',
                    icon: mdiImage,
                    starttoken: '![',
                    middletoken: 'embed',
                    endtoken: '](https://www.example.com "embed")'
                },
                resize: {
                    icon: mdiArrowLeftRightBold
                },
                help: {
                    title: 'help',
                    icon: mdiHelpCircle,
                    text: '***\n\n# [MDE Ultimate](https://github.com/iMrDJAi/MDE-Ultimate "Project Link")\n\n**MDE Ultimate** is an open source, simple, easy to use and fully featured markdown editor built for the web, powered by cool libraries, and made with Material Design!\n\n----\n\n##++Markdown Guide:++\n\n>**Bold**\n>\n>*Italic*\n>\n>++Underline++\n>\n>~~Strickthrough~~\n>\n> Spoiler => >!**not a real spoiler <3**!<\n>\n> [Link](https://github.com/iMrDJAi "My Github")\n>\n> Reddit links /r/algeria r/algeria /u/Mr_DJA u/Mr_DJA\n>\n> ++\\*\\*Escaping**+\\+\n\n> Text^(*super script*) more text ^(nested [links](#) ++can++ also work)\n>\n> H^+ 4^`55` big^**small** ^[links with spaces are supported](# "😀")\n> \n> Text~(*sub script*) H~(2)O ~(nested [links](#) ++are supported++)\n>\n> H~2 big~`small` ~[you can use spaces here!](# "yay!!!")\n\n>#H1\n>## H2\n>###  H3\n>####H4\n>##### H5\n>###### H6\n\n>> quote\n>>\n>>> nested \n>>>\n> > > quote\n> > >\n>> 😁\n>>\n>\n>> 😋\n\n>`Inline code. ~~you can\'t format text here~~`\n>\n>```js\n>//code block\n>code("block");\n>function code(block) {\n>    console.log(`code ${block}`);\n>}\n>```\n\n> Ordered list\n> 1. one.\n> 1. two.\n> 2. three.\n> 13. four.\n> 08. five.\n> 2002. six.\n\n> Unordered list\n> - foo.\n> - doo.\n> - bar.\n> - baz.\n\n> Table\n> | 01 | 02 | 03 | 04 |\n> |:---:|:---:|:----:|:----:|\n> | 05 | 06 | 07 | 08 |\n> | 09 | 10 | 11 | 12 |\n\n> Image ![](https://cdn.discordapp.com/attachments/574978692527161345/692796818165071972/ezgif-6-8a32860f90c7.gif "lol")\n>\n> ![image](https://upload.wikimedia.org/wikipedia/en/c/cc/Wojak_cropped.jpg)'
                }
            }
            const defaultButtons = [
                `<mwc-icon-button slot="toolbar" action="undo"><svg viewBox="0 0 24 24" role="presentation"><path d="${config.undo.icon}" style="fill: currentcolor;"></path></svg></mwc-icon-button>`,
                `<mwc-icon-button slot="toolbar" action="redo"><svg viewBox="0 0 24 24" role="presentation"><path d="${config.redo.icon}" style="fill: currentcolor;"></path></svg></mwc-icon-button>`,
                `<i slot="toolbar" class="mde-ultimate-separator"></i>`,
                `<mwc-icon-button slot="toolbar" action="format" starttoken="${escapeHtml(config.bold.starttoken)}" middletoken="${escapeHtml(config.bold.middletoken)}" endtoken="${escapeHtml(config.bold.endtoken)}"><svg viewBox="0 0 24 24" role="presentation"><path d="${config.bold.icon}" style="fill: currentcolor;"></path></svg></mwc-icon-button>`,
                `<mwc-icon-button slot="toolbar" action="format" starttoken="${escapeHtml(config.italic.starttoken)}" middletoken="${escapeHtml(config.italic.middletoken)}" endtoken="${escapeHtml(config.italic.endtoken)}"><svg viewBox="0 0 24 24" role="presentation"><path d="${config.italic.icon}" style="fill: currentcolor;"></path></svg></mwc-icon-button>`,
                `<mwc-icon-button slot="toolbar" action="format" starttoken="${escapeHtml(config.underline.starttoken)}" middletoken="${escapeHtml(config.underline.middletoken)}" endtoken="${escapeHtml(config.underline.endtoken)}"><svg viewBox="0 0 24 24" role="presentation"><path d="${config.underline.icon}" style="fill: currentcolor;"></path></svg></mwc-icon-button>`,
                `<mwc-icon-button slot="toolbar" action="format" starttoken="${escapeHtml(config.strikethrough.starttoken)}" middletoken="${escapeHtml(config.strikethrough.middletoken)}" endtoken="${escapeHtml(config.strikethrough.endtoken)}"><svg viewBox="0 0 24 24" role="presentation"><path d="${config.strikethrough.icon}" style="fill: currentcolor;"></path></svg></mwc-icon-button>`,
                `<mwc-icon-button slot="toolbar" action="format" starttoken="${escapeHtml(config.supscript.starttoken)}" middletoken="${escapeHtml(config.supscript.middletoken)}" endtoken="${escapeHtml(config.supscript.endtoken)}"><svg viewBox="0 0 24 24" role="presentation"><path d="${config.supscript.icon}" style="fill: currentcolor;"></path></svg></mwc-icon-button>`,
                `<mwc-icon-button slot="toolbar" action="format" starttoken="${escapeHtml(config.subscript.starttoken)}" middletoken="${escapeHtml(config.subscript.middletoken)}" endtoken="${escapeHtml(config.subscript.endtoken)}"><svg viewBox="0 0 24 24" role="presentation"><path d="${config.subscript.icon}" style="fill: currentcolor;"></path></svg></mwc-icon-button>`,
                `<i slot="toolbar" class="mde-ultimate-separator"></i>`,
                `<mwc-icon-button slot="toolbar" action="heading"><svg viewBox="0 0 24 24" role="presentation"><path d="${config.heading.icon}" style="fill: currentcolor;"></path></svg></mwc-icon-button>`,
                `<mwc-icon-button slot="toolbar" action="quote"><svg viewBox="0 0 24 24" role="presentation"><path d="${config.quote.icon}" style="fill: currentcolor;"></path></svg></mwc-icon-button>`,
                `<mwc-icon-button slot="toolbar" action="format" starttoken="${escapeHtml(config.spoiler.starttoken)}" middletoken="${escapeHtml(config.spoiler.middletoken)}" endtoken="${escapeHtml(config.spoiler.endtoken)}"><svg viewBox="0 0 24 24" role="presentation"><path d="${config.spoiler.icon}" style="fill: currentcolor;"></path></svg></mwc-icon-button>`,
                `<mwc-icon-button slot="toolbar" action="format" starttoken="${escapeHtml(config.inlineCode.starttoken)}" middletoken="${escapeHtml(config.inlineCode.middletoken)}" endtoken="${escapeHtml(config.inlineCode.endtoken)}"><svg viewBox="0 0 24 24" role="presentation"><path d="${config.inlineCode.icon}" style="fill: currentcolor;"></path></svg></mwc-icon-button>`,
                `<mwc-icon-button slot="toolbar" action="format" starttoken="${escapeHtml(config.codeBlock.starttoken)}" middletoken="${escapeHtml(config.codeBlock.middletoken)}" endtoken="${escapeHtml(config.codeBlock.endtoken)}"><svg viewBox="0 0 24 24" role="presentation"><path d="${config.codeBlock.icon}" style="fill: currentcolor;"></path></svg></mwc-icon-button>`,
                `<i slot="toolbar" class="mde-ultimate-separator"></i>`,
                `<mwc-icon-button slot="toolbar" action="format" starttoken="${escapeHtml(config.orderedList.starttoken)}" middletoken="${escapeHtml(config.orderedList.middletoken)}"><svg viewBox="0 0 24 24" role="presentation"><path d="${config.orderedList.icon}" style="fill: currentcolor;"></path></svg></mwc-icon-button>`,
                `<mwc-icon-button slot="toolbar" action="format" starttoken="${escapeHtml(config.unorderedList.starttoken)}" middletoken="${escapeHtml(config.unorderedList.middletoken)}"><svg viewBox="0 0 24 24" role="presentation"><path d="${config.unorderedList.icon}" style="fill: currentcolor;"></path></svg></mwc-icon-button>`,
                `<mwc-icon-button slot="toolbar" action="format" starttoken="${escapeHtml(config.table.starttoken)}" middletoken="${escapeHtml(config.table.middletoken)}" endtoken="${escapeHtml(config.table.endtoken)}" dontformatselection><svg viewBox="0 0 24 24" role="presentation"><path d="${config.table.icon}" style="fill: currentcolor;"></path></svg></mwc-icon-button>`,
                `<i slot="toolbar" class="mde-ultimate-separator"></i>`,
                `<mwc-icon-button slot="toolbar" action="format" starttoken="${escapeHtml(config.link.starttoken)}" middletoken="${escapeHtml(config.link.middletoken)}" endtoken="${escapeHtml(config.link.endtoken)}"><svg viewBox="0 0 24 24" role="presentation"><path d="${config.link.icon}" style="fill: currentcolor;"></path></svg></mwc-icon-button>`,
                `<mwc-icon-button slot="toolbar" action="format" starttoken="${escapeHtml(config.embed.starttoken)}" middletoken="${escapeHtml(config.embed.middletoken)}" endtoken="${escapeHtml(config.embed.endtoken)}"><svg viewBox="0 0 24 24" role="presentation"><path d="${config.embed.icon}" style="fill: currentcolor;"></path></svg></mwc-icon-button>`,
                `<i slot="toolbar" class="mde-ultimate-separator"></i>`,
                `<mwc-icon-button slot="toolbar" action="resize"><svg viewBox="0 0 24 24" role="presentation"><path d="${config.resize.icon}" style="fill: currentcolor;"></path></svg></mwc-icon-button>`,
                `<mwc-icon-button slot="toolbar" action="template" text="${escapeHtml(config.help.text)}"><svg viewBox="0 0 24 24" role="presentation"><path d="${config.help.icon}" style="fill: currentcolor;"></path></svg></mwc-icon-button>`,
                `<style slot="toolbar">${Style3.cssText}</style>`
            ].join('')
            this.innerHTML = defaultButtons + this.innerHTML
        }

        for (let node of this.toolbarSlot.assignedNodes()) {
            if (this[node.getAttribute('action') + 'Handler']) node.addEventListener('click', () => this[node.getAttribute('action') + 'Handler'](node))
        }

        if (typeof this.getAttribute('value') === 'string') this.value = this.getAttribute('value')
        if (typeof this.getAttribute('readonly') === 'string') this.readonly = true
    }

    undoHandler() {
        if (typeof this.readonly !== 'string') {
            const txtundo = this.txtHistory.undo()
            if (txtundo !== undefined) {
                this.textArea.value = txtundo
                this.previewUpdate()
            }
        }
    }

    redoHandler() {
        if (typeof this.readonly !== 'string') {
            const txtredo = this.txtHistory.redo()
            if (txtredo !== undefined) {
                this.textArea.value = txtredo
                this.previewUpdate()
            }
        }
    }
    
    formatHandler(node) {
        if (typeof this.readonly !== 'string') {
            const selstart = this.textArea.selectionStart
            const selend = this.textArea.selectionEnd
            const txt = this.textArea.value
            const starttoken = (node.getAttribute('starttoken') || '').replace(/\\n/g, '\n')
            const middletoken = (node.getAttribute('middletoken')|| '').replace(/\\n/g, '\n')
            const endtoken = (node.getAttribute('endtoken') || '').replace(/\\n/g, '\n')
            const dontformatselection = node.getAttribute('dontformatselection')
            if (selstart === selend || typeof dontformatselection === 'string') {
                const before = txt.substring(0, selend)
                const after = txt.substring(selend, txt.length)
                this.textArea.value = before + starttoken + middletoken + endtoken + after
                this.textArea.selectionStart = selend + starttoken.length
                this.textArea.selectionEnd = this.textArea.selectionStart + middletoken.length
                this.textArea.focus()
                this.previewUpdateAndRecord()
            } else {
                const before = txt.substring(0, selstart)
                const text = txt.substring(selstart, selend)
                const after = txt.substring(selend, txt.length)
                this.textArea.value = before + starttoken + text + endtoken + after
                this.textArea.selectionStart = this.textArea.selectionEnd = selstart + starttoken.length + text.length
                this.textArea.focus()
                this.previewUpdateAndRecord()
            }
        }
    }

    headingHandler() {
        if (typeof this.readonly !== 'string') {
            const selstart = this.textArea.selectionStart
            const selend = this.textArea.selectionEnd
            const txt = this.textArea.value
            if (selstart === selend) {
                const before = txt.substring(0, selstart)
                const after = txt.substring(selend, txt.length)
                if (/(\n)[\#]{1,5}( )$/.test(before)) {
                    before = before.substring(0, selstart - 1)
                    this.textArea.value = before + '# ' + after
                    this.textArea.selectionStart = this.textArea.selectionEnd = selstart + 1
                    this.textArea.focus()
                    this.previewUpdateAndRecord()
                } else if (/(\n)[\#]{6,}( )$/.test(before)) {
                    before = before.replace(/(\n)[\#]{6,}( )$/, '')
                    this.textArea.value = before + '\n# ' + after
                    this.textArea.selectionStart = this.textArea.selectionEnd = before.length + 3
                    this.textArea.focus()
                    this.previewUpdateAndRecord()
                } else {
                    this.textArea.value = before + '\n# ' + after
                    this.textArea.selectionStart = this.textArea.selectionEnd = selstart + 3
                    this.textArea.focus()
                    this.previewUpdateAndRecord()
                }
            } else {
                const before = txt.substring(0, selstart)
                const text = txt.substring(selstart, selend)
                const after = txt.substring(selend, txt.length)
                this.textArea.value = before + '\n# ' + text + '\n' + after
                this.textArea.selectionStart = this.textArea.selectionEnd = selstart + text.length + 3
                this.textArea.focus()
                this.previewUpdateAndRecord()
            }
        }
    }

    quoteHandler() {
        if (typeof this.readonly !== 'string') {
            const selstart = this.textArea.selectionStart
            const selend = this.textArea.selectionEnd
            const txt = this.textArea.value
            const before = txt.substring(0, selstart)
            const after = txt.substring(selend, txt.length)
            if (selstart === selend) {
                if (/(^>+( )$)|(\n>+( )$)/.test(before)) {
                    before = before.substring(0, selstart - 1)
                    this.textArea.value = before + '> ' + after
                    this.textArea.selectionStart = this.textArea.selectionEnd = selstart + 1
                    this.textArea.focus()
                    this.previewUpdateAndRecord()
                } else {
                    const text = txt.substring(selstart - 2, selstart).replace(/\n\n/, '').replace(/^\n/, '').replace(/[^\n]\n/, '\n').replace(/([^\n]|\n)?[^\n]/, '\n\n') + '> '
                    this.textArea.value = before + text + after
                    this.textArea.selectionStart = this.textArea.selectionEnd = selstart + text.length
                    this.textArea.focus()
                    this.previewUpdateAndRecord()
                }
            } else {
                const text = txt.substring(selstart - 2, selstart).replace(/\n\n/, '').replace(/^\n/, '').replace(/[^\n]\n/, '\n').replace(/([^\n]|\n)?[^\n]/, '\n\n') +
                txt.substring(selstart, selend) +
                txt.substring(selend, selend + 2).replace(/\n\n/, '').replace(/\n[^\n]?/, '\n').replace(/[^\n]([^\n]|\n)?/, '\n\n')
                text = text.replace(/^(>)/gm, '>$1').replace(/^([^\>|^\n])/gm, '> $1')
                this.textArea.value = before + text + after
                this.textArea.selectionStart = this.textArea.selectionEnd = selstart + text.length
                this.textArea.focus()
                this.previewUpdateAndRecord()
            }
        }
    }

    resizeHandler() {
        if (this.split.getSizes()[0] > 50) {
            this.split.setSizes([50, 50])
        } else if (this.split.getSizes()[0] <= 50 && this.split.getSizes()[0] > 0) {
            this.split.setSizes([0, 100])
        } else if (this.split.getSizes()[0] === 0) {
            this.split.setSizes([100, 0])
        }
    }

    templateHandler(node) {
        const text = (node.getAttribute('text') || '').replace(/\\n/g, '\n')
        const editable = node.getAttribute('editable')
        if (this.textArea.value !== text) {
            if (typeof editable !== 'string') this.readonly = true
            this.textArea.value = text
            this.previewUpdateAndRecord()
            this.split.setSizes([50, 50])
        } else {
            this.readonly = false
            this.undoHandler()
        }
    }
            
    handleTextAreaInput() {
        if ((this.textArea.value.length - this.txtHistory.current().length) > 1 || (this.textArea.value.length - this.txtHistory.current().length) < -1) {
            this.txtHistory.record(this.textArea.value, true)
        } else {
            this.txtHistory.record(this.textArea.value)
        }
        this.previewUpdate()
    }

    renderMarkdown = (val) => renderMarkdown(val)

    previewUpdate = () => {
        this.previewElement.innerHTML = this.renderMarkdown(this.textArea.value)
    }
    
    previewUpdateAndRecord = () => {
        this.txtHistory.record(this.textArea.value, true)
        this.previewElement.innerHTML = this.renderMarkdown(this.textArea.value)
    }

    get value () {
        return this.textArea.value
    }

    set value (val) {
        this.textArea.value = val
        this.previewUpdateAndRecord()
    }

    get readonly () {
        return this.textArea.getAttribute('readonly')
    }

    set readonly (val) {
        if (val) this.textArea.setAttribute('readonly', '')
        else this.textArea.removeAttribute('readonly')
    }
}

window.customElements.define('mde-ultimate', MDEUltimate)