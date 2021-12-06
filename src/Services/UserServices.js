import { api } from './ServiceBase';

export const UserService = {
  AuthUser: async (login) => {
    const data = await api.post('/user/auth', login).then((res) => {
      return res.data;
    }).catch((err) => {
      return err.response.data;
    });

    return data;
  }
};