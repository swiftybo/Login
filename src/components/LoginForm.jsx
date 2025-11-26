export default function LoginForm() {
  return (
    <form>
      <label htmlFor="username">Username or Email</label>
      <input
        id="username"
        type="text"
        name="username"
        placeholder="Username or Email"
      ></input>

      <label htmlFor="password">Password</label>
      <input
        id="password"
        type="password"
        name="password"
        placeholder="Password"
      ></input>
    </form>
  );
}
