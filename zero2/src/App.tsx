import { Button } from "./components/Button"
import { ThemeProvider } from "styled-components"
import { defaultTheme } from "./styles/themes/default"

export function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <Button variant="primary"/>
      <Button variant="secondary"/>
      <Button variant="sucess"/>
      <Button variant="danger"/>
      <Button />
    </ThemeProvider>
  )
}

export default App