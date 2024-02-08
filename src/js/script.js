const parseUrl = function (url) {
  const parsedUrl = new URL(url);

  return {
    href: parsedUrl.href,
    protocol: parsedUrl.protocol,
    host: parsedUrl.host,
    hostname: parsedUrl.hostname,
    path: parsedUrl.pathname,
  };
};
const url = 'https://example.com:8080/path/name?query=123#hash';

console.log(parseUrl(url));
