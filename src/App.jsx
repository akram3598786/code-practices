import "./App.css";
import { extendTheme, ChakraProvider } from '@chakra-ui/react'
import { Products } from "./Components/Products/Products";

// Extend the theme to include custom colors, fonts, etc
const colors = {
  brand: {
    900: '#1a365d',
    800: '#153e75',
    700: '#2a69ac',
  },
}

const theme = extendTheme({ colors })

// Pass the `theme` prop to the `ChakraProvider`
function App() {
  return (
    <ChakraProvider theme={theme}>
      <div className="App">
        {/* <h1>sjnjn</h1> */}
        <Products />
      </div>
     </ChakraProvider>
  )
}
export default App;
