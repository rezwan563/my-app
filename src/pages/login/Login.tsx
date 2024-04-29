const Login = () => {
  const handleLoginForm = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    for (const [key, value] of formData) {
      console.log(`${key} : ${value}`);
    }
    const response = await fetch(
      `${import.meta.env.VITE_PUBLIC_API}/api/login`,
      {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
      }
    );
    return response.json();
  };

  const handleSignup = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const signupCredential = {};
    for (const [key, value] of formData) {
      console.log(`${key} : ${value}`);
      signupCredential[key] = value
      // formData.append(key, value);
    }
    console.log(signupCredential)
    const response = await fetch(
      `${import.meta.env.VITE_PUBLIC_API}/api/user/signup`,
      {
        method: "POST",
        headers:{
          'Content-type': 'application/json'
        },
        body: JSON.stringify(signupCredential)
      }
    );
    const result = await response.json();
    console.log(result)
  };
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
        onSubmit={handleSignup}
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
          value="Signup"
        />
      </form>
    </div>
  );
};

export default Login;
