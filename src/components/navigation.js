import React from "react";
// import LiveLike from "@livelike/engagementsdk";
//import { Link } from "react-router-dom";
import classes from "./navigation.module.css";
import { useNavigate, useLocation } from "react-router-dom";
import { WebApp } from "../support/config";

function Navigation() {
  // TO RECEVE THE DATA FROM HOMEPAGE
  let location = useLocation();

  const updateSrc = (src) => {
    const head = document.getElementsByTagName("head")[0];
    const webSdkScript = document.getElementById("livelike-sdk");
    head.removeChild(webSdkScript);
    const newScript = document.createElement("script");
    newScript.src = src;
    newScript.id = "livelike-sdk";
    head.appenChild(newScript);
  };

  //FOR NAVIGATION PURPOSE
  const navigate = useNavigate();

  //TO VERIFY WETHER LIVELIKE SDK ALREADY HAVE BEEN INTITIAIZED OR NOT
  function initialise(accessToken, clientId, endpoint) {
    window.LiveLike.init({
      accessToken: accessToken,
      clientId: clientId,
      endpoint: endpoint,
    }).then(() => {
      // This will generate a new profile
      console.log("LiveLike is connected!");
    });
  }

  // const serachParam = useSearchParams();
  //let [searchParams, setSearchParams] = useSearchParams();
  //const environment_value = serachParam.get("search");
  // console.log(searchParams.get("sort"));

  //console.log(location.state.chatRoomId);

  //INITIALIZING THE LIVELIKE SDK
  if (location.state.backend_environment === "dig") {
    console.log("dig");
    let frondEnd_env = location.state.frontend_environment;
    console.log("value of front is: " + frondEnd_env);
    // document.getElementById("livelike-sdk").src =
    //   "https://websdk-dig.livelikecdn.com/livelike.umd.dev.js";
    // updateSrc("https://websdk-dig.livelikecdn.com/livelike.umd.dev.js");
    //webEnv.src = "https://websdk-dig.livelikecdn.com/livelike.umd.dev.js";

    var script = document.createElement("script");
    script.onload = function () {
      initialise(
        WebApp.dig_accessToken,
        WebApp.dig_client_id,
        WebApp.dig_endpoint
      );
    };
    script.setAttribute(
      "src",
      "https://websdk-dig.livelikecdn.com/livelike.umd.dev.js"
    );
    document.head.appendChild(script);
  } else if (location.state.backend_environment === "qa") {
    console.log("QA");

    initialise(WebApp.qa_accessToken, WebApp.qa_client_id, WebApp.qa_endpoint);
  } else if (location.state.backend_environment === "prod") {
    console.log("prod");

    initialise(WebApp.accessToken, WebApp.clientId, WebApp.endpoint);
  }

  function widgetOnlyHandler() {
    console.log("hello");
    navigate("/widget_form");
  }

  function chatOnlyHandler() {
    // console.log("hello" + location.state.chatRoomId);
    navigate({
      pathname: "/chat_only",
      search: "?id=" + location.state.chatRoomId,
    });
  }

  function chatWithWidgetHandler() {
    console.log("hello");
    navigate("/chat_with_widget");
  }

  return (
    <div>
      <div className={classes.main}>
        <button className={classes.chatOnly} onClick={chatOnlyHandler}>
          Click To Load ChatOnly Screen!
        </button>
        <button className={classes.widgetOnly} onClick={widgetOnlyHandler}>
          Click To Load WidgetForm!
        </button>
        <button
          className={classes.chatWithWidget}
          onClick={chatWithWidgetHandler}
        >
          ChatWithWidget
        </button>
      </div>
    </div>
  );
}

export default Navigation;
