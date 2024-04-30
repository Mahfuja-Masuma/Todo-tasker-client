import { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa'; // Import eye and eye-slash icons
import { Link } from 'react-router-dom';
import { LoginRequest } from '../API/Api';
import { toast } from 'react-toastify';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const [errors, setErrors] = useState({
    email: '',
    password: ''
  });

  const [showPassword, setShowPassword] = useState(false); // State to manage password visibility

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const validateForm = () => {
    let formIsValid = true;
    const newErrors = { ...errors };

    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
      formIsValid = false;
    } else {
      newErrors.email = '';
    }

    if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters long';
      formIsValid = false;
    } else {
      newErrors.password = '';
    }

    setErrors(newErrors);
    return formIsValid;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    validateField(name, value);
  };

  const validateField = (fieldName, value) => {
    const newErrors = { ...errors };

    switch (fieldName) {
      case 'email':
        newErrors.email = /\S+@\S+\.\S+/.test(value) ? '' : 'Please enter a valid email address';
        break;
      case 'password':
        newErrors.password =
          value.length < 6 ? 'Password must be at least 6 characters long' : '';
        break;
      default:
        break;
    }

    setErrors(newErrors);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      const {email, password } = formData;
      // console.log(formData);
      LoginRequest(email,password)
      .then((result)=>{
        if (result === true) {
          toast.success('Login successful');
          window.location.href="/"
          // console.log(result.token);
        }

        else {
          if(result.error === 'User not found') {
            toast.error('User not found');
          }
          else if(result.error === 'Password not match') {
            toast.error('Password not match');
          }
          else {
            toast.error('Something went wrong');
          }

          }
        

      })
      .catch((error)=>{
         console.log('login failed');
       })
      
    
    } else {
      console.log('Form has errors, please correct them.');
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div>
        <h1 className="text-3xl text-center font-bold text-primary ">
          Welcome Back! Please{' '}
          <span className="text-secondary">Log In</span>
        </h1>

        <form onSubmit={handleSubmit}>
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
                <FaEyeSlash onClick={togglePasswordVisibility} className="text-gray-500 cursor-pointer" />
              ) : (
                <FaEye onClick={togglePasswordVisibility} className="text-gray-500 cursor-pointer" />
              )}
            </div>
          </div>
          {errors.password && <p className="text-red-500">{errors.password}</p>}
          <button>Log In</button>
          <div className='flex justify-between'>
          <p>You have an no account? <Link to='/registration' className='text-secondary'> Sign up here</Link></p>
          <Link to='/forgot-password' className='text-primary'>Forgot password</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
