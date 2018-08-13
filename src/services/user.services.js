export function getUser() {

  return fetch('http://www.mocky.io/v2/5b6d5985330000ad1ea36d18')
    .then(response => response.json())

}

export function getNotifications() {

  return fetch('http://www.mocky.io/v2/5b6c3ea22f00008500893c6f')
    .then(response => response.json())

}



