import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter'
import { Experimental_CssVarsProvider as CssVarsProvider } from '@mui/material/styles';
import InitColorSchemeScript from '@mui/material/InitColorSchemeScript';
import CssBaseline from '@mui/material/CssBaseline';
import type { Metadata, Viewport } from "next";

import theme from '~/theme';
import AppBarNavigation from '~/components/AppBarNavigation';
import Footer from '~/components/Footer';

export const metadata: Metadata = {
  title: "HackYeah 24",
  description: "Created to hackathon HackYeah 24 application",
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AppRouterCacheProvider>
          <CssVarsProvider theme={theme} defaultMode="dark">
            <InitColorSchemeScript defaultMode="dark" />
            <CssBaseline />
            
            <AppBarNavigation />

              {children}

            <Footer />
          </CssVarsProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
