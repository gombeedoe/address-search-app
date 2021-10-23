import { SimpleGrid, Box, Text, Heading } from '@chakra-ui/react';
import { AdressResultType } from '../App';

// 住所のオブジェクトが要素の配列の型
type AdressResultsPropsType = {
  adressResults: AdressResultType[];
};

const AdressResults = ({ adressResults }: AdressResultsPropsType) => {
  const formatZipcode = (zipcode: string): string => {
    // 数字のみの郵便番号をハイフン付きに整形
    const zipcodeText = `${zipcode.substr(0, 3)}-${zipcode.substr(3)}`;
    return zipcodeText;
  };
  if (adressResults.length === 0) {
    // 住所の配列が空の場合は描画しない
    return null;
  }
  return (
    <>
      <Heading as="h2" fontSize="lg" py="10">
        〒{formatZipcode(adressResults[0].zipcode)}の検索結果
      </Heading>
      <SimpleGrid columns={2} spacing={5}>
        {adressResults.map((result: AdressResultType, index: number) => (
          <Box key={index} p="5" borderWidth="1px" borderRadius="lg">
            <Text fontSize="md">
              {result.kana1}&nbsp;
              {result.kana2}&nbsp;
              {result.kana3}
            </Text>
            <Text fontSize="xl">
              {result.address1}&nbsp;
              {result.address2}&nbsp;
              {result.address3}
            </Text>
          </Box>
        ))}
      </SimpleGrid>
    </>
  );
};

export default AdressResults;
