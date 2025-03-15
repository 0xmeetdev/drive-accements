

function App() {
  return (
    <div className="h-screen flex flex-col items-center justify-center gap-5">
      <h1 className="text-4xl font-bold">Hey There!! Drive 2.0 here....</h1>
      <a
        href={`http://localhost:3001/auth/google`}
        className={'bg-blue-500 text-white p-2 rounded-md'}
      >
        Login with Google
      </a>
    </div>
  );
}

export default App;
