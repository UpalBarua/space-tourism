const tabList = document.querySelector('[role="tablist"]')
const tabs = tabList.querySelectorAll('[role="tab"]')

let tabFocus = 0

tabList.addEventListener("keydown", (e) => {
    console.log(e.keyCode)
})