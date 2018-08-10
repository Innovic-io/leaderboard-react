function getUser(url) {

  return fetch(url)
}

getUser('http://www.mocky.io/v2/5b6bf15f2f00003700893a96')
  .then(response => response.json())
  .then(data => {
    Object.assign({}, {
      name: data.name,
      avatar: data.avatar,
    })
  });

export default getUser();
