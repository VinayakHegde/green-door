import { create } from './create';
import { deleteItem } from './delete-item';
import { getItems } from './get-items';
import { update } from './update';
import { login } from './login';
import { logout } from './logout';
import { getUser } from './get-user';

export const Service = {
  getItems,
  create,
  update,
  delete: deleteItem,
  login,
  logout,
  getUser
}