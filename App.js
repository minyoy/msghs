import React, { useState } from "react";
import axios from "axios";

function App() {
  const findbreak="breakfast"
  const findlun="lunch"
  const finddin="dinner"
  const findgwal="]"
  const [data, setData] = useState(null);

  const MonClick = () => {
  axios
    .get('https://schoolmenukr.ml/api/high/Q100000247?month=12&date=27')
    .then((response) => {
    setData(response.data);
    });
  };
  return(
    <div>
      <div>
        <button MonClick={MonClick}>Monday</button>
      </div>
      {JSON.stringify(data, null, 2)}
      {document.writeln(data.indexOf(findbreak))}
    </div>
  );
        
}

export default App;