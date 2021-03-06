// queryString 字符串格式化
// ?username&zhinina&user=124

export const queryString = () => {
  let _queryString = {};
  const _query = window.location.search.substr(1);
  const _vars = _query.split('&');
  _vars.forEach((v, i) => {
      const _pair = v.split('=');
      if (!_queryString.hasOwnProperty(_pair[0])) {
          _queryString[_pair[0]] = decodeURIComponent(_pair[1]);
      } else if (typeof _queryString[_pair[0]] === 'string') {
          const _arr = [ _queryString[_pair[0]], decodeURIComponent(_pair[1])];
          _queryString[_pair[0]] = _arr;
      } else {
          _queryString[_pair[0]].push(decodeURIComponent(_pair[1]));
      }
  });
  return _queryString;
};

/**
 * search parmas function
 * @param {obj} url url
 */
export function param2Obj(url) {
	const search = url.split('?')[1]
	if (!search) {
		return {}
	}

	return JSON.parse(
		'{"' +
      decodeURIComponent(search)
        .replace(/"/g, '\\"')
        .replace(/&/g, '","')
        .replace(/=/g, '":"')
        .replace(/\+/g, ' ') +
    '"}'
	)
}
