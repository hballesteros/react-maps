import { useRef, ChangeEvent } from "react"


export const SearchBar = () => {

  const debounceRef = useRef<ReturnType<typeof setTimeout>>();

  const onQueryChange = (event: ChangeEvent<HTMLInputElement>) => {
    
    const query = event.target.value
    
    if(debounceRef.current) 
      clearTimeout(debounceRef.current)
    
    debounceRef.current = setTimeout(() => {
      console.log(query)
    }, 350)
  }

  return (
    <div className="search-container">
        <input 
            type="text"
            className="form-control"
            placeholder="Buscar Lugar..."
            onChange={ onQueryChange }
        />
    </div>
  )
}
