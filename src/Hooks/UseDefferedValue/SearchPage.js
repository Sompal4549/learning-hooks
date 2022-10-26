import { useState, useTransition, useDeferredValue } from "react";
function SearchPageTwo() {
  const [, startTransition] = useTransition();
  const [input, setInput] = useState("");
  const [list, setList] = useState([]);
  const listSize = 30000;
  function handleChange(e) {
    setInput(e.target.value);
    startTransition(() => {
      const listItems = [];
      for (let i = 0; i < listSize; i++) {
        listItems.push(e.target.value);
      }
      setList(listItems);
    });
  }
  const deferredValue = useDeferredValue(input);
  return (
    <div>
      <label>Search the web:</label>
        <input value={input} type="text" onChange={handleChange} />
        {list.map((item, index) => {
          return (
            <div key={index} input={deferredValue}>
              {item}
            </div>
          );
        })}
     
    </div>
  );
}
export default SearchPageTwo;
