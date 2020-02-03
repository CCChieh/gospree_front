function stamp2Date(time) {
  return new Date(time * 1000).toLocaleDateString();
}

function deBase64(str) {
  // 解码Base64
  let ret;
  if (str) {
    ret = decodeURIComponent(escape(window.atob(str)));
  }
  return ret;
}

function enBase64(str) {
  // 编码Base64
  let ret;
  if (str) {
    ret = window.btoa(unescape(encodeURIComponent(str)));
  }
  return ret;
}

export default {
  stamp2Date,
  deBase64,
  enBase64,
};
