import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import * as Yup from 'yup';
import { Formik, Form } from 'formik';
import {
  TextField,
  Button,
  Box,
  Container,
  CircularProgress
} from "@material-ui/core";

import { UserService } from "../Services/UserServices";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    position: 'relative',
  },
  buttonProgress: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: -12,
    marginLeft: -12
  },
  button: {
    color: '#fff',
    backgroundColor: '#F3933A',
    '&:hover': {
      backgroundColor: '#CD711B',
    }
  },
  container: {
    paddingTop: '40px'
  }
}));

const Login = () => {
  const classes = useStyles();
  const [data] = useState({
    credential: '',
    password: ''
  });

  const handleSubmit = async (values) => {
    const user = await UserService.AuthUser(values);
    if (user.status === 401 || user.status === 404 || user.status === 500) {
      console.log(user.msg);
      return;
    }
    localStorage.setItem('@app:loggedUser', JSON.stringify(user));
    window.location.reload();
  }

  return (
    <Box
      display="flex"
      flexDirection="column"
      height="100%"
      justifyContent="center"
    >
      <Container maxWidth="sm" className={classes.container}>
        <Formik
          initialValues={data}
          validationSchema={Yup.object().shape({
            credential: Yup.string().required('Informe a credencial'),
            password: Yup.string().required('Informe a senha')
          })}
          onSubmit={handleSubmit}
        >
          {({
            errors,
            touched,
            values,
            isSubmitting,
            handleBlur,
            handleChange
          }) => (
            <Form>
              <TextField
                error={Boolean(touched.credential && errors.credential)}
                fullWidth
                helperText={touched.credential && errors.credential}
                label="Credencial"
                margin="normal"
                name="credential"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.credential}
                variant="outlined"
              />
              <TextField
                error={Boolean(touched.password && errors.password)}
                fullWidth
                helperText={touched.password && errors.password}
                label="Senha"
                margin="normal"
                name="password"
                type="password"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.password}
                variant="outlined"
              />
              <Box my={2}>
                <div className={classes.wrapper}>
                  <Button
                    className={classes.button}
                    variant="contained"
                    type="submit"
                    disabled={isSubmitting}
                    fullWidth
                    size="large"
                  >
                    Entrar
                  </Button>
                  {isSubmitting
                    && <CircularProgress size={24} className={classes.buttonProgress} />}
                </div>
              </Box>
            </Form>
          )}
        </Formik>
      </Container>
    </Box>
  );
};

export default Login;