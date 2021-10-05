import './App.css';
import Timeline from './lib';

function App() {

  const actions = [
    {
      code: "code1",
      time: 0,
      actionType: "HAJA OKHRA"
    },
    {
      code: "code2",
      time: 10,
      actionType: "HAJA OKHRA"
    },
    {
      code: "code3",
      time: 11,
      actionType: "HAJA OKHRA"
    },
    {
      code: "code4",
      time: 15,
      actionType: "HAJA OKHRA"
    },
    {
      code: "code5",
      time: 19,
      actionType: "PASTE"
    },
    {
      code: "code6",
      time: 30,
      actionType: "HAJA OKHRA"
    },
    {
      code: "code7",
      time: 45,
      actionType: "PASTE"
    },
    {
      code: "code8",
      time: 50,
      actionType: "HAJA OKHRA"
    },
    {
      code: "code9",
      time: 100,
      actionType: "HAJA OKHRA"
    },
  ]


  return (
    <div className="App h-screen flex flex-col items-center justify-center">
      <Timeline timelineArray = {actions} duration = {100} />
    </div>
  );
}

export default App;
