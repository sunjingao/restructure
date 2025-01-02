function getPublicAssetURL(url) {
  if (import.meta.env.VITE_ENV === 'dev') {
    return location.href.slice(0, location.href.indexOf('#')) + url;
  } else {
    return location.href.slice(0, location.href.indexOf('/index.html')) + url;
  }
}

export { getPublicAssetURL };
