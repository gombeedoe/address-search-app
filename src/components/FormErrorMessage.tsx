import { Alert, AlertIcon } from '@chakra-ui/react';

type FormErrorMessagePropsType = {
  message: string;
};

const FormErrorMessage = ({ message }: FormErrorMessagePropsType) => {
  return (
    <Alert status="warning">
      <AlertIcon />
      {message}
    </Alert>
  );
};

export default FormErrorMessage;
