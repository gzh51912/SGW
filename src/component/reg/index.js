import React, { Component } from 'react'
import "./index.css"
import {checkname,reg} from "../../api/request"
import { withRouter } from 'react-router'
// @withRouter()
export default class Reg extends Component {

    checkname=()=>{
        if(this.refs.valueA.value.trim() === ""){
            alert("请输入用户名")
        }
        else{
            checkname(this.refs.valueA.value.trim()).then((res)=>{
            if(res.data.type===1){
               reg(this.refs.valueA.value.trim(),this.refs.valueB.value.trim()).then((res)=>{
                   if(res.data.type===1){
                    alert("注册成功，点击确认跳转登陆页")
                    this.props.history.push("/login")
                   }
               })
            }else{
                alert("该用户名已经被注册，换个其它的试试吧")
            }
        })
        }
    }
   sub=()=>{
    if(this.refs.valueA.value === "" && this.refs.valueB.value === ""){
        alert("请输入用户名和密码")
    }else{
        this.checkname()
    }
    
   }
    
    render() {
        return (
            <div>
                <section className="header_reg">
                    欢迎注册
              </section>

                    <div className="reg_name">
                        <span>用户名：</span>
                        <input type="text" onChange={this.onChangeA} onBlur={this.checkname}  ref="valueA" placeholder="请输入用户名" />
                    </div>

                    <div className="reg_psw">
                        <span>密&nbsp;&nbsp;&nbsp;码：</span>
                        <input type="password" ref="valueB" placeholder="请输入用户名" />
                    </div>



                <div className="reg_sub">
                <button className="reg_sub_A" onClick={this.sub}>
                    注册
                </button>
                </div>


                <ul className="reg_yq">
                    <li className="yq_li"><a href={"https://m.mtime.cn/UniteLogin/Dispatch.mi?pid=weibo"} /></li>
                    <li className="yq_li2"><a href={"https://m.mtime.cn/UniteLogin/Dispatch.mi?pid=weibo"} /></li>
                </ul>

                <p className="reg_con">注册代表您同意我们的服务条款<a href={""} title="时光网用户协议" >时光网用户协议</a></p>
            </div>
        )
    }
}
