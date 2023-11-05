import MobileBg from './assets/mobile/bg-image-daytime.webp';
import TabletBg from './assets/tablet/bg-image-daytime.webp';
import DesktopBg from './assets/desktop/bg-image-daytime.webp';

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
        mobileBg={MobileBg}
        desktopBg={DesktopBg}
        tabletBg={TabletBg}
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
