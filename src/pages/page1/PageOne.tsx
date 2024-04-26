// import { useEffect, useState } from "react";
import { useQuery } from "react-query";
// import { useSearchParams } from "react-router-dom";

const PageOne = () => {
  // const [data, setData] = useState<Message>({ message: "" });

  // const queryClient = useQueryClient();

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

  // useEffect(() => {
  //   fetch(`${import.meta.env.VITE_PUBLIC_API}/api/sayhi`)
  //     .then((res) => res.json())
  //     .then((result) => {
  //       setData(result);
  //       console.log(result);
  //     })
  //     .catch((error) => console.error("Error fetching data:", error));
  // }, []);

  const getMessage = async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_PUBLIC_API}/api/sayhi`
      );
      const result = response.json();
      return result;
    } catch (error) {
      console.error(error);
    }
  };

  const { data, status } = useQuery(["data"], getMessage);
  console.log(status);
  return (
    <div>
      <p className="text-7xl">Page One</p>

      {status === "loading" && <p>Loading...</p>}

      {status === "error" && <p>Error while fetching data</p>}

      {status === "success" && <p>{data.message}</p>}
    </div>
  );
};

export default PageOne;
