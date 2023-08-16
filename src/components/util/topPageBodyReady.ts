export function topPageBodyReady(isTopPage: boolean){
  if(isTopPage) {
    if(document.body.classList.contains('is-ready')) {
      document.body.classList.remove('is-ready');
      document.body.classList.add('is-ready');
    } else {
      document.body.classList.add('is-ready');
    }
  } else {
    document.body.classList.remove('is-ready');
  }
}