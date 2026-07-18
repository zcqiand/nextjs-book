type OptionsFlags<T> = {
  [K in keyof T]: boolean;
};

type FeatureFlags = {
  darkMode: string;
  notifications: string;
  autoSave: string;
};

type FeatureOptions = OptionsFlags<FeatureFlags>;
// { darkMode: boolean; notifications: boolean; autoSave: boolean }