import { useEffect, useState } from 'react';

const url = 'https://www.course-api.com/react-tours-project';

const App = () => {
  const [list, setList] = useState([]);

  const fetchTours = async () => {
    try {
      const resp = await fetch(url);
      const data = await resp.json();
      console.log(data);
      setList(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTours();
  }, []);

  return <h2>Tours Starter</h2>;
};
export default App;
