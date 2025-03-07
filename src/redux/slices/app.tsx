import { dispatch } from "../store.tsx";
import { slice } from "../rootReducer.tsx";

//استفاده از Thunk  برای dispatch کردن اکشن ها به صورت async
export function ToggleSidebar() {
  return async () => {
    dispatch(slice.actions.toggleSidebar());
  };
}

export function UpdateSidebarType(type) {
  return async () => {
    dispatch(slice.actions.updateSidebarType(type));
  };
}
