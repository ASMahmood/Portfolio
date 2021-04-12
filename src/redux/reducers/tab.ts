export default function (state = 0, action: { type: string; payload: any }) {
  switch (action.type) {
    case "CHANGE_TAB":
      return action.payload;
    default:
      return state;
  }
}
