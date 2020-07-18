const { MDCRipple } = require('@material/ripple')
const {
    mdiUndo,
    mdiRedo,
    mdiFormatBold,
    mdiFormatItalic,
    mdiFormatUnderline,
    mdiFormatStrikethroughVariant,
    mdiFormatSuperscript,
    mdiFormatSubscript,
    mdiFormatHeaderPound, 
    mdiFormatQuoteOpen,
    mdiAlert,
    mdiCodeTags,
    mdiCodeBraces,
    mdiFormatListNumbered,
    mdiFormatListBulleted,
    mdiTable,
    mdiLinkVariant,
    mdiImage,
    mdiArrowLeftRightBold, 
    mdiHelpCircle
} = require('@mdi/js')
module.exports = mdeUltimate => {
    const defaultButtonsObj = [
        {
            name: "undo",
            html: `<button class="mdc-icon-button"><svg viewBox="0 0 24 24" role="presentation"><path d="${mdiUndo}" style="fill: currentcolor;"></path></svg></button>`,
            onLoad: element => new MDCRipple(element.firstChild).unbounded = true,
            action: undo
        },
        {
            name: "redo",
            html: `<button class="mdc-icon-button"><svg viewBox="0 0 24 24" role="presentation"><path d="${mdiRedo}" style="fill: currentcolor;"></path></svg></button>`,
            onLoad: element => new MDCRipple(element.firstChild).unbounded = true,
            action: redo
        },
        {
            type: "separator"
        },
        {
            name: "bold",
            html: `<button class="mdc-icon-button"><svg viewBox="0 0 24 24" role="presentation"><path d="${mdiFormatBold}" style="fill: currentcolor;"></path></svg></button>`,
            onLoad: element => new MDCRipple(element.firstChild).unbounded = true,
            action: bold
        },
        {
            name: "italic",
            html: `<button class="mdc-icon-button"><svg viewBox="0 0 24 24" role="presentation"><path d="${mdiFormatItalic}" style="fill: currentcolor;"></path></svg></button>`,
            onLoad: element => new MDCRipple(element.firstChild).unbounded = true,
            action: italic
        },
        {
            name: "underline",
            html: `<button class="mdc-icon-button"><svg viewBox="0 0 24 24" role="presentation"><path d="${mdiFormatUnderline}" style="fill: currentcolor;"></path></svg></button>`,
            onLoad: element => new MDCRipple(element.firstChild).unbounded = true,
            action: underline
        },
        {
            name: "strikethrough",
            html: `<button class="mdc-icon-button"><svg viewBox="0 0 24 24" role="presentation"><path d="${mdiFormatStrikethroughVariant}" style="fill: currentcolor;"></path></svg></button>`,
            onLoad: element => new MDCRipple(element.firstChild).unbounded = true,
            action: strikethrough
        },
        {
            name: "supscript",
            html: `<button class="mdc-icon-button"><svg viewBox="0 0 24 24" role="presentation"><path d="${mdiFormatSuperscript}" style="fill: currentcolor;"></path></svg></button>`,
            onLoad: element => new MDCRipple(element.firstChild).unbounded = true,
            action: supscript
        },
        {
            name: "subscript",
            html: `<button class="mdc-icon-button"><svg viewBox="0 0 24 24" role="presentation"><path d="${mdiFormatSubscript}" style="fill: currentcolor;"></path></svg></button>`,
            onLoad: element => new MDCRipple(element.firstChild).unbounded = true,
            action: subscript
        },
        {
            type: "separator"
        },
        {
            name: "heading",
            html: `<button class="mdc-icon-button"><svg viewBox="0 0 24 24" role="presentation"><path d="${mdiFormatHeaderPound}" style="fill: currentcolor;"></path></svg></button>`,
            onLoad: element => new MDCRipple(element.firstChild).unbounded = true,
            action: heading
        },
        {
            name: "quote",
            html: `<button class="mdc-icon-button"><svg viewBox="0 0 24 24" role="presentation"><path d="${mdiFormatQuoteOpen}" style="fill: currentcolor;"></path></svg></button>`,
            onLoad: element => new MDCRipple(element.firstChild).unbounded = true,
            action: quote
        },
        {
            name: "spoiler",
            html: `<button class="mdc-icon-button"><svg viewBox="0 0 24 24" role="presentation"><path d="${mdiAlert}" style="fill: currentcolor;"></path></svg></button>`,
            onLoad: element => new MDCRipple(element.firstChild).unbounded = true,
            action: spoiler
        },
        {
            name: "inline code",
            html: `<button class="mdc-icon-button"><svg viewBox="0 0 24 24" role="presentation"><path d="${mdiCodeTags}" style="fill: currentcolor;"></path></svg></button>`,
            onLoad: element => new MDCRipple(element.firstChild).unbounded = true,
            action: inlineCode
        },
        {
            name: "code block",
            html: `<button class="mdc-icon-button"><svg viewBox="0 0 24 24" role="presentation"><path d="${mdiCodeBraces}" style="fill: currentcolor;"></path></svg></button>`,
            onLoad: element => new MDCRipple(element.firstChild).unbounded = true,
            action: codeBlock
        },
        {
            type: "separator"
        },
        {
            name: "ordered list",
            html: `<button class="mdc-icon-button"><svg viewBox="0 0 24 24" role="presentation"><path d="${mdiFormatListNumbered}" style="fill: currentcolor;"></path></svg></button>`,
            onLoad: element => new MDCRipple(element.firstChild).unbounded = true,
            action: orderedList
        },
        {
            name: "unordered list",
            html: `<button class="mdc-icon-button"><svg viewBox="0 0 24 24" role="presentation"><path d="${mdiFormatListBulleted}" style="fill: currentcolor;"></path></svg></button>`,
            onLoad: element => new MDCRipple(element.firstChild).unbounded = true,
            action: unorderedList
        },
        {
            name: "table",
            html: `<button class="mdc-icon-button"><svg viewBox="0 0 24 24" role="presentation"><path d="${mdiTable}" style="fill: currentcolor;"></path></svg></button>`,
            onLoad: element => new MDCRipple(element.firstChild).unbounded = true,
            action: table
        },
        {
            type: "separator"
        },
        {
            name: "link",
            html: `<button class="mdc-icon-button"><svg viewBox="0 0 24 24" role="presentation"><path d="${mdiLinkVariant}" style="fill: currentcolor;"></path></svg></button>`,
            onLoad: element => new MDCRipple(element.firstChild).unbounded = true,
            action: link
        },
        {
            name: "embed",
            html: `<button class="mdc-icon-button"><svg viewBox="0 0 24 24" role="presentation"><path d="${mdiImage}" style="fill: currentcolor;"></path></svg></button>`,
            onLoad: element => new MDCRipple(element.firstChild).unbounded = true,
            action: embed
        },
        {
            type: "separator"
        },
        {
            name: "resize",
            html: `<button class="mdc-icon-button"><svg viewBox="0 0 24 24" role="presentation"><path d="${mdiArrowLeftRightBold}" style="fill: currentcolor;"></path></svg></button>`,
            onLoad: element => new MDCRipple(element.firstChild).unbounded = true,
            action: resize
        },
        {
            name: "help",
            html: `<button class="mdc-icon-button"><svg viewBox="0 0 24 24" role="presentation"><path d="${mdiHelpCircle}" style="fill: currentcolor;"></path></svg></button>`,
            onLoad: element => new MDCRipple(element.firstChild).unbounded = true,
            action: help
        }
    ]
    function undo() {
        if (mdeUltimate.isHelp === false) {
            const txtundo = mdeUltimate.txtHistory.undo()
            if (txtundo !== undefined) {
                mdeUltimate.textArea.value = txtundo
                mdeUltimate.previewUpdate()
            }
        }
    }
    function redo() {
        if (mdeUltimate.isHelp === false) {
            const txtredo = mdeUltimate.txtHistory.redo()
            if (txtredo !== undefined) {
                mdeUltimate.textArea.value = txtredo
                mdeUltimate.previewUpdate()
            }
        }
    }
    function bold() {
        if (mdeUltimate.isHelp === false) {
            var selstart = mdeUltimate.textArea.selectionStart
            var selend = mdeUltimate.textArea.selectionEnd
            var txt = mdeUltimate.textArea.value
            if (selstart === selend) {
                var before = txt.substring(0, selstart)
                var after = txt.substring(selend, txt.length)
                mdeUltimate.textArea.value = before + '****' + after
                mdeUltimate.textArea.selectionStart = mdeUltimate.textArea.selectionEnd = selstart + 2
                mdeUltimate.textArea.focus()
                mdeUltimate.previewUpdateAndRecord()
            } else {
                var before = txt.substring(0, selstart)
                var text = txt.substring(selstart, selend)
                var after = txt.substring(selend, txt.length)
                mdeUltimate.textArea.value = before + '**' + text + '**' + after
                mdeUltimate.textArea.selectionStart = mdeUltimate.textArea.selectionEnd = selstart + text.length + 2
                mdeUltimate.textArea.focus()
                mdeUltimate.previewUpdateAndRecord()
            }
        }
    }
    function italic() {
        if (mdeUltimate.isHelp === false) {
            var selstart = mdeUltimate.textArea.selectionStart
            var selend = mdeUltimate.textArea.selectionEnd
            var txt = mdeUltimate.textArea.value
            if (selstart === selend) {
                var before = txt.substring(0, selstart)
                var after = txt.substring(selend, txt.length)
                mdeUltimate.textArea.value = before + '**' + after
                mdeUltimate.textArea.selectionStart = mdeUltimate.textArea.selectionEnd = selstart + 1
                mdeUltimate.textArea.focus()
                mdeUltimate.previewUpdateAndRecord()
            } else {
                var before = txt.substring(0, selstart)
                var text = txt.substring(selstart, selend)
                var after = txt.substring(selend, txt.length)
                mdeUltimate.textArea.value = before + '*' + text + '*' + after
                mdeUltimate.textArea.selectionStart = mdeUltimate.textArea.selectionEnd = selstart + text.length + 1
                mdeUltimate.textArea.focus()
                mdeUltimate.previewUpdateAndRecord()
            }
        }
    }
    function underline() {
        if (mdeUltimate.isHelp === false) {
            var selstart = mdeUltimate.textArea.selectionStart
            var selend = mdeUltimate.textArea.selectionEnd
            var txt = mdeUltimate.textArea.value
            if (selstart === selend) {
                var before = txt.substring(0, selstart)
                var after = txt.substring(selend, txt.length)
                mdeUltimate.textArea.value = before + '++++' + after
                mdeUltimate.textArea.selectionStart = mdeUltimate.textArea.selectionEnd = selstart + 2
                mdeUltimate.textArea.focus()
                mdeUltimate.previewUpdateAndRecord()
            } else {
                var before = txt.substring(0, selstart)
                var text = txt.substring(selstart, selend)
                var after = txt.substring(selend, txt.length)
                mdeUltimate.textArea.value = before + '++' + text + '++' + after
                mdeUltimate.textArea.selectionStart = mdeUltimate.textArea.selectionEnd = selstart + text.length + 2
                mdeUltimate.textArea.focus()
                mdeUltimate.previewUpdateAndRecord()
            }
        }
    }
    function strikethrough() {
        if (mdeUltimate.isHelp === false) {
            var selstart = mdeUltimate.textArea.selectionStart
            var selend = mdeUltimate.textArea.selectionEnd
            var txt = mdeUltimate.textArea.value
            if (selstart === selend) {
                var before = txt.substring(0, selstart)
                var after = txt.substring(selend, txt.length)
                mdeUltimate.textArea.value = before + '~~~~' + after
                mdeUltimate.textArea.selectionStart = mdeUltimate.textArea.selectionEnd = selstart + 2
                mdeUltimate.textArea.focus()
                mdeUltimate.previewUpdateAndRecord()
            } else {
                var before = txt.substring(0, selstart)
                var text = txt.substring(selstart, selend)
                var after = txt.substring(selend, txt.length)
                mdeUltimate.textArea.value = before + '~~' + text + '~~' + after
                mdeUltimate.textArea.selectionStart = mdeUltimate.textArea.selectionEnd = selstart + text.length + 2
                mdeUltimate.textArea.focus()
                mdeUltimate.previewUpdateAndRecord()
            }
        }
    }
    function supscript() {
        if (mdeUltimate.isHelp === false) {
            var selstart = mdeUltimate.textArea.selectionStart
            var selend = mdeUltimate.textArea.selectionEnd
            var txt = mdeUltimate.textArea.value
            if (selstart === selend) {
                var before = txt.substring(0, selstart)
                var after = txt.substring(selend, txt.length)
                mdeUltimate.textArea.value = before + '^()' + after
                mdeUltimate.textArea.selectionStart = mdeUltimate.textArea.selectionEnd = selstart + 2
                mdeUltimate.textArea.focus()
                mdeUltimate.previewUpdateAndRecord()
            } else {
                var before = txt.substring(0, selstart)
                var text = txt.substring(selstart, selend)
                var after = txt.substring(selend, txt.length)
                mdeUltimate.textArea.value = before + '^(' + text + ')' + after
                mdeUltimate.textArea.selectionStart = mdeUltimate.textArea.selectionEnd = selstart + text.length + 2
                mdeUltimate.textArea.focus()
                mdeUltimate.previewUpdateAndRecord()
            }
        }
    }
    function subscript() {
        if (mdeUltimate.isHelp === false) {
            var selstart = mdeUltimate.textArea.selectionStart
            var selend = mdeUltimate.textArea.selectionEnd
            var txt = mdeUltimate.textArea.value
            if (selstart === selend) {
                var before = txt.substring(0, selstart)
                var after = txt.substring(selend, txt.length)
                mdeUltimate.textArea.value = before + '~()' + after
                mdeUltimate.textArea.selectionStart = mdeUltimate.textArea.selectionEnd = selstart + 2
                mdeUltimate.textArea.focus()
                mdeUltimate.previewUpdateAndRecord()
            } else {
                var before = txt.substring(0, selstart)
                var text = txt.substring(selstart, selend)
                var after = txt.substring(selend, txt.length)
                mdeUltimate.textArea.value = before + '~(' + text + ')' + after
                mdeUltimate.textArea.selectionStart = mdeUltimate.textArea.selectionEnd = selstart + text.length + 2
                mdeUltimate.textArea.focus()
                mdeUltimate.previewUpdateAndRecord()
            }
        }
    }
    function heading() {
        if (mdeUltimate.isHelp === false) {
            var selstart = mdeUltimate.textArea.selectionStart
            var selend = mdeUltimate.textArea.selectionEnd
            var txt = mdeUltimate.textArea.value
            if (selstart === selend) {
                var before = txt.substring(0, selstart)
                var after = txt.substring(selend, txt.length)
                if (/(\n)[\#]{1,5}(\s)$/.test(before)) {
                    before = before.substring(0, selstart - 1)
                    mdeUltimate.textArea.value = before + '# ' + after
                    mdeUltimate.textArea.selectionStart = mdeUltimate.textArea.selectionEnd = selstart + 1
                    mdeUltimate.textArea.focus()
                    mdeUltimate.previewUpdateAndRecord()
                } else if (/(\n)[\#]{6,}(\s)$/.test(before)) {
                    before = before.replace(/(\n)[\#]{6,}(\s)$/, '')
                    mdeUltimate.textArea.value = before + '\n# ' + after
                    mdeUltimate.textArea.selectionStart = mdeUltimate.textArea.selectionEnd = before.length + 3
                    mdeUltimate.textArea.focus()
                    mdeUltimate.previewUpdateAndRecord()
                } else {
                    mdeUltimate.textArea.value = before + '\n# ' + after
                    mdeUltimate.textArea.selectionStart = mdeUltimate.textArea.selectionEnd = selstart + 3
                    mdeUltimate.textArea.focus()
                    mdeUltimate.previewUpdateAndRecord()
                }
            } else {
                var before = txt.substring(0, selstart)
                var text = txt.substring(selstart, selend)
                var after = txt.substring(selend, txt.length)
                mdeUltimate.textArea.value = before + '\n# ' + text + '\n' + after
                mdeUltimate.textArea.selectionStart = mdeUltimate.textArea.selectionEnd = selstart + text.length + 3
                mdeUltimate.textArea.focus()
                mdeUltimate.previewUpdateAndRecord()
            }
        }
    }
    function quote() {
        if (mdeUltimate.isHelp === false) {
            var selstart = mdeUltimate.textArea.selectionStart
            var selend = mdeUltimate.textArea.selectionEnd
            var txt = mdeUltimate.textArea.value
            if (selstart === selend) {
                var before = txt.substring(0, selstart)
                var after = txt.substring(selend, txt.length)
                if (/(\n)(>)+$/.test(before)) {
                    mdeUltimate.textArea.value = before + '>' + after
                    mdeUltimate.textArea.selectionStart = mdeUltimate.textArea.selectionEnd = selstart + 1
                    mdeUltimate.textArea.focus()
                    mdeUltimate.previewUpdateAndRecord()
                } else {
                    mdeUltimate.textArea.value = before + '\n>' + after
                    mdeUltimate.textArea.selectionStart = mdeUltimate.textArea.selectionEnd = selstart + 2
                    mdeUltimate.textArea.focus()
                    mdeUltimate.previewUpdateAndRecord()
                }
            } else {
                var before = txt.substring(0, selstart)
                var text = txt.substring(selstart, selend)
                var after = txt.substring(selend, txt.length)
                mdeUltimate.textArea.value = before + '\n>' + text + '\n\n' + after
                mdeUltimate.textArea.selectionStart = mdeUltimate.textArea.selectionEnd = selstart + text.length + 2
                mdeUltimate.textArea.focus();
                mdeUltimate.previewUpdateAndRecord()
            }
        }
    }
    function spoiler() {
        if (mdeUltimate.isHelp === false) {
            var selstart = mdeUltimate.textArea.selectionStart
            var selend = mdeUltimate.textArea.selectionEnd
            var txt = mdeUltimate.textArea.value
            if (selstart === selend) {
                var before = txt.substring(0, selstart)
                var after = txt.substring(selend, txt.length)
                mdeUltimate.textArea.value = before + '>!!<' + after
                mdeUltimate.textArea.selectionStart = mdeUltimate.textArea.selectionEnd = selstart + 2
                mdeUltimate.textArea.focus()
                mdeUltimate.previewUpdateAndRecord()
            } else {
                var before = txt.substring(0, selstart)
                var text = txt.substring(selstart, selend)
                var after = txt.substring(selend, txt.length)
                mdeUltimate.textArea.value = before + '>!' + text + '!<' + after
                mdeUltimate.textArea.selectionStart = mdeUltimate.textArea.selectionEnd = selstart + text.length + 2
                mdeUltimate.textArea.focus()
                mdeUltimate.previewUpdateAndRecord()
            }
        }
    }
    function inlineCode() {
        if (mdeUltimate.isHelp === false) {
            var selstart = mdeUltimate.textArea.selectionStart
            var selend = mdeUltimate.textArea.selectionEnd
            var txt = mdeUltimate.textArea.value
            if (selstart === selend) {
                var before = txt.substring(0, selstart)
                var after = txt.substring(selend, txt.length)
                mdeUltimate.textArea.value = before + '``' + after
                mdeUltimate.textArea.selectionStart = mdeUltimate.textArea.selectionEnd = selstart + 1
                mdeUltimate.textArea.focus()
                mdeUltimate.previewUpdateAndRecord()
            } else {
                var before = txt.substring(0, selstart)
                var text = txt.substring(selstart, selend)
                var after = txt.substring(selend, txt.length)
                mdeUltimate.textArea.value = before + '`' + text + '`' + after
                mdeUltimate.textArea.selectionStart = mdeUltimate.textArea.selectionEnd = selstart + text.length + 1
                mdeUltimate.textArea.focus()
                mdeUltimate.previewUpdateAndRecord()
            }
        }
    }
    function codeBlock() {
        if (mdeUltimate.isHelp === false) {
            var selstart = mdeUltimate.textArea.selectionStart
            var selend = mdeUltimate.textArea.selectionEnd
            var txt = mdeUltimate.textArea.value
            if (selstart === selend) {
                var before = txt.substring(0, selstart)
                var after = txt.substring(selend, txt.length)
                mdeUltimate.textArea.value = before + '\n```lang\n\n```\n' + after
                mdeUltimate.textArea.selectionStart = mdeUltimate.textArea.selectionEnd = selstart + 9
                mdeUltimate.textArea.focus()
                mdeUltimate.previewUpdateAndRecord()
            } else {
                var before = txt.substring(0, selstart)
                var text = txt.substring(selstart, selend)
                var after = txt.substring(selend, txt.length)
                mdeUltimate.textArea.value = before + '\n```lang\n' + text + '\n```\n' + after
                mdeUltimate.textArea.selectionStart = mdeUltimate.textArea.selectionEnd = selstart + text.length + 9
                mdeUltimate.textArea.focus()
                mdeUltimate.previewUpdateAndRecord()
            }
        }
    }
    function orderedList() {
        if (mdeUltimate.isHelp === false) {
            var selstart = mdeUltimate.textArea.selectionStart
            var selend = mdeUltimate.textArea.selectionEnd
            var txt = mdeUltimate.textArea.value
            if (selstart === selend) {
                var before = txt.substring(0, selstart)
                var after = txt.substring(selend, txt.length)
                mdeUltimate.textArea.value = before + '\n1. ' + after
                mdeUltimate.textArea.selectionStart = mdeUltimate.textArea.selectionEnd = selstart + 4
                mdeUltimate.textArea.focus()
                mdeUltimate.previewUpdateAndRecord()
            } else {
                var before = txt.substring(0, selstart)
                var text = txt.substring(selstart, selend)
                var after = txt.substring(selend, txt.length)
                mdeUltimate.textArea.value = before + '\n1. ' + text + '\n' + after
                mdeUltimate.textArea.selectionStart = mdeUltimate.textArea.selectionEnd = selstart + text.length + 4
                mdeUltimate.textArea.focus()
                mdeUltimate.previewUpdateAndRecord()
            }
        }
    }
    function unorderedList() {
        if (mdeUltimate.isHelp === false) {
            var selstart = mdeUltimate.textArea.selectionStart
            var selend = mdeUltimate.textArea.selectionEnd
            var txt = mdeUltimate.textArea.value
            if (selstart === selend) {
                var before = txt.substring(0, selstart)
                var after = txt.substring(selend, txt.length)
                mdeUltimate.textArea.value = before + '\n- ' + after
                mdeUltimate.textArea.selectionStart = mdeUltimate.textArea.selectionEnd = selstart + 3
                mdeUltimate.textArea.focus()
                mdeUltimate.previewUpdateAndRecord()
            } else {
                var before = txt.substring(0, selstart)
                var text = txt.substring(selstart, selend)
                var after = txt.substring(selend, txt.length)
                mdeUltimate.textArea.value = before + '\n- ' + text + '\n' + after
                mdeUltimate.textArea.selectionStart = mdeUltimate.textArea.selectionEnd = selstart + text.length + 3
                mdeUltimate.textArea.focus()
                mdeUltimate.previewUpdateAndRecord()
            }
        }
    }
    function table() {
        if (mdeUltimate.isHelp === false) {
            var selstart = mdeUltimate.textArea.selectionStart
            var selend = mdeUltimate.textArea.selectionEnd
            var txt = mdeUltimate.textArea.value
            if (selstart === selend) {
                var before = txt.substring(0, selstart)
                var after = txt.substring(selend, txt.length)
                mdeUltimate.textArea.value = before + '\n| 01 | 02 | 03 | 04 |\n|:--:|:--:|:--:|:--:|\n| 05 | 06 | 07 | 08 |\n| 09 | 10 | 11 | 12 |\n' + after
                mdeUltimate.textArea.selectionStart = selstart + 3
                mdeUltimate.textArea.selectionEnd = selstart + 5
                mdeUltimate.textArea.focus()
                mdeUltimate.previewUpdateAndRecord()
            } else {
                var before = txt.substring(0, selend)
                var after = txt.substring(selend, txt.length)
                mdeUltimate.textArea.value = before + '\n| 01 | 02 | 03 | 04 |\n|:--:|:--:|:--:|:--:|\n| 05 | 06 | 07 | 08 |\n| 09 | 10 | 11 | 12 |\n' + after
                mdeUltimate.textArea.selectionStart = selend + 3
                mdeUltimate.textArea.selectionEnd = selend + 5
                mdeUltimate.textArea.focus()
                mdeUltimate.previewUpdateAndRecord()
            }
        }
    }
    function link() {
        if (mdeUltimate.isHelp === false) {
            var selstart = mdeUltimate.textArea.selectionStart
            var selend = mdeUltimate.textArea.selectionEnd
            var txt = mdeUltimate.textArea.value
            if (selstart === selend) {
                var before = txt.substring(0, selstart)
                var after = txt.substring(selend, txt.length)
                mdeUltimate.textArea.value = before + '[link](https://www.example.com "link")' + after
                mdeUltimate.textArea.selectionStart = selstart + 7
                mdeUltimate.textArea.selectionEnd = selstart + 30
                mdeUltimate.textArea.focus()
                mdeUltimate.previewUpdateAndRecord()
            } else {
                var before = txt.substring(0, selstart)
                var text = txt.substring(selstart, selend)
                var after = txt.substring(selend, txt.length)
                mdeUltimate.textArea.value = before + '[' + text + '](https://www.example.com "link")' + after
                mdeUltimate.textArea.selectionStart = selstart + text.length + 3
                mdeUltimate.textArea.selectionEnd = selstart + text.length + 26
                mdeUltimate.textArea.focus()
                mdeUltimate.previewUpdateAndRecord()
            }
        }
    }
    function embed() {
        if (mdeUltimate.isHelp === false) {
            var selstart = mdeUltimate.textArea.selectionStart
            var selend = mdeUltimate.textArea.selectionEnd
            var txt = mdeUltimate.textArea.value
            if (selstart === selend) {
                var before = txt.substring(0, selstart)
                var after = txt.substring(selend, txt.length)
                mdeUltimate.textArea.value = before + '![embed](https://www.example.com "embed")' + after
                mdeUltimate.textArea.selectionStart = selstart + 9
                mdeUltimate.textArea.selectionEnd = selstart + 32
                mdeUltimate.textArea.focus()
                mdeUltimate.previewUpdateAndRecord()
            } else {
                var before = txt.substring(0, selstart)
                var text = txt.substring(selstart, selend)
                var after = txt.substring(selend, txt.length)
                mdeUltimate.textArea.value = before + '![' + text + '](https://www.example.com "embed")' + after
                mdeUltimate.textArea.selectionStart = selstart + text.length + 4
                mdeUltimate.textArea.selectionEnd = selstart + text.length + 27
                mdeUltimate.textArea.focus()
                mdeUltimate.previewUpdateAndRecord()
            }
        }
    }
    function resize() {
        if (mdeUltimate.split.getSizes()[0] > 50) {
            mdeUltimate.split.setSizes([50, 50])
        } else if (mdeUltimate.split.getSizes()[0] <= 50 && mdeUltimate.split.getSizes()[0] > 2) {
            mdeUltimate.split.setSizes([0, 100])
        } else if (mdeUltimate.split.getSizes()[0] <= 2) {
            mdeUltimate.split.setSizes([100, 0])
        }
    }
    function help() {
        if (mdeUltimate.isHelp === false) {
            if (mdeUltimate.textArea.value !== null) mdeUltimate.txtBackup = mdeUltimate.textArea.value
            var helptxt = "***\n\n# [MDE Ultimate](https://github.com/iMrDJAi/MDE-Ultimate \"Project Link\")\n\n**MDE Ultimate** is an open source, simple, easy to use and fully featured markdown editor built for the web, powered by cool libraries, and made with Material Design!\n\n----\n\n##++Markdown Guide:++\n\n>**Bold**\n>\n>*Italic*\n>\n>++Underline++\n>\n>~~Strickthrough~~\n>\n> Spoiler => >!**not a real spoiler <3**!<\n>\n> [Link](https://github.com/iMrDJAi \"My Github\")\n>\n> Reddit links /r/DZGC r/DZGC /u/Mr_DJA u/Mr_DJA\n>\n> ++\\*\\*Escaping**+\\+\n\n> Text^(*super script*) more text ^(nested [links](#) ++can++ also work)\n>\n> H^+ 4^`55` big^**small** ^[links with spaces are supported](# \"😀\")\n> \n> Text~(*sub script*) H~(2)O ~(nested [links](#) ++are supported++)\n>\n> H~2 big~`small` ~[you can use spaces here!](# \"yay!!!\")\n\n>#H1\n>## H2\n>###  H3\n>####H4\n>##### H5\n>###### H6\n\n>> Quote\n>>> Nested \n> > > Quote\n>> .........\n>>\n>> .........\n\n>`Inline code. ~~you can't format text here~~`\n>\n>```js\n>//code block\n>code(\"block\");\n>function code(block) {\n>    console.log(`code ${block}`);\n>}\n>```\n\n> Ordered list\n> 1. one.\n> 1. two.\n> 2. three.\n> 13. four.\n> 08. five.\n> 2002. six.\n\n> Unordered list\n> - foo.\n> - doo.\n> - bar.\n> - baz.\n\n> Table\n> | 01 | 02 | 03 | 04 |\n> |:---:|:---:|:----:|:----:|\n> | 05 | 06 | 07 | 08 |\n> | 09 | 10 | 11 | 12 |\n\n> Image ![](https://cdn.discordapp.com/attachments/574978692527161345/692796818165071972/ezgif-6-8a32860f90c7.gif \"lol\")\n>\n> ![image](https://cdn.discordapp.com/attachments/574978692527161345/692795097477021806/DaWae.gif)\n>\n> Video\n> ![video](https://cdn.discordapp.com/attachments/574978692527161345/679098318487420988/vid.mp4)\n>\n> Audio\n> ![audio](https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview118/v4/df/f2/e9/dff2e949-68a6-fe20-bc23-56659e39ecb0/mzaf_1519587992145598191.plus.aac.p.m4a)\n>\n> Youtube video\n> ![youtube video](https://www.youtube.com/watch?v=EHS2Pu_lbvc)\n>\n> Spotify embed\n> ![image](https://open.spotify.com/track/73SpzrcaHk0RQPFP73vqVR)\n>\n> Anything else\n>\n> ![example](https://example.com)"
            mdeUltimate.textArea.value = helptxt
            mdeUltimate.isHelp = true
            mdeUltimate.textArea.readOnly = true
            mdeUltimate.split.setSizes([50, 50])
        } else if (mdeUltimate.isHelp === true) {
            mdeUltimate.textArea.value = mdeUltimate.txtBackup
            mdeUltimate.isHelp = false
            mdeUltimate.textArea.readOnly = false
        }
        mdeUltimate.previewUpdate()
    }
    return defaultButtonsObj
}