import React, { Component } from 'react'
import { Icon } from "antd-mobile"
import "./index.css"
import axios from "axios"
export default class Ticket extends Component {
    constructor(props) {
        super(props)
        this.state = {
            list: []
        }
    }
    componentDidMount() {
        // fetch("/tick/onlineCinemasByCity.api?locationId=290&_=1583657217200").then((res)=>res.json()).then((res)=>{
        //     // console.log(res.data.cinemaList)
        //     this.setState({
        //          list:res.data.cinemaList
        //     }
        //     )
        // })
        axios.get("http://localhost:1920/users/tick").then((res) => {
            console.log(res)
            this.setState({
                list: res.data.data.cinemaList
            }
            )
        })

    }
    render() {
        let { list } = this.state
        return (
            <div>
                <header className="tick_header">
                    <div className="tick_left">广州 <Icon type={"down"} size={"xxs"} /></div>
                    <input className="tick_input" placeholder="筛选影院" type="text" />
                    <button className="tick_sear">搜索</button>
                </header>
                <ul className="tick_ul">
                    <li className="tick_li">离我最近<Icon type={"down"} size={"xxs"} /></li>
                    <li className="tick_li">全城<Icon type={"down"} size={"xxs"} /></li>
                    <li className="tick_li">影厅特效<Icon type={"down"} size={"xxs"} /></li>
                </ul>

                <section className="tick_main">
                    <img src={"http://static1.mtime.cn/frontend.ticket.ticket-h5/1.0.80/script/assets/404_location_3x_4eee0d46.png"} />
                    <p>位置获取失败，请开启定位功能</p>
                    <button>刷新</button>
                </section>

                <div className="tick_zy">以下影院均非时光网自营</div>

                <ul className="tick_fotul">
                    {
                        list.map((item, index) => {
                            return <li className="tick_fotli" key={index}>
                                <p className="fotli_name">{item.cinameName}</p>
                                <p className="fotli_title">{item.address}</p>
                            </li>
                        })
                    }
                </ul>
            </div>
        )
    }
}
