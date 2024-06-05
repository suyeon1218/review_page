import { ChakraProvider } from '@chakra-ui/react';
import { QueryClientProvider } from '@tanstack/react-query';
import { StrictMode, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { queryClient } from './api';
import App from './App';
import '~/styles/main.css';
import { Loading } from './components';
import store from './store';
import { theme } from './styles/theme';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ChakraProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <Suspense fallback={<Loading />}>
            <App />
          </Suspense>
        </Provider>
      </QueryClientProvider>
    </ChakraProvider>
  </StrictMode>
);
