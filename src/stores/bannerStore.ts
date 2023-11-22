import { persistentMap } from "@nanostores/persistent";

export type SettingsValue = {
  banner: "show" | "hide";
};

export const settings = persistentMap<SettingsValue>("settings:", {
  banner: "show",
});
