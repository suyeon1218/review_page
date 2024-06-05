import { UseToastOptions, useToast } from '@chakra-ui/react';

const useToastMessage = () => {
  const toast = useToast();
  const toastConfig: Omit<UseToastOptions, 'description'> = {
    duration: 4000,
    position: 'top',
    isClosable: true,
  };

  const toastMessage = ({
    description,
    status,
  }: {
    description: string;
    status: 'info' | 'warning' | 'success' | 'error' | 'loading' | undefined;
  }) => {
    return toast({
      ...toastConfig,
      status,
      description,
    });
  };

  return toastMessage;
};

export default useToastMessage;
