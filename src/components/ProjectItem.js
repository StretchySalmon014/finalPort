import {useEffect, React} from "react";
import { useNavigate } from "react-router-dom";
import "./projectItem.css";

function ProjectItem({ image, name, id }) {
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);

  return (
    <div
      className="projectItem"
      onClick={() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
        navigate("/project/" + id);
      }}
    >
      <div style={{ backgroundImage: `url(${image})` }} className="bgImage" />
      <p> {name} </p>
    </div>
  );
}

export default ProjectItem;