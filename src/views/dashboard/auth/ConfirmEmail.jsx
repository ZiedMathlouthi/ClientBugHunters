import axios from "axios";
import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const ConfirmEmail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .put(`https://backendbughunters.onrender.com/auth/confirm/${id}`, null)
      .then(() => {
        navigate("/auth/login");
        console.log("hello");
      });
  }, []);
  return <div>ConfirmEmail</div>;
};

export default ConfirmEmail;
