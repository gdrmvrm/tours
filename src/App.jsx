import { useEffect, useState } from 'react';
import Tours from './components/Tours';

const url = 'https://www.course-api.com/react-tours-project';

const App = () => {
  const [tours, setTours] = useState([]);

  const fetchTours = async () => {
    try {
      const resp = await fetch(url);
      const data = await resp.json();
      setTours(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTours();
  }, []);

  return (
    <main>
      <section>
        <h2 className="title">Our Tours</h2>
        <Tours tours={tours} />
      </section>
    </main>
  );
};
export default App;
