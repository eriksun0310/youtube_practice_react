import { useEffect, useState } from 'react';

const useDebounce = (value, callback) => {
    const [debounceSearch, setDebounceSearch] = useState('')

    useEffect(()=>{
        const debounce = setTimeout(()=>{
          setDebounceSearch(value)
          callback()
        }, 1000)
    
        return ()=> clearTimeout(debounce)
      },[value, callback])
  return debounceSearch
}

export default useDebounce
