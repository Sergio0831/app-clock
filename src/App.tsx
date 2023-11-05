import MobileBgDay from './assets/mobile/bg-image-daytime.webp';
import TabletBgDay from './assets/tablet/bg-image-daytime.webp';
import DesktopBgDay from './assets/desktop/bg-image-daytime.webp';
import MobileBgNight from './assets/mobile/bg-image-nighttime.webp';
import TabletBgNight from './assets/tablet/bg-image-nighttime.webp';
import DesktopBgNight from './assets/desktop/bg-image-nighttime.webp';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import BgImage from './components/BgImage';
import './App.css';
import RandomQuote from './components/RandomQuote';
import Time from './components/Time';
import LocationInfo from './components/LocationInfo';
import { AppWrapper } from './components/AppWrapper';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BgImage
        mobileBgDay={MobileBgDay}
        desktopBgDay={DesktopBgDay}
        tabletBgDay={TabletBgDay}
        mobileBgNight={MobileBgNight}
        desktopBgNight={DesktopBgNight}
        tabletBgNight={TabletBgNight}
        alt='Daytime'
      />
      <AppWrapper>
        <RandomQuote />
        <Time />
        <LocationInfo />
      </AppWrapper>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
