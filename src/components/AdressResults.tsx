import { AdressResultType } from '../App';

type AdressResultsPropsType = {
  adressResults: AdressResultType[];
};

const AdressResults = ({ adressResults }: AdressResultsPropsType) => {
  const formatZipcode = (zipcode: string): string => {
    const zipcodeText = `${zipcode.substr(0, 3)}-${zipcode.substr(3)}`;
    return zipcodeText;
  };
  if (adressResults.length === 0) {
    return null;
  }
  return (
    <>
      <p>〒{formatZipcode(adressResults[0].zipcode)}</p>
      <ul>
        {adressResults.map((result: AdressResultType, index: number) => (
          <li key={index}>
            <div>
              {result.kana1}
              {result.kana2}
              {result.kana3}
            </div>
            <div>
              {result.address1}
              {result.address2}
              {result.address3}
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default AdressResults;
