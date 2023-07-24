import { useSelector } from "react-redux";
import store from "..";

export const useSidebarType = () =>
  useSelector((state) => state.app.sidebarType);
export const useLanguage = () => useSelector((state) => state.app.language);
export const useTheme = () => useSelector((state) => state.app.theme);
export const useLoading = () => useSelector((state) => state.app.loading);
export const useMobileBar = () => useSelector((state) => state.app.mobileBar);