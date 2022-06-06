import axios from "axios";
import { useEffect, useState } from "react";

export default function useApi(url) {
  const [emp, setEmp] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async function () {
      try {
        await axios.get(url).then((response) =>{
            console.log(response)
            setEmp(response.data);
        });
        setLoading(true);
        
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    })();
  }, []);
  return { emp, error, loading };
}