import React, { Component } from 'react'
import "../reg/index.css"
// import { login } from "../../api/request"
import axios from 'axios'
export default class Login extends Component {

    logSub = () => {
        let valueA = this.refs.valueA.value;
        let valueB = this.refs.valueB.value;
        console.log(valueA,valueB)
        axios.get("http://localhost:1920/users/login?name=" + valueA + "&password=" + valueB).then((res) => {
            console.log(res)
            if (res.data.type) {
                sessionStorage.setItem("username", this.refs.valueA.value);
                sessionStorage.setItem("token", res.data.token);
                alert("登陆成功，返回首页")
                this.props.history.push("/home")
            } else {
                alert("请检查密码")
            }
        })

    //  if(this.refs.valueA.value.trim()&&this.refs.valueB.value.trim()){
    //            login(this.refs.valueA.value.trim(),this.refs.valueB.value.trim()).then((res)=>{
    //                console.log(res)
    //                 if(res.data.type){
    //                     sessionStorage.setItem("username",this.refs.valueA.value);
    //                     sessionStorage.setItem("token",res.data.token);
    //                     alert("登陆成功，返回首页")
    //                     this.props.history.push("/home")
    //                 }else{
    //                     alert("请检查密码")
    //                 }
    //            })
    //        }
    //        else{
    //            console.log("请输入用户名和密码");
    //        }

    }
    render() {

        return (
            <div>
                <section className="header_reg">
                    账号密码登陆
              </section>

                <div className="reg_name">
                    <span>用户名：</span>
                    <input type="text" ref="valueA" placeholder="请输入用户名" />
                </div>

                <div className="reg_psw">
                    <span>密&nbsp;&nbsp;&nbsp;码：</span>
                    <input type="password" ref="valueB" placeholder="请输入用户名" />
                </div>



                <div className="reg_sub">
                    <button className="reg_sub_A" style={{ background: "#20A0DA" }} onClick={this.logSub}>
                        登陆
                </button>
                </div>


                <ul className="reg_yq">
                    <li className="yq_li"><a href={"https://m.mtime.cn/UniteLogin/Dispatch.mi?pid=weibo"} /></li>
                    <li className="yq_li2"><a href={"https://m.mtime.cn/UniteLogin/Dispatch.mi?pid=weibo"} /></li>
                </ul>

                <p className="reg_con">登陆代表您同意我们的服务条款<a href={""} title="时光网用户协议" >时光网用户协议</a></p>
            </div>
        )
    }
}
