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
      <input
        type="text"
        name="zipcode"
        autoComplete="postal-code"
        value={zipcode}
        onChange={(e) => setZipcode(e.target.value)}
      />
      <button type="submit">Get Adress</button>
    </form>
  );
};

export default ZipcodeForm;
