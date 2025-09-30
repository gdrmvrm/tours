import { useEffect, useState } from 'react';
import Tours from './components/Tours';
import Loading from './components/Loading';

const url = 'https://www.course-api.com/react-tours-project';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [tours, setTours] = useState([]);

  const fetchTours = async () => {
    try {
      const resp = await fetch(url);

      if (!resp.ok) {
        setIsError(true);
        setIsLoading(false);
        return;
      }

      const data = await resp.json();
      setTours(data);
    } catch (error) {
      setIsError(true);
    }

    setIsLoading(false);
  };

  useEffect(() => {
    fetchTours();
  }, []);

  if (isLoading) {
    return <Loading />;
  }

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
