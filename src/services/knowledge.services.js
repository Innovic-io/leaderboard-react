export function getTabInfo() {

  return fetch('http://www.mocky.io/')
    .then(response => response.json())

}

export function getTabContent() {

  return fetch('http://www.mocky.io/v2/5b74208c3500006c02531dd2')
    .then(response => response.json())

}
