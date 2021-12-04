import { BrowserRouter } from "react-router-dom";
import { PrimaryButton } from "./components/atoms/button/PrimaryButton";
import { SecondaryButton } from "./components/atoms/button/SecondaryButton";
import { DefaltLayout } from "./components/templates/DefaultLayout";
import { SearchInput } from "./components/molecules/SearchInput";
import { UserCard } from "./components/organism/user/UserCard";
import { Router } from "./router/Router";
import "./styles.css";

const user = {
  name: "takiwaka",
  image: "https://source.unsplsash.com/lqqpMXO_8Tc",
  email: "123456@gmail.com",
  phone: "012-3456-7890",
  company: {
    name: "有限株式会社"
  },
  website: "https://google.com"
};

export default function App() {
  return <Router />;
}
