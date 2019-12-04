import MainContext from './MainContext';

const initdefultstate = {
  token: '122123213',
  userprofile: '',
};

const AuthReducer = (state = initdefultstate, actions) => {
  switch (actions.type) {
    case 'signup':
      return actions.payload;
    case 'singin':
    //  TODO: add login Logic
    case 'reset_Password':
    // TODO: add logic reset password
    case 'add_error':
      return actions.payload;

    default:
      return state;
  }
};
const SignUp = dispatch => {
  return async (email, password) => {
    try {
    } catch (e) {
      console.log(e);
      dispatch({
        type: 'add_error',
        payload: e
      });
    }

    //TODO : add API request To creat New User & response Massage & Error Massage
  };
};

const SignIn = dispatch => {
  return () => {
  };
};

export const { Provider, Context } = MainContext(
  AuthReducer,
  { SignUp },
  initdefultstate,
);
