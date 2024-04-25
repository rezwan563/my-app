import { useEffect, useState } from "react";
import { useQueryClient } from "react-query";
import { useSearchParams } from "react-router-dom";

interface Message {
  message: string;
}

const PageOne = () => {
  const [data, setData] = useState<Message>({ message: "" });

  const queryClient = useQueryClient();

/**
 * self-note: if we use useEffect to fetch data
 * 
 * for split second data.message is not found and 'no data' is shown
 * 
 * ideal behavior would be to store data somewhere(storage/ cache) 
 * 
 * if no new data available data should be loaded from storage/ cache
 * 
 * if new data available it will fetch the new data but this time it will display old data(old data which is stale)
 * 
 * after reloading the page it will display the new fetched data
 */

  useEffect(() => {
    fetch(`${import.meta.env.VITE_PUBLIC_API}/api/sayhi`)
      .then((res) => res.json())
      .then((result) => {
        setData(result);
        console.log(result);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
  return (
    <div>
      <p className="text-7xl">Page One</p>
      <p className="text-5xl">{data.message ? data.message : "No data"}</p>
    </div>
  );
};

export default PageOne;
