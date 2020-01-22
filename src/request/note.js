import http from './http';

function getList(page, handle, handleErr) {
  http.get('/note/list', {
    page,
  }).then(handle)
    .catch(handleErr);
}

export default {
  getList,
};
