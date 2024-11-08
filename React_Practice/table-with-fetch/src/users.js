import {request} from "./helpers";

function wait(delay) {
  return new Promise(resolve => setTimeout(resolve, delay));
}

export const getUsers = async () => {
  await wait(2000);
  return request('/users');
};
export const getUser = (userId) => {
  return request(`/users/${userId}`);
};
export const getUserTodos = (userId) => {
  return request(`/users/${userId}/todos`);
};
