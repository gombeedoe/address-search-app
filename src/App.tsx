import { useState } from 'react';
import AdressResults from './components/AdressResults';
import FormErrorMessage from './components/FormErrorMessage';
import Loading from './components/Loading';
import ZipcodeForm from './components/ZipcodeForm';

export type AdressResultType = {
  address1: string;
  address2: string;
  address3: string;
  kana1: string;
  kana2: string;
  kana3: string;
  prefcode: string;
  zipcode: string;
};

function App() {
  const [loading, setLoading] = useState<boolean>(false);
  const [zipcode, setZipcode] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [adressResults, setAdressResults] = useState<AdressResultType[]>([]);

  const getAdress = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    fetch(
      `https://zipcloud.ibsnet.co.jp/api/search?zipcode=${zipcode}&limit=100`
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.status === 400) {
          setAdressResults([]);
          setLoading(false);
          setError(data.message);
          return;
        } else if (data.status === 200 && data.results === null) {
          setAdressResults([]);
          setLoading(false);
          setError('該当する住所は見つかりませんでした。');
          return;
        }

        const results = data.results.map((result: AdressResultType) => ({
          address1: result.address1,
          address2: result.address2,
          address3: result.address3,
          kana1: result.kana1,
          kana2: result.kana2,
          kana3: result.kana3,
          prefcode: result.prefcode,
          zipcode: result.zipcode,
        }));

        setAdressResults(results);
        setZipcode('');
        setError('');
        setLoading(false);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="App">
      <ZipcodeForm
        zipcode={zipcode}
        setZipcode={setZipcode}
        getAdress={getAdress}
      />
      {error && <FormErrorMessage message={error} />}
      {loading ? <Loading /> : <AdressResults adressResults={adressResults} />}
    </div>
  );
}

export default App;
