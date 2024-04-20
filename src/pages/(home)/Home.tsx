const Home = () => {
  const handleGuestInfo = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    const plainData = {};
    for (const [key, value] of formData) {
      plainData[key] = value;
    }
    console.log("data\n", plainData);
    try {
      const response = await fetch(`${import.meta.env.VITE_PUBLIC_API}/url`, {
        method: "POST",
        // headers: {
        //   "Content-type": "application/json",
        // },
        body: formData
      });
      if (response.ok) {
        const result = await response.json();
        console.log("result\n", result);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <form
        autoComplete="off"
        onSubmit={handleGuestInfo}
        className="bg-gray-300 w-1/2 p-2"
      >
        <div className="grid grid-cols-1 gap-2">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="pl-2"
          />
          <input
            type="number"
            name="guest"
            placeholder="No. of guest"
            className="pl-2"
          />
          <input
            type="number"
            name="assistance"
            placeholder="(driver/ housemaid) e.g. 0/1/2"
            className="pl-2"
          />
          <label></label>
          <input
            type="number"
            name="payment"
            placeholder="Amount"
            className="pl-2"
          />
        </div>
        <input type="file" name="text" id="" />
        <input
          type="submit"
          value="Confirm"
          className="bg-blue-600 block mt-2 text-white px-3 shadow-md"
        />
      </form>
    </div>
  );
};

export default Home;
