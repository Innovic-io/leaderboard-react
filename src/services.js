export function getUser() {

  return fetch('http://www.mocky.io/v2/5b6bf15f2f00003700893a96')
    .then(response => response.json())

}

export function getNotifications() {

  return fetch('http://www.mocky.io/v2/5b6c3ea22f00008500893c6f')
    .then(response => response.json())

}



