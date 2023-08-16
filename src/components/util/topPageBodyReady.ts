export function topPageBodyReady(isTopPage: boolean){
  if(isTopPage) {
    document.body.classList.add('is-ready');
  } else {
    document.body.classList.remove('is-ready');
  }
}