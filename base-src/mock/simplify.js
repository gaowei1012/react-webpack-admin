
export default (mock, mocks) => mocks.forEach(item => Object.keys(item).forEach(key => {
  let method = key.split(' ')[0];
  let url = key.split(' ')[1];
  const delay = key.split(' ')[2] || 300;
  const result = item[key];

  method = `on${method.toLowerCase().replace(/( |^)[a-z]/g, (L) => L.toLowerCase())}`;

  if(url.startsWith('re:')) {
    url = new RegExp(url.replace('re:', ''));
  }

  if(typeof result === 'function') {
    mock[method](url).reply(result);
  } else {
    mock[method](url).reply(() => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve([200, result])
        }, delay);
      })
    })
  }
}))
