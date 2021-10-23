type FormErrorMessagePropsType = {
  message: string;
};

const FormErrorMessage = ({ message }: FormErrorMessagePropsType) => {
  return (
    <div>
      <p>{message}</p>
    </div>
  );
};

export default FormErrorMessage;
