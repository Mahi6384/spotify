export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  // token:
  //   "BQCTALdnerkQ78elqlCGLUSgvcNczrMR-JO7CKKVZjwbH-o79eCGGp-DcDAxIgPxAJcGkuggyUt3otN9PjoI2JC0TDQS1u5EiSmWa2fm06P96AY7pyk5hG4VUygCcYDaeLsKTpAbRC2NFwvLAIEJ9I3eyvSiJ2pWhRUKJUYrGR9UZEuqtU1GZDLjt7vFtGq0NoVTxyVqawl8ALRIs5ZA",
};

const reducer = (state, action) => {
  console.log(action);

  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };
    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };
    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };
    default:
      return state;
  }
};
export default reducer;
