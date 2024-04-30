import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { RegistrationRequest } from "../API/Api";

const Registration = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    apiError: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    validateField(name, value);
  };

  const validateField = (fieldName, value) => {
    const newErrors = { ...errors };

    if (fieldName === "firstName") {
      newErrors.firstName =
        value.trim().length < 3
          ? "First name must be at least 3 characters long"
          : "";
    } else if (fieldName === "lastName") {
      newErrors.lastName =
        value.trim().length < 3
          ? "Last name must be at least 3 characters long"
          : "";
    } else if (fieldName === "email") {
      newErrors.email = /\S+@\S+\.\S+/.test(value)
        ? ""
        : "Please enter a valid email address";
    } else if (fieldName === "password") {
      newErrors.password =
        value.length < 6 ? "Password must be at least 6 characters long" : "";
    }

    setErrors(newErrors);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      const { firstName, lastName, email, password } = formData;
      const photo =
        "https://t3.ftcdn.net/jpg/05/16/27/58/240_F_516275801_f3Fsp17x6HQK0xQgDQEELoTuERO4SsWV.jpg";
      RegistrationRequest(firstName, lastName, email, password, photo)
        .then((result) => {
          if (result) {
            navigate("/login");
          } else {
            setErrors({ ...errors, email: "Email already in use" });
          }
        })
        .catch((error) => {
          console.error("Registration error:", error);
          setErrors({
            ...errors,
            apiError: "Registration failed. Please try again later.",
          });
        });
    } else {
      console.log("Form has errors, please correct them.");
    }
  };

  const validateForm = () => {
    let formIsValid = true;
    const newErrors = { ...errors };

    if (formData.firstName.trim().length < 3) {
      newErrors.firstName = "First name must be at least 3 characters long";
      formIsValid = false;
    } else {
      newErrors.firstName = "";
    }

    if (formData.lastName.trim().length < 3) {
      newErrors.lastName = "Last name must be at least 3 characters long";
      formIsValid = false;
    } else {
      newErrors.lastName = "";
    }

    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
      formIsValid = false;
    } else {
      newErrors.email = "";
    }

    if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters long";
      formIsValid = false;
    } else {
      newErrors.password = "";
    }

    setErrors(newErrors);
    return formIsValid;
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div>
        <h1 className="text-3xl text-center font-bold text-primary">
          Welcome To Our Tactic Planet Please{" "}
          <span className="text-secondary">Registration</span>
        </h1>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleChange}
          />
          {errors.firstName && (
            <p className="text-red-500">{errors.firstName}</p>
          )}
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleChange}
          />
          {errors.lastName && <p className="text-red-500">{errors.lastName}</p>}
          <input
            type="text"
            name="email"
            placeholder="Enter Your Email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <p className="text-red-500">{errors.email}</p>}
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Enter Your Password"
              value={formData.password}
              onChange={handleChange}
            />
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
              {showPassword ? (
                <FaEyeSlash
                  onClick={togglePasswordVisibility}
                  className="text-gray-500 cursor-pointer"
                />
              ) : (
                <FaEye
                  onClick={togglePasswordVisibility}
                  className="text-gray-500 cursor-pointer"
                />
              )}
            </div>
          </div>
          {errors.password && <p className="text-red-500">{errors.password}</p>}
          {errors.apiError && <p className="text-red-500">{errors.apiError}</p>}
          <button>Submit</button>
          <div className="flex justify-between">
            <p>Already have an account?<Link to="/login" className="text-secondary">Sign in here</Link></p>
             <Link to="/forgot-password" className="text-primary">Forgot password</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Registration;
