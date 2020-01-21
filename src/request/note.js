import http from './http';

function getList(page, handle) {
  http.get('/note/list', {
    page,
  }).then(data => handle(data));
}

export default {
  getList,
};
