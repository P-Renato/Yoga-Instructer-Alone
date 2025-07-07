import { createContext,  useState, useEffect} from "react";

export const blogContext = createContext(null)

export function ContextProvider({children}){
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('/database/data.json')
            .then((res) => res.json())
            .then((data) => {
                setBlogs(data.blog)
            })
            console.log(blogs)
    }, [])
    return(
        <blogContext.Provider value={{blogs, setBlogs}}>
            {children}
        </blogContext.Provider>
    )
}
