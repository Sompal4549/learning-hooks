import { useState, useTransition } from "react";
function SearchPage() {
  const [input, setInput] = useState("");
  const [list, setList] = useState([]);
  const [isPending, startTransition] = useTransition();
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

  return (
    <div>
      <label>Search the Web: </label>
      <input type="text" value={input} onChange={handleChange} />

      {isPending
        ? "...Loading results"
        : list.map((item, index) => {
            return <div key={index}>{item}</div>;
          })}
    </div>
  );
}
export default SearchPage;
