import ajax from './ajax'

//接口请求模块
// 每个函数的返回值都是promise
const BASE=''
export const reqLogin =(username,password)=>ajax(BASE+'/login',{username,password},'POST')
export const reqAddUser =(user)=>ajax(BASE+'/manage/user/add',user,'POST')