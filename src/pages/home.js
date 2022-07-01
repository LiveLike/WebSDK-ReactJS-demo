import React from "react";
import { useNavigate } from "react-router-dom";
import classes from "./home.module.css";

// function Home() {
//   function initialise(accessToken, clientId, endpoint, enteredChatroomId) {
//     LiveLike.init({
//       accessToken: accessToken,
//       clientId: clientId,
//       endpoint: endpoint,
//     }).then(() => {
//       // This will generate a new profile
//       console.log("LiveLike is connected!");
//       navigate("/chat/" + enteredChatroomId);
//     });
//   }
//   const chatInputRef = React.useRef();
//   const selectRef = React.useRef();
//   //const [program, setProgram] = useState<string | null>(null);
//   const navigate = useNavigate();

//   function submitHandler(event) {
//     event.preventDefault();
//     const enteredChatroomId = chatInputRef.current.value;
//     console.log("vlaue of : " + enteredChatroomId);
//     // props.setProgram(enteredProgram);
//     const env_value = selectRef.current.value;
//     console.log("vlaue of : " + env_value);

//     if (env_value === "dig") {
//       console.log("dig");
//       if (LiveLike._config.ready) {
//         console.log("LiveLike is connected!");
//         navigate("/chat/" + enteredChatroomId);
//       } else {
//         initialise(
//           WebApp.dig_accessToken,
//           WebApp.dig_client_id,
//           WebApp.dig_endpoint,
//           enteredChatroomId
//         );
//       }
//     } else if (env_value === "stag") {
//       console.log("stag");
//     } else if (env_value === "prod") {
//       console.log("prod");
//     }
//   }
//   // React.useEffect(() => {
//   //   navigate("/chat/" + "005d2be3-b326-4096-a5b7-037bbc16bc2c");
//   // }, []);

//   return React.createElement(
//     "div",
//     null,
//     React.createElement(
//       "form",
//       { className: classes.form, onSubmit: submitHandler },
//       React.createElement(
//         "div",
//         { className: classes.control },
//         React.createElement(
//           "label",
//           { htmlFor: "environment" },
//           "Select the environment: "
//         ),
//         React.createElement(
//           "select",
//           { name: "env", required: true, id: "environment", ref: selectRef },
//           React.createElement("option", { value: "dig" }, "Digital"),
//           React.createElement("option", { value: "stag" }, "Staging"),
//           React.createElement("option", { value: "prod" }, "Production")
//         )
//       ),
//       React.createElement(
//         "div",
//         { className: classes.control },
//         React.createElement(
//           "label",
//           { htmlFor: "chatRoom" },
//           "Enter the chatRoom id: "
//         ),
//         React.createElement("input", {
//           type: "text",
//           required: true,
//           id: "chatRoom",
//           ref: chatInputRef,
//         })
//       ),
//       React.createElement(
//         "div",
//         { className: classes.actions },
//         React.createElement("button", null, "Submit!")
//       )
//     )
//   );
// }

function Home() {
  //const [chatRoomId, setChatRoomId] = useState(null);
  const chatInputRef = React.useRef();
  const selectRef = React.useRef();
  const selectRef1 = React.useRef();
  //const [program, setProgram] = useState<string | null>(null);
  const navigate = useNavigate();

  function submitHandler(event) {
    event.preventDefault();
    const enteredChatroomId = chatInputRef.current.value;
    console.log("vlaue of : " + enteredChatroomId);
    //setChatRoomId(enteredChatroomId);
    //console.log("vlaue of set room: " + chatRoomId);
    const backend_env_value = selectRef.current.value;
    const frontend_env_value = selectRef1.current.value;
    const homePageData = {
      chatRoomId: enteredChatroomId,
      backend_environment: backend_env_value,
      frontend_environment: frontend_env_value,
    };
    //  console.log("vlaue of : " + env_value);
    navigate("/navigation", { state: homePageData });

    // navigate({
    //   pathname: "/navigation",
    //   search: "?sort=date&order=newest",
    // });
  }
  return (
    <div>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="backend_environment">
            Select the Backend environment:{" "}
          </label>
          <select name="env" required id="backend_environment" ref={selectRef}>
            <option value="dig">Digital</option>
            <option value="qa">Qa</option>
            <option value="prod">Production</option>
          </select>
        </div>

        <div className={classes.control}>
          <label htmlFor="sdk_environment">
            Select the WebSdk environment:{" "}
          </label>
          <select name="env_sdk" required id="sdk_environment" ref={selectRef1}>
            <option value="dig">Digital</option>
            <option value="qa">Qa</option>
            <option value="prod">Production</option>
          </select>
        </div>

        <div className={classes.control}>
          <label htmlFor="chatRoom">Enter the chatRoom id: </label>
          <input type="text" required id="chatRoom" ref={chatInputRef}></input>
        </div>
        <div className={classes.actions}>
          <button>Submit!</button>
        </div>
      </form>
    </div>
  );
}
export default Home;
