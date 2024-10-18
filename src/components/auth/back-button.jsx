import { NavLink } from "react-router-dom";
import { Button } from "../ui/button";

const BackButton = ({ label, href }) => {
  return (
    <Button variant="link" className="font-normal w-full" size="sm" asChild>
      <NavLink to={href}>{label}</NavLink>
    </Button>
  );
};

export default BackButton;
