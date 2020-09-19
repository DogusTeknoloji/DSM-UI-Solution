import Cookies from 'js-cookie'

const TokenKey = 'User-Token';
const UserNameKey="User-Name";
const UserPhotoKey="User-Photo";
const UserCompanyKey="User-Company";
const UserDateOfHireKey = "User-DateOfHire";
const UserAccountCreateDateKey = "User-AccountCreateDate";
const UserDepartmentKey = "User-Department";
const UserLocationKey = "User-Location";
const UserMobilePhoneKey = "User-MobilePhone";
const UserOfficeNameKey = "User-OfficeName";
const UserTitleKey = "User-Title";

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

export function getCompany(){
  return localStorage.getItem(UserCompanyKey);
}

export function setCompany(userCompany){
  return localStorage.setItem(UserCompanyKey,userCompany);
}

export function getDateOfHire(){
  return localStorage.getItem(UserDateOfHireKey);
}

export function setDateOfHire(userDateOfHire){
  return localStorage.setItem(UserDateOfHireKey,userDateOfHire);
}

export function getAccountCreateDate(){
  return localStorage.getItem(UserAccountCreateDateKey);
}

export function setAccountCreateDate(userAccountCreateDate){
  return localStorage.setItem(UserAccountCreateDateKey,userAccountCreateDate);
}

export function getDepartment(){
  return localStorage.getItem(UserDepartmentKey);
}

export function setDepartment(userDepartment){
  return localStorage.setItem(UserDepartmentKey,userDepartment);
}

export function getLocation(){
  return localStorage.getItem(UserLocationKey);
}

export function setLocation(userLocation){
  return localStorage.setItem(UserLocationKey,userLocation);
}

export function getMobilePhone(){
  return localStorage.getItem(UserMobilePhoneKey);
}

export function setMobilePhone(userMobilePhone){
  return localStorage.setItem(UserMobilePhoneKey,userMobilePhone);
}

export function getOfficeName(){
  return localStorage.getItem(UserOfficeNameKey);
}

export function setOfficeName(userOfficeName){
  return localStorage.setItem(UserOfficeNameKey,userOfficeName);
}

export function getTitle(){
  return localStorage.getItem(UserTitleKey);
}

export function setTitle(userTitle){
  return localStorage.setItem(UserTitleKey,userTitle);
}