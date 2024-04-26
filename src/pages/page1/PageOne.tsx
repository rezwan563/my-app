import { useQuery } from "react-query";

const PageOne = () => {

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
