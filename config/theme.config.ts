import { Theme, ThemeManager } from 'tailwindcss-theming/dist/api';

import { colors } from './colors.config';

const dark = new Theme().setName('dark').targetable().addColors({
  background: colors.black[800],
  link: colors.turquoise.DEFAULT,
  text: colors.gray[700],
  title: colors.white[900], // '=, gray[800]
});
const light = new Theme().setName('light').targetable().addColors({
  background: colors.white.DEFAULT,
  link: colors.blue.DEFAULT,
  text: colors.gray[100],
  title: colors.black.DEFAULT,
});
const themes = new ThemeManager()
  .setDefaultTheme(light)
  // .setDefaultLightTheme(light)
  .setDefaultDarkTheme(dark);

export default themes;
