export default function ({ $axios, redirect, store}) {
  $axios.interceptors.request.use(request => {
    if (store.getters['isAuth'] && !request.headers.common['Authorization']) {
      const token = store.getters['token'];
      request.headers.common['Authorization'] = `Bearer ${token}`;
    }
    return request;
  })
}