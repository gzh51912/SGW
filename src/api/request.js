import axios from './index';  //进行了二次封装了

export const checkname =(name)=>{  //检查用户名是否存在
    // console.log(name)
    return axios.get("/users/checkname",{params:{name}})
}
export const reg=(name,password)=>{//注册
    return axios.post('/users/reg',{name,password})
}

export const login =(name,password)=>{  //登陆
    return axios.get("/users/login",{params:{name,password}})
}
