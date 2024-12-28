import React, { useState } from 'react';

const Data = ({ data, DeleteHandel, updateData }) => {
  const [update, setUpdate] = useState(false);
  const [input, setInput] = useState('');
  const [edit, setEdit] = useState(null);

  const handleUpdate = (index) => {
    setUpdate(true);
    setEdit(index);
    setInput(data[index]); // Set the input to the specific item being edited
  };

  const handleChange = (e) => {
    setInput(e.target.value); // Update the input state
  };

  const saveUpdate = () => {
    if (edit !== null) {
      updateData(edit, input); // Call parent function to update data
      setUpdate(false);
      setEdit(null);
      setInput('');
    }
  };

  return (
    <div>
      {update ? (
        <div className="flex flex-col items-center">
          <input
            type="text"
            placeholder="Edit Todo"
            className="p-2 text-white bg-transparent rounded-md border border-gray-500 mb-3"
            value={input}
            onChange={handleChange}
          />
          <button
            onClick={saveUpdate}
            className="bg-blue-500 rounded-md p-2 text-white"
          >
            Save
          </button>
        </div>
      ) : (
        data.map((item, index) => (
          <ul key={index} className="flex m-3 items-center justify-center">
            <li className="mx-3">{item}</li>
            <div>
              <button
                onClick={() => DeleteHandel(index)}
                className="bg-red-400 rounded-md p-2 mx-3"
              >
                Delete
              </button>
              <button
                onClick={() => handleUpdate(index)}
                className="bg-green-500 rounded-md p-2"
              >
                Update
              </button>
            </div>
          </ul>
        ))
      )}
    </div>
  );
};

export default Data;
