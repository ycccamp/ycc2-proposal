import 'whatwg-fetch'

function wrapTable() {
  const tables = [...document.querySelectorAll('table')]

  tables.forEach(table => {
    const wrapper = document.createElement('div')
    wrapper.classList.add('table-container')
    table.parentNode.insertBefore(wrapper, table)
    wrapper.appendChild(table)
  })
}

async function onReady() {
  wrapTable()
}

document.addEventListener('DOMContentLoaded', onReady)
