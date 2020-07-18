const UndoRedojs = require('undoredo.js')
const Split = require('split.js/dist/split.min.js')
const renderMarkdown = require('imrdjai-mdr')
const defaultButtons = require('./defaultButtons')
const { mdiArrowLeftRightBold } = require('@mdi/js')
module.exports = class MDEUltimate {
    constructor(element, buttons, gutter) {
        //Get the textarea element
        if (element) {
            if (element instanceof HTMLElement && element.tagName === "TEXTAREA") {
                this.textArea = element
            } else if (typeof element === 'string') {
                const elm = document.querySelector(element)
                if (elm && elm.tagName === "TEXTAREA") {
                    this.textArea = elm
                } else {
                    console.error('[ERROR]: Invalid Argument: element. Required Argument: Textarea Element/A Valid Textarea Selector.')
                }
            } else {
                console.error('[ERROR]: Invalid Argument: element. Required Argument: Textarea Element/A Valid Textarea Selector.')
            }
        } else {
            console.error('[ERROR]: Missing Argument: element. Required Argument: Textarea Element/A Valid Textarea Selector.')
        }
        if (this.textArea) {
            //Use the default buttons if the user didn't customize them
            if (buttons) {
                if (typeof buttons === 'object') this.buttons = buttons(this)
                else {
                    console.error('[ERROR]: Invalid Optional Argument: buttons. Required Argument: A Valid Buttons Object.')
                    this.buttons = defaultButtons(this)
                }
            } else this.buttons = defaultButtons(this)
            //Use custom gutter
            if (gutter) {
                if (gutter instanceof HTMLElement) {
                    this.gutter = element
                } else if (typeof element === 'string') {
                    const elm = document.querySelector(gutter)
                    if (elm) {
                        this.gutter = elm
                    } else {
                        console.error('[ERROR]: Invalid Optional Argument: gutter. Required Argument: HTML Element/A Valid Element Selector.')
                    }
                } else {
                    console.error('[ERROR]: Invalid Optional Argument: gutter. Required Argument: HTML Element/A Valid Element Selector.')
                }
            }
            //Create the editor element
            this.mdeElement = document.createElement("div") //Create the div
            this.textArea.parentNode.insertBefore(this.mdeElement, this.textArea) //Insert the div before the textarea
            this.mdeElement.classList.add("mde-ultimate") //Add the editor css class
            //Create the toolbar element
            const toolbar = document.createElement("div")
            this.mdeElement.appendChild(toolbar)
            toolbar.classList.add("mde-ultimate-toolbar")
            //Working with the toolbar content
            for (let button of this.buttons) {
                if (button.type === 'separator') { //Create the separators
                    const separator = document.createElement("i")
                    separator.classList.add('mde-ultimate-separator')
                    toolbar.appendChild(separator)
                } else { //Create the buttons
                    const buttonContainer = document.createElement("div")
                    buttonContainer.innerHTML = button.html
                    toolbar.appendChild(buttonContainer)
                    button.onLoad(buttonContainer)
                    buttonContainer.addEventListener("click", () => {
                        button.action()
                    })
                }
            }
            //Create the body element
            const body = document.createElement("div")
            this.mdeElement.appendChild(body)
            body.classList.add("mde-ultimate-body")
            //Create the textarea container
            this.textAreaContainer = document.createElement("div")
            body.appendChild(this.textAreaContainer)
            this.textAreaContainer.classList.add("mde-ultimate-textarea-container")
            //Aappend the textarea
            this.textAreaContainer.appendChild(this.textArea)
            this.textArea.classList.add("mde-ultimate-textarea")
            //Create the preview element
            this.previewElement = document.createElement("div")
            body.appendChild(this.previewElement)
            this.previewElement.classList.add("mde-ultimate-preview")
            this.split = Split([this.textAreaContainer, this.previewElement], {
                sizes: [100, 0],
                minSize: [0, 0],
                gutter: () => {
                    if (this.gutter) return this.gutter;
                    else {
                        const gutter = document.createElement('div')
                        gutter.className = `mde-ultimate-gutter`
                        gutter.innerHTML = `<svg viewBox="0 0 24 24" role="presentation"><path d="${mdiArrowLeftRightBold}" style="fill: currentcolor;"></path></svg>`
                        return gutter
                    }
                },
                gutterSize: 25
            })
            this.txtHistory = new UndoRedojs(5)
            this.previewUpdate = () => {
                this.previewElement.innerHTML = renderMarkdown(this.textArea.value)
            }
            this.previewUpdateAndRecord = () => {
                this.txtHistory.record(this.textArea.value, true)
                this.previewElement.innerHTML = renderMarkdown(this.textArea.value)
            }
            //Textarea input event
            this.textArea.addEventListener('input', () => {
                if ((this.textArea.value.length - this.txtHistory.current().length) > 1 || (this.textArea.value.length - this.txtHistory.current().length) < -1) {
                    this.txtHistory.record(this.textArea.value, true)
                } else {
                    this.txtHistory.record(this.textArea.value)
                }
                this.previewUpdate()
            })
            //Note: some browsers will auto-fill the textarea again after reloading, this will catch that text
            setTimeout(() => {
                if (this.textArea.value) this.previewUpdateAndRecord()
            }, 100)
            this.isHelp = false
            this.txtBackup = ''
        }
    }
}