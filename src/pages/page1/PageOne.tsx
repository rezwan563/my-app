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
/*
append
delete
set
entries
get
getAll
has
key
size
sort


*/
  console.log('searchparam\n', searchParams)

  searchParams.forEach((v, k) => console.log(k +':'+ v))

  useEffect(() => {
    fetch(`${import.meta.env.VITE_PUBLIC_API}/page-one`)
      .then((res) => res.json())
      .then((result) => setData(result))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
  if (data.length > 0) console.log(data);
  return (
    <div>
      <p className="text-7xl">Page One</p>
      {data?.map((i, index) => (
        <ul key={index} className="mt-2 text-lg">
          <li>
            {i.name} {i.gender} {i.age} {i.location}
          </li>
        </ul>
      ))}
      <button onClick={() => setSearchParams({data: 'cat'})} className="p-2 mr-2 bg-blue-600 text-white  outline-2 outline-blue-50 hover:bg-blue-700">
        Load Cat Data
      </button>
      <button className="bg-black text-white p-2" onClick={() => setSearchParams({})}>Reset Filter</button>
    </div>
  );
};

export default PageOne;
