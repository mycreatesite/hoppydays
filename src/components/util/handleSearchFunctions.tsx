import type { NextRouter } from "next/router";

export const HandlePressSearchEnter = (router: NextRouter, e: React.KeyboardEvent<HTMLInputElement>) => {
  if (e.key === 'Enter') {
    router.push(`/recommend/search?keyword=${e.currentTarget?.value}`);
  }
}

export const HandleClickSearchButton = (router: NextRouter) => {
  const searchInput = document.getElementById('searchInput') as HTMLInputElement;
  router.push(`/recommend/search?keyword=${searchInput.value}`);
}