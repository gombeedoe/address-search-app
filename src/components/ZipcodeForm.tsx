import {
  FormControl,
  FormLabel,
  Input,
  Button,
  HStack,
} from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';

type ZipcodeFormPropsType = {
  zipcode: string;
  setZipcode: React.Dispatch<React.SetStateAction<string>>;
  getAdress: (e: React.FormEvent<HTMLFormElement>) => void;
};

const ZipcodeForm = ({
  zipcode,
  setZipcode,
  getAdress,
}: ZipcodeFormPropsType) => {
  return (
    <form onSubmit={getAdress}>
      <FormControl id="zipcode">
        <FormLabel>郵便番号を入力</FormLabel>
        <HStack spacing="24px">
          <Input
            type="text"
            name="zipcode"
            autoComplete="postal-code"
            placeholder="105-0011 または 1050011"
            value={zipcode}
            onChange={(e) => setZipcode(e.target.value)}
            w="400px"
          />
          <Button
            type="submit"
            leftIcon={<SearchIcon />}
            colorScheme="teal"
            variant="solid"
          >
            住所を検索
          </Button>
        </HStack>
      </FormControl>
    </form>
  );
};

export default ZipcodeForm;
