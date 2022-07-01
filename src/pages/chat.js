import React from "react";
//import "./chat.css";
import { useSearchParams } from "react-router-dom";

function Chat() {
  let [getChatRoomId, setChatRoomId] = useSearchParams();
  console.log(getChatRoomId.get("id"));
  //  let { id } = useParams();
  return <livelike-chat roomid={getChatRoomId.get("id")}></livelike-chat>;
}
export default Chat;
