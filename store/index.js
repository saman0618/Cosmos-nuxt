// store/index.js
export const state = () => ({
    pageTitle: "Bosh sahifa",
  });
  
  export const mutations = {
    setPageTitle(state, title) {
      state.pageTitle = title;
    },
  };
  