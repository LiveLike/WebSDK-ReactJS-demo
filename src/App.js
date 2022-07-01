import React from "react";

import "./App.css";
import Home from "./pages/home";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Chat from "./pages/chat";
import Navigation from "./components/navigation";
import WidgetForm from "./components/widgetForm";
import WidgetOnly from "./pages/widgetOnly";

function App() {
  // const [chatRoomId, setChatRoomId] = useState(null);
  // const progInputRef = React.useRef() as React.MutableRefObject<HTMLInputElement>;
  // const selectRef = React.useRef() as React.MutableRefObject<HTMLSelectElement>;
  // const navigate = useNavigate();
  // function submitHandler(event: React.FormEvent) {
  //   event.preventDefault();
  //   const enteredProgram = progInputRef.current.value;
  //   console.log("vlaue of : " + enteredProgram);
  //   setProgram(enteredProgram);
  //   const env_value = selectRef.current.value;
  //   console.log("vlaue of : " + env_value);
  //   navigate("/chat");
  // }
  return (
    //     <div>
    //     <form className={classes.form} onSubmit={submitHandler}>
    //     <div className={classes.control}><label htmlFor="environment">Select the environment: </label>
    //         <select name="env" required id="environment" ref={selectRef}>
    //             <option value="dig">Digital</option>
    //             <option value="stag">Staging</option>
    //             <option value="prod">Production</option>
    //         </select></div>
    //     <div className={classes.control}>
    //         <label htmlFor="prog">Enter the program id: </label>
    //         <input type="text" required id="prog" ref={progInputRef}></input>
    //     </div>
    //     <div className={classes.actions}>
    //         <button>Submit!</button>
    //     </div>
    // </form>
    //     <Routes>
    //       <Route path="/" element={<Home />}></Route>
    //       <Route path="/chat" element={<Chat program={program}/>}></Route>
    //     </Routes>
    //     </div>

    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/navigation" element={<Navigation />}></Route>
      <Route path="/chat_only" element={<Chat />}>
        {/* <Route path=":id" element={<Chat />} /> */}
      </Route>
      <Route path="/widget_form" element={<WidgetForm />}></Route>
      <Route path="/chat_with_widget" element={<chatWithWidget />}></Route>
      <Route path="/widget_only" element={<WidgetOnly />}></Route>
    </Routes>
    // React.createElement(
    //   Routes,
    //   null,
    //   React.createElement(Route, {
    //     path: "/",
    //     element: React.createElement(Home),
    //   }),
    //   React.createElement(Route, {
    //     path: "/chat",
    //     element: React.createElement(Chat),
    //   })
    // )
  );
}
export default App;
