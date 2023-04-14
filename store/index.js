export const state = () => ({
  leftBarIsOpen: true,
  bannerIsOpen: false,
  rightBarIsOpen: true,
  searchValue: "",
});

export const mutations = {
  toggleLeftBar(state) {
    state.leftBarIsOpen = !state.leftBarIsOpen;
  },
  toggleRightBar(state) {
    state.rightBarIsOpen = !state.rightBarIsOpen;
  },
  setSearchValue(state, value) {
    state.searchValue = value;
  },
  toggleBanner(state) {
    state.bannerIsOpen = !state.bannerIsOpen;
  },
};
