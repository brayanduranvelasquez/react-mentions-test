import { MentionsInput, Mention } from 'react-mentions';
import { useEffect, useState } from 'react';
import classNames from './input.module.css';

export default function Input({ options, placeholder }) {
  const [value, setValue] = useState('');
  const [data, setData] = useState({});

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  async function fetchData(option) {
    const response = await fetch(`${option}.json`);
    const data = await response.json();
    return data;
  }

  useEffect(() => {
    async function fetchDataAll() {
      const data = {};
      for (const option in options) {
        const dataOption = await fetchData(option);
        data[option] = dataOption;
      }
      setData(data);
    }
    fetchDataAll();
  }, [options]);

  return (
    <div>
      <MentionsInput
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        className="mentions"
        classNames={classNames}
      >
        {Object.keys(options).map((option) => (
          <Mention
            key={option}
            trigger={`{{${option}}}`}
            data={data[option]}
            className={classNames.mentions__mention}
          />
        ))}
      </MentionsInput>
    </div>
  );
}
