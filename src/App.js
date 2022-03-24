import Alert from "./components/Alert/Alert";
import Button from "./components/Button/Button"
import Tooltip from "./components/Tooltip/Tooltip"


function App() {
    return (
      <div className="App">
  
        <Alert success>This is a sample alert</Alert>
        <Alert danger>This is a sample alert</Alert>
        <Alert primary>This is a sample alert</Alert>
        <Alert secondary>This is a sample alert</Alert>
        <Alert warning>This is a sample alert</Alert>
        <Alert info>This is a sample alert</Alert>
        <Alert light>This is a sample alert</Alert>
        <Alert dark>This is a sample alert</Alert>

        <Button type="Button" success>success</Button>
        <Button type="Button" danger>danger</Button>
        <Button type="Button" primary>primary</Button>
        <Button type="Button" secondary>secondary</Button>
        <Button type="Button" warning>warning</Button>
        <Button type="Button" info>info</Button>
        <Button type="Button" light>light</Button>
        <Button type="Button" dark>dark</Button>

      <Tooltip description="HyperText Markup Language" top>HTML</Tooltip>
      <Tooltip description="HyperText Markup Language" left>HTML</Tooltip>
      <Tooltip description="HyperText Markup Language" right>HTML</Tooltip>
      <Tooltip description="HyperText Markup Language" bottom>HTML</Tooltip>
      </div>
    );
  }
  
  export default App;