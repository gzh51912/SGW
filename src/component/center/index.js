import React, { Component } from 'react'
import "./index.css"
import { Icon,Button } from "antd-mobile"
export default class Center extends Component {
    constructor(props) {
        super(props)
        this.state = {
            list: [
                {
                    "name": "电影票优惠券",
                    "image": "http://static1.mtime.cn/html5/20200116143308/images/2014/my_card.png",
                    "num": 2
                }, {
                    "name": "商品优惠券",
                    "image": "http://static1.mtime.cn/html5/20200116143308/images/2014/my_card.png",
                    "num": 8
                }, {
                    "name": "我的活动",
                    "image": "http://static1.mtime.cn/html5/20200116143308/images/2014/my_radio.png",
                    "num": ""
                }
                , {
                    "name": "我的电影",
                    "image": "http://static1.mtime.cn/html5/20200116143308/images/2014/my_movie.png",
                    "num": ""
                }
                , {
                    "name": "我的收藏",
                    "image": "http://static1.mtime.cn/html5/20200116143308/images/2014/my_fav.png",
                    "num": ""
                }
            ]
        }
    }
    quit=()=>{
        sessionStorage.clear();
        this.props.history.push("/")
    }
    toReg=()=>{
        this.props.history.push("/reg")
    }
    toLogin=()=>{
        this.props.history.push("/login")
    }
    render() {
        let { list } = this.state;
        return (
            <div>
                <header className="head_img">
                    <div className="head_tou">
                        <i>
                            <img src={"http://imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg2.mtime.cn%2Fimages%2Fdefault%2Fhead.gif&width=100&height=100&clipType=4"} />
                        </i>
                        <dl>
                            <dt>{sessionStorage.getItem("username")}</dt> {/*?{sessionStorage.getItem("username")}<div>注销</div>:<div>请登录</div>}*/}
                            <dd>余额：￥0</dd>
                        </dl>
                    </div>
                    <div className="head_ff">
                        <button onClick={this.toReg}>注册</button>|<button onClick={this.toLogin}>登陆</button>
                    </div>
                </header>

                <section className="head_one">
                    <ul className="one_ul">
                        <li className="one_li">
                            <i className="one_i"></i>
                            <p className="one_p">购物车</p>
                        </li>
                        <li className="one_li">
                            <i className="two_i"></i>
                            <p className="one_p">电影票订单</p>
                        </li>
                        <li className="one_li">
                            <i className="three_i"></i>
                            <p className="one_p">商品订单</p>
                        </li>
                    </ul>
                </section>

                <section className="main"> {/* ul  列表  */}
                    <ul className="main_ul">
                        {
                            // console.log(list)
                            list.map((item, index) => {
                                return <li className="main_li" key={index}>
                                    <div className="li_left">
                                        <i><img className="i_img" src={item.image} /></i>
                                        <p className="li_p">{item.name}</p>
                                    </div>
                                    <div className="li_right">
                                        <span>{item.num}</span>
                                        <Icon type="right" />
                                    </div>
                                </li>
                            })
                        }

                    </ul>
                </section>

                <section className="feedback ">  {/*意见反馈*/}
                    <ul className="main_ul">
                        <li className="main_li">
                        <p className="li_p">意见反馈</p>
                        <Icon type="right" />
                        </li>
                        <li className="main_li">
                        <p className="li_p">商城使用帮助</p>
                        <Icon type="right" />
                        </li>
                        <li className="main_li">
                        <p className="li_p">购票使用帮助</p>
                        <Icon type="right" />
                        </li>
                    </ul>
                </section>

                <section className="fot_but">
                <Button className="fot_button" type="warning" onClick={this.quit}>退出登陆</Button>
                </section>
            </div>
        )
    }
}
