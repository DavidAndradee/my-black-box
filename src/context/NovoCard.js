import { createContext, useState } from "react";

export const NovoCardContext = createContext();
NovoCardContext.displayName = "CardNovo"

export default function NovoCardProvider({children}){
    const [novo, setNovo] = useState([]);

    return(
        <NovoCardContext.Provider value={{novo, setNovo}}>
            {children}
        </NovoCardContext.Provider>
    )

    const addVideo = (video) => {
        setNovo([...novo, video]);
    };

}