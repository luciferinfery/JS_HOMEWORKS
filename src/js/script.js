const updateQueryString = (url, key, value) => {
  const parsedUrl = new URL(url);
  parsedUrl.searchParams.set(key, value);
  return parsedUrl.href;
};

console.log(
  updateQueryString(
    'https://example.com/search?q=query&sort=ascending&page=4',
    'q2',
    'reftb'
  )
);
