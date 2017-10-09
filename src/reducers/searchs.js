const initialState = {
  typeSearch: "all",
  searchKeyWord: ""
};
export const SEARCH = "SEARCH";
export function search(payload) {
  return {
    payload,
    type: SEARCH
  };
}
export default function Searchs(state = initialState, action) {
  switch (action.type) {
    case SEARCH:
      if (!action.payload) return initialState;
      if (Number(action.payload) - Number(action.payload) === 0)
        return {
          typeSearch: "id",
          searchKeyWord: action.payload
        };
      return {
        typeSearch: "text",
        searchKeyWord: action.payload
      };
  }
  return initialState;
}
