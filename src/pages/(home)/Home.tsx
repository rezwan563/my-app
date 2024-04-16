const Home = () => {

    
    const handleGuestInfo = (e) =>{
        e.preventDefault();

        const form = e.target;
        const formData = new FormData(form);
        for(const [key, value] of formData) {
            console.log(`${key} : ${value}`);
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