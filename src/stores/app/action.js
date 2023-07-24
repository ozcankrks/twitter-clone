import { _setLanguage, _setSidebarType, _setTheme, _setLoading, _setMobileBar } from ".";
import store from "..";

export const setTheme = (theme) => store.dispatch(_setTheme(theme));
export const setLanguage = (lang) => store.dispatch(_setLanguage(lang));
export const setSidebarType = (type) => store.dispatch(_setSidebarType(type));
export const setLoading = (load) => store.dispatch(_setLoading(load));
export const setMobileBar = (val) => store.dispatch(_setMobileBar(val));