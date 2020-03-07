import React, { Component } from 'react'
import "../../assets/font/iconfont.css"
import "./index.css"
import { SearchBar, Carousel, WingBlank, Grid, Button, Icon } from 'antd-mobile';


export default class Shopping extends Component {
    constructor(props) {
        super(props)
        this.state = {
            list: [{
                icon: "http://imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg5.mtime.cn%2Fmg%2F2017%2F02%2F07%2F161133.99290860.jpg",
                text: "模玩"
            },
            {
                icon: "http://imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg5.mtime.cn%2Fmg%2F2017%2F02%2F07%2F161141.82690725.jpg",
                text: "数码"
            },
            {
                icon: "http://imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg5.mtime.cn%2Fmg%2F2017%2F02%2F07%2F161148.25620959.jpg",
                text: "服饰"
            },
            {
                icon: "http://imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg5.mtime.cn%2Fmg%2F2017%2F02%2F07%2F161155.82939104.jpg",
                text: "家居"
            },
            {
                icon: "http://imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg5.mtime.cn%2Fmg%2F2017%2F02%2F07%2F161224.10155577.jpg",
                text: "星战"
            },
            {
                icon: "http://imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg5.mtime.cn%2Fmg%2F2017%2F02%2F07%2F161315.97010262.jpg",
                text: "漫威"
            },
            {
                icon: "http://imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg5.mtime.cn%2Fmg%2F2019%2F07%2F23%2F142033.71638312.jpg",
                text: "新品"
            },
            {
                icon: "http://imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg5.mtime.cn%2Fmg%2F2017%2F02%2F07%2F161342.70896250.jpg",
                text: "全部"
            },
            ],
            listData: [],
            toyList: [],
            goodsList: [],
        }
    }

    componentDidMount() {
        fetch("api/PageSubArea/MarketFirstPageNew.api?t=20203517105796412").then((res) => res.json()).then((res) => {
            //  console.log(res.topic[0].subList)
            // console.log(res.category);
            this.setState({
                listData: res.topic[0].subList,
                toyList: res.category,
            })
        });
        fetch("api//ECommerce/RecommendProducts.api?t=20203618542228974&goodsIds=108795%2C108155&pageIndex=1").then((res) => res.json()).then((res) => {
            console.log(res.goodsList)
            this.setState({
                goodsList: res.goodsList
            })
        })
    }
    render() {
        let { list, listData, toyList, goodsList } = this.state;
        const data = list.map((item) => ({
            icon: item.icon,
            text: item.text,
        }));
        return (
            <div>
                <header className="shoping_header">  {/* 搜索框 */}
                    <SearchBar className="sp_ip" placeholder="Search" maxLength={8} />
                    <span className="cart"></span>
                </header>

                <section>  {/* 轮播图 */}
                    <WingBlank>
                        <Carousel
                            autoplay={true}
                            infinite
                            autoplayInterval={1000}
                        >
                            <img src={require("../../assets/lb1.jpg")} />
                            <img src={require("../../assets/lb2.jpg")} />
                            <img src={require("../../assets/lb3.jpg")} />
                            <img src={require("../../assets/lb4.jpg")} />
                        </Carousel>
                    </WingBlank>
                </section>

                <section className="shoping_gezi"> {/*宫格*/}
                    <Grid data={data} activeStyle={true} />
                </section>

                <section className="shoping_img">  {/* 图片 */}
                    <div className="img_left">
                        <img src={require("../../assets/main1.jpg")} />
                    </div>
                    <div className="img_right">
                        <img src={require("../../assets/main2.jpg")} />
                        <img src={require("../../assets/main3.jpg")} />
                    </div>
                    <div className="img_bot">
                        <img src={require("../../assets/main4.jpg")} />
                    </div>
                </section>

                <section className="league">  {/* 正义联盟  league */}
                    <div className="league_img">
                        <img className="league_imgs" src={require("../../assets/fcz.jpg")} />
                    </div>
                    <h4 className="league_tex">Justice League</h4>
                    <h3 className="league_title">正义联盟</h3>
                    <ul className="league_ul">
                        {
                            listData.map((ele, index) => {
                                return <li className="league_li" key={index}>
                                    <img className="league_imgs" src={ele.image} />
                                    <p className="league_nr">{ele.title}</p>
                                    <p className="league_q">￥<strong className="league_pri">{ele.goodsId}</strong></p>
                                </li>
                            })
                        }
                    </ul>
                    <div className="league_b">
                        <Button type="primary" inline className="league_but" >更多商品 <Icon type={"right"} size={"xxs"} /></Button>
                    </div>
                </section>


                {/* 一大图，三小图   玩具模型  toy*/}
                {
                    toyList.map((item, index) => {
                        return <section className="toy" key={index}>
                            <div className="toy_header">
                                <h3 className="toy_title"><i></i>{item.name}</h3>
                                <p className="toy_tit">更多<Icon type="right" size={"lg"} /></p>
                            </div>
                            <div className="toy_centre">
                                <img src={item.image} />
                            </div>
                            <ul className="toy_foot">
                                {item.subList.map((ele, index) => {
                                    return <li key={index}>
                                        <img src={ele.image} />
                                        <p className="foot_title">{ele.title}</p>
                                        <p className="foot_price">￥<strong>{ele.goodsId}</strong></p>
                                    </li>
                                })} </ul>
                        </section>
                    })
                }

                {/* 你可能感兴趣的  inter */}
                <aside className="inter">
                    <h2 className="inter_h2">
                        <i>•</i>
                        <b>你可以感兴趣的</b>
                    </h2>
                </aside>

                {/* 板块 */}
                <section className="shop_fot">
                    <ul className="fot_ul">
                        {
                            goodsList.map((item, index) => {
                                return <li className="fot_li" key={index}>
                                    <div className="fot_new">{item.iconText}</div>
                                    <div className="fot_img">
                                        <img src={item.image} />
                                    </div>
                                    <dl className="fot_dl">
                                        <dt className="fot_dt"><em>{item.goodsTip}</em>{item.name}</dt>
                                        <dd className="fot_dd">
                                            ￥<b>{item.minSalePrice}</b>
                                        </dd>
                                    </dl>
                                </li>
                            })
                        }
                    </ul>

                </section>
            </div>
        )
    }
}
