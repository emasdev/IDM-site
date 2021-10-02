if (location.hostname === "localhost" || location.hostname === "127.0.0.1") {

}
else if (location.protocol !== 'https:') {
  location.replace(`https:${location.href.substring(location.protocol.length)}`);
}