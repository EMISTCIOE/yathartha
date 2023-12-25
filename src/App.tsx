import './App.css';

const App : React.FC = () => {
  // later move to the data file
  const _MainTitle : string = "Yathartha";
  const _MainQuote : string = "This is the placeholder for quote for the yathartha";

  return (
   <main className="flex flex-col justify-evenly items-center min-h-[100vh] bg-theme">
      <h1 className="text-theme-alt text-6xl font-bold uppercase font-roboto-slab">{_MainTitle}</h1>
      <p>{_MainQuote}</p>
   </main>
  )
}

export default App
