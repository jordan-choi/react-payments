import { Routes, Route } from "react-router-dom";
import CardRegistration from "./CardRegistration";
import RegisterCompleted from "./RegisterCompleted";

const CardRegisterPage: React.FC = () => {
  return (
    <div>
      <Routes>
        <Route path='' element={<CardRegistration />} />
        <Route path='completed' element={<RegisterCompleted />} />
      </Routes>
    </div>
  );
}
export default CardRegisterPage;