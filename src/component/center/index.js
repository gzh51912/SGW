import React, { Component } from 'react'
import "./index.css"
import {Icon} from "antd-mobile"
export default class Center extends Component {
    render() {
        return (
            <div>
                <header className="head_img">
                    <div className="head_tou">
                        <i>
                            <img src={"http://imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg2.mtime.cn%2Fimages%2Fdefault%2Fhead.gif&width=100&height=100&clipType=4"} />
                        </i>
                        <dl>
                            <dt>果断的应采灵9670</dt>
                            <dd>余额：￥0</dd>
                        </dl>
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
                        <li className="main_li">
                            <div className="li_left">   
                                <i><img src={"http://static1.mtime.cn/html5/20200116143308/images/2014/my_card.png"} /></i>
                                <p></p>
                            </div>
                            <div className="li_right">
                                <span></span>
                                <Icon type="right" />
                            </div>

                        </li>
                    </ul>
                </section>

            </div>
        )
    }
}
