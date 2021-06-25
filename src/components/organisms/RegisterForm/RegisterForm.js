import { withStyles } from "@material-ui/core/styles";
import Button from "../../atoms/Button/Button";
import TextField from "../../atoms/TextField/TextField";
import Heading from "../../atoms/Heading/Heading";
import { styles } from "./RegisterForm.style";
import RadioButton from "../../atoms/RadioButton/RadioButton";
import { useFormik } from "formik";
import * as yup from "yup";
import { useState } from "react";
import { useDispatch } from "react-redux";

const RegisterForm = ({ classes }) => {
  const validationSchema = yup.object({
    fullName: yup
      .string("Enter your Full Name")
      .required("Full Name is required")
      .matches(/^[a-zA-Z]+$/, "Enter a valid Name"),
    userName: yup
      .string("Enter username")
      .required("username is required")
      .matches(/^[a-zA-Z]+$/, "Enter a valid username"),
    password: yup
      .string("Enter your password")
      .required("password is required"),
    email: yup
      .string("Enter valid email")
      .email("enter valid format")
      .required("Required"),
  });

  const formik = useFormik({
    initialValues: {
      fullName: "",
      userName: "",
      email: "",
      password: "",
      gender: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  const fileSelectedHandler = (e) => {
    console.log(e.target.files[0]);
  };
  // const [fullName, setFullname] = useState("");
  // const [userName, setUsername] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [imgUrl, setImgUrl] = useState("");
  // const dispatch = useDispatch();

  // const registerUser = (e) => {
  //   e.preventDefault();
  //   const user = {
  //     fullName,
  //     userName,
  //     email,
  //     password,
  //     imgUrl,
  //   };
  // };
  return (
    <div className={classes.RegisterForm}>
      <Heading heading="Register" />
      <form>
        <TextField
          placeholder="Enter Full Name"
          inputType="text"
          onChange={formik.handleChange}
          name="fullName"
          value={formik.values.fullName}
          error={Boolean(formik.errors.fullName)}
          helperText={formik.errors.fullName}
        >
          Full Name
        </TextField>
        <TextField
          placeholder="Enter Username"
          inputType="text"
          onChange={formik.handleChange}
          name="userName"
          value={formik.values.userName}
          error={Boolean(formik.errors.userName)}
          helperText={formik.errors.userName}
        >
          Username
        </TextField>
        <TextField
          placeholder="Enter Email ID"
          inputType="email"
          onChange={formik.handleChange}
          name="email"
          value={formik.values.email}
          error={Boolean(formik.errors.email)}
          helperText={formik.errors.email}
        >
          Email
        </TextField>
        <TextField
          placeholder="Enter Password"
          inputType="password"
          onChange={formik.handleChange}
          name="password"
          value={formik.values.password}
          error={Boolean(formik.errors.password)}
          helperText={formik.errors.password}
        >
          Password
        </TextField>
        <RadioButton />
        <label for="image">Select profile picture:</label>
        <input
          type="file"
          accept="image/*"
          id="image"
          onChange={fileSelectedHandler}
        ></input>

        <Button type="submit">Sign up</Button>
      </form>
    </div>
  );
};

export default withStyles(styles)(RegisterForm);
