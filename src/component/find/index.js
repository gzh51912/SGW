import React, { Component } from 'react'
import "./index.css"
import axios from 'axios'
export default class Find extends Component {
    constructor(props){
        super(props)
        this.state={
            list:[]
        }
    }
    componentDidMount(){
        axios.get("http://localhost:1920/users/newlist").then((res)=>{
            this.setState({
                        list:res.data.newsList
                    })
        })
        // fetch("/api/News/NewsList.api?t=20203821112239230&pageIndex=1").then((res)=>res.json()).then((res)=>{
        //     // console.log(res.newsList)
        //     this.setState({
        //         list:res.newsList
        //     })
        // })
    }
    render() {
        let {list} = this.state
        return (
            <div>
                <ul className="find_ul">
                    <li>新闻</li>
                    <li>预告片</li>
                    <li>排行榜</li>
                    <li>影评</li>
                </ul>

                <section className="find_swi">
                    <img src={"http://imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg5.mtime.cn%2Fmg%2F2019%2F07%2F18%2F102211.29411290.jpg&width=640&height=360&clipType=3"} />
                </section>

                <section className="find_list">

                <ul className="find_list_ul">
                    {
                        list.map((ele,index)=>{
                            return  <li className="find_list_li" key={index}>
                        <div className="find_li_left">
                            <img src={ele.image} />
                        </div>
                        <div className="find_li_right">
                            <p className="right_name">{ele.title}</p>
                            <p className="right_time">{ele.publishTime}*1000</p>
                        </div>
                    </li>
                        })
                    }
                   
                </ul>
                </section>
            </div>
        )
    }
}
