const Login = () => {

    const handleLoginForm = (e: React.SyntheticEvent) =>{
        e.preventDefault()
        const formData = new FormData(e.target as HTMLFormElement);
        for(const [key, value] of formData){
            console.log(`${key} : ${value}`)
        }
    }
  return (
    <div>
      <form onSubmit={handleLoginForm} className="w-fit ml-1 mt-1 p-2 border border-1 border-black">
        <div className="flex flex-col">
          <label className="flex flex-col">
            Email
            <input type="email" name="email" aria-activedescendant="enter email" aria-braillelabel="email" />
          </label>
          <label className="flex flex-col">
            Password
            <input type="password" 
            name="password"
            aria-activedescendant="enter password"
            aria-braillelabel="password" />
          </label>
        </div>
        <input type="submit" className="border border-1 border-black p-1 mt-1" value='Login' />
      </form>
    </div>
  );
};

export default Login;
