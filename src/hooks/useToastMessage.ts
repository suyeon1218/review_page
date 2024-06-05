import { UseToastOptions, useToast } from '@chakra-ui/react';

const useToastMessage = (
  description: string,
  status: 'info' | 'warning' | 'success' | 'error' | 'loading' | undefined
) => {
  const toast = useToast();
  const toastConfig: Omit<UseToastOptions, 'description'> = {
    duration: 4000,
    position: 'top',
    isClosable: true,
  };

  return () => {
    toast({
      ...toastConfig,
      status,
      description,
    });
  };
};

export default useToastMessage;
