import { createContext, useContext } from "react";


//context creation hai ye

export const ThemeContext = createContext({ //can provide values
    themeMode: "light",
    darktheme: ()=>{},
    lightTheme: ()=>{}
})



//provider yahi par bana hai dusra file nahi
export const ThemeProvider = ThemeContext.Provider



// custom hook agar man ho to
export default function useTheme(){
    return useContext(ThemeContext)
}