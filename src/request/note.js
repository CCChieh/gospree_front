import http from './http';

function getList(page) {
  return http.get('/note/list', {
    page,
  });
}

export default {
  getList,
};
