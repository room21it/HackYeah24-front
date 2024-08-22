'use client'

import * as React from 'react';
import { useColorScheme } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import WbSunnyRoundedIcon from '@mui/icons-material/WbSunnyRounded';
import ModeNightRoundedIcon from '@mui/icons-material/ModeNightRounded';

function ToggleColorMode() {
  const { mode, setMode, darkColorScheme, lightColorScheme } = useColorScheme();

  return (
    <Box sx={{ maxWidth: '32px' }}>
      <Button
        variant="text"
        onClick={() => {
          if (mode === darkColorScheme) {
            setMode(lightColorScheme)
          } else {
            setMode(darkColorScheme)
          }
        }}
        size="small"
        aria-label="button to toggle theme"
        sx={{ minWidth: '32px', height: '32px', p: '4px' }}
      >
        {mode === 'dark' ? (
          <WbSunnyRoundedIcon fontSize="small" />
        ) : (
          <ModeNightRoundedIcon fontSize="small" />
        )}
      </Button>
    </Box>
  );
}

export default ToggleColorMode;
