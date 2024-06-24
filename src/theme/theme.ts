import { Interactiveness, PaletteMode, createTheme } from '@mui/material';
import { components } from './components';
import { darkModePalette, lightModePalette } from './palette';
import { typography } from './typography';

export const drawerWidth = 240;

export const createCustomTheme = (mode: PaletteMode, brandPalette?: Interactiveness) => {
  const basePalette = mode == 'light' ? lightModePalette : darkModePalette;
  const themePalette = structuredClone(basePalette);

  if (brandPalette && themePalette.background) {
    themePalette.background.brand = brandPalette;
  }
  return createTheme({
    palette: {
      mode,
      ...themePalette
    },
    components,
    typography: typography(mode),
    breakpoints: {}
  });
};
