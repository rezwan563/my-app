
const Login = () => {

    const handleLoginForm = async(e: React.SyntheticEvent) => {
        e.preventDefault();
        const formData = new FormData(e.target as HTMLFormElement);
        for (const [key, value] of formData) {
            console.log(`${key} : ${value}`);
        }
        const response = await fetch(`${import.meta.env.VITE_PUBLIC_API}/api/login`, {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            }
        })
        return response.json()
    };


    const handleLogout = async(e: React.SyntheticEvent) =>{
      e.preventDefault();
      const formData = new FormData(e.target as HTMLFormElement);
        for (const [key, value] of formData) {
            console.log(`${key} : ${value}`);
        }
    }
  return (
    <div>
      <form
        onSubmit={handleLoginForm}
        className="w-fit ml-1 mt-1 p-2 border border-1 border-black"
      >
        <div className="flex flex-col">
          <label className="flex flex-col">
            Email
            <input type="email" name="email" />
          </label>
          <label className="flex flex-col">
            Password
            <input type="password" name="password" />
          </label>
        </div>
        <input
          type="submit"
          className="border border-1 border-black p-1 mt-1"
          value="Login"
        />
      </form>
      <form
        onSubmit={handleLogout}
        className="w-fit ml-1 mt-1 p-2 border border-1 border-black"
      >
        <div className="flex flex-col">
          <label className="flex flex-col">
            Email
            <input type="email" name="email" />
          </label>
          <label className="flex flex-col">
            Password
            <input type="password" name="password" />
          </label>
        </div>
        <input
          type="submit"
          className="border border-1 border-black p-1 mt-1"
          value="Logout"
        />
      </form>
    </div>
  );
};

export default Login;
