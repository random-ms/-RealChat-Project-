import { Routes, Route } from "react-router-dom";
import ChatRoom from "../pages/ChatRoom";
import CreateRoom from "../pages/CreateRoom";
import RoomList from "../pages/RoomList";
import Navbar from "./Navbar";

function Dashboard() {
  return (
    <section className="chat-app">
      <Navbar />
      <Routes>
        <Route index element={<ChatRoom />} />
        <Route path="/rooms" element={<RoomList />} />
        <Route path="/create-room" element={<CreateRoom />} />
      </Routes>
    </section>
  );
}

export default Dashboard;
