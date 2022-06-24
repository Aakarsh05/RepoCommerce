import { useState } from "react"

const SearchParam = () => {
    const [location, setLocation] = useState("");
    return (
        <div className="w-1/3 h-1/4 bg-white text-black flex flex-col">
            <form>
                <label htmlFor="location" className="block">
                    Location: {location}
                    <br/>
                    <input
                     type="text"
                     placeholder="location" 
                     value={location} 
                     id="location" 
                     onChange={(e)=> setLocation(e.target.value) } 
                     />
                </label>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default SearchParam;