const Home = () => {

    
    const handleGuestInfo = async(e) =>{
        e.preventDefault();

        const form = e.target;
        const formData = new FormData(form);
        const plainData = {};
        for(const [key, value] of formData) {
            plainData[key] = value;
        }
        console.log('data\n', plainData);
        try {
            const response = await fetch('http://localhost:3000/', {
                method: "POST",
                headers:{
                    "Content-type": 'application/json'
                },
                body: JSON.stringify(plainData)
            });
            if(response.ok){
                const result = await response.json();
                console.log('result\n', result);
            }
        } catch (error) {
            console.log(error)
        }

    }
    return (
        <div>
            <form onSubmit={handleGuestInfo} className="bg-gray-300 w-1/2 p-2">
                <div className="grid grid-cols-1 gap-2">
                <input type="text" name="name" placeholder="Your Name" id="" className="pl-2"/>
                <input type="number" name="guest" placeholder="No. of guest" id="" className="pl-2"/>
                <input type="number" name="assistance" placeholder="(driver/ housemaid) e.g. 0/1/2" id="" className="pl-2"/>
                <label></label>
                <input type="number" name="payment" placeholder="Amount" id="" className="pl-2"/>
                </div>
                <input type="submit" value="Confirm" className="bg-blue-600 mt-2 text-white px-3 shadow-md" />
            </form>
        </div>
    );
};

export default Home;