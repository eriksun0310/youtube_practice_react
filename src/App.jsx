import './App.css';
import { useState , useCallback, useEffect} from 'react';
import useDebounce from './hooks/useDebounce';
function App() {
  const [search, setSearch] = useState('')

  const testCallback = useCallback(test, [])
 
  function test (){
    console.log('test')
  }

  const  debounceSearch  = useDebounce(search, testCallback)


 
  const handleChange = (e)=>{
    setSearch(e.target.value)
  }

  // 利用 useDebounce 來打api
  useEffect(()=>{
    const getApi = ()=>{
      console.log('getApiData ....')
      // async await
      console.log('end')
    }
    getApi()
  }, [debounceSearch])

  return (
    <>
    <input value={search} onChange={handleChange}/>
    <p>{search}</p>
    <p>debounce:{debounceSearch}</p>
    </>  
  );
}

export default App;
