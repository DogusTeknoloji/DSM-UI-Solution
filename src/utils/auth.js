import Cookies from 'js-cookie'

const TokenKey = 'User-Token';
const UserNameKey="User-Name";
const UserPhotoKey="User-Photo";

export function getToken() {
  return Cookies.get(TokenKey)
}

export function setToken(token) {
  return Cookies.set(TokenKey, token,1)
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}

export function getUserName() {
  return Cookies.get(UserNameKey)
}

export function setUserName(name) {
  return Cookies.set(UserNameKey, name,1);
}

export function getPhoto(){
  return localStorage.getItem(UserPhotoKey);
}

export function setPhoto(profilePhoto){  
  return localStorage.setItem(UserPhotoKey,profilePhoto);
}