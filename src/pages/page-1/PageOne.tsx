import { useEffect, useState } from "react";
interface People{
    name: string,
    gender: string,
    age: string,
    location: string
}
const PageOne = () => {
    const [data, setData] = useState<Array<People>>([]);

    useEffect(() =>{
        fetch(`${import.meta.env.VITE_PUBLIC_API}/page-one`)
        .then(res => res.json())
        .then(result => setData(result))
        .catch(error => console.error('Error fetching data:', error));
    }, [])
    if(data.length > 0) console.log(data)
    return (
        <div>
            <p className="text-7xl">Page One</p>
            {data?.map((i, index) => (
                <ul key={index} className="mt-2 text-lg">
                    <li>{i.name} {i.gender} {i.age} {i.location}</li>
                </ul>
            ))}
        </div>
    );
};

export default PageOne;