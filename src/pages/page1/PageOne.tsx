import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
interface People {
  name: string;
  gender: string;
  age: string;
  location: string;
}
const PageOne = () => {
  const [data, setData] = useState<Array<People>>([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('data');
  
  console.log(query)

 
  useEffect(() => {
    fetch(`${import.meta.env.VITE_PUBLIC_API}/page-one?data=${query}`)
      .then((res) => res.json())
      .then((result) => setData(result))
      .catch((error) => console.error("Error fetching data:", error));
  }, [query]);
  if (data.length > 0) console.log(data);
  return (
    <div>
      <p className="text-7xl">Page One</p>
      {data?.map((i, index) => (
        <ul key={index} className="mt-2 text-lg">
          <li>
            {i.name} {i.age}
          </li>
        </ul>
      ))}
      <button
        onClick={() => setSearchParams({ data: "cat" })}
        className="p-2 mr-2 bg-blue-600 text-white  outline-2 outline-blue-50 hover:bg-blue-700"
      >
        Load Cat Data
      </button>
      <button
        className="bg-black text-white p-2"
        onClick={() => setSearchParams({})}
      >
        Reset Filter
      </button>
    </div>
  );
};

export default PageOne;
