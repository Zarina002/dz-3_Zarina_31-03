const phoneInput = document.querySelector('#phone_input')
const phoneCheck = document.querySelector('#phone_button')
const phoneResult = document.querySelector('#phone_result')

const regExp = /^\+996 \d{3} \d{2}-\d{2}-\d{2}$/

phoneCheck.onclick = () => {
    if (regExp.test(phoneInput.value)) {
        phoneResult.innerHTML = 'OK'
        phoneResult.style.color = 'green'
    } else {
        phoneResult.innerHTML = ' NOT OK'
        phoneResult.style.color = 'red'
    }
}



// TAB SLIDER

const tabsContent = document.querySelectorAll('.tab_content_block')
const tabsParent = document.querySelector('.tab_content_items')
const tabs = document.querySelectorAll('.tab_content_item')

let currentTabIndex = 0

const hideTabContent = () => {
    tabsContent.forEach((tabContent) => {
        tabContent.style.display = 'none'
    })
    tabs.forEach(tab => {
        tab.classList.remove('tab_content_item_active')
    })
}

const showTabsContent = (index) => {
    tabsContent[index].style.display = 'block'
    tabs[index].classList.add('tab_content_item_active')
}

const switchTabs = () => {
    hideTabContent()
    currentTabIndex = (currentTabIndex + 1) % tabs.length
    showTabsContent(currentTabIndex)
}


switchTabs()
setInterval(switchTabs, 3000)

tabsParent.onclick = (event) => {
    if (event.target.classList.contains('tab_content_item')) {
        tabs.forEach((tabElement, tabIndex) => {
            if (event.target === tabElement) {
                hideTabContent()
                showTabsContent(tabIndex)
                currentTabIndex = tabIndex
            }
        })
    }
}