import { Formik, Form } from "formik";
import React from "react";
import * as Yup from "yup";
import { Button } from "semantic-ui-react";
import KodlamaIoTextInput from "../utilities/customFormControls/KodlamaIoTextInput";
import { toast } from "react-toastify";
import AuthService from "../services/authService";
import { useNavigate } from "react-router";


export default function LogInDetails() {
    const navigate=useNavigate();
    const initialValues = { userName: "",password:""};
    const authService=new AuthService();
    const schema = Yup.object({
      userName: Yup.string().required("Kullanıcı Adı Girmek Zorunludur"),
      password: Yup.string().required("Şifre Girmek Zorunludur"),
    });
   
    return (
      <div>
        <Formik
          initialValues={initialValues}
          validationSchema={schema}
          onSubmit={(values) => {
             const user =values;
             authService.login(user).then(response=>{
                localStorage.setItem("token",response.data);
                navigate("/home");
                window.location.reload();
             }).catch(err=>{
                 toast.error("Kullanıcı adı veya şifre hatalıdır")
             });
          }}
        >
          <Form className="ui form">
            <KodlamaIoTextInput name="userName" placeholder="Kullanıcı Adı" />
            <KodlamaIoTextInput name="password" placeholder="Şifre" />
            <Button color="green" type="submit">
              Giriş Yap
            </Button>
          </Form>
        </Formik>
      </div>
    );
  
}
