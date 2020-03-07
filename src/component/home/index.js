import React, { Component } from 'react'
import "./index.css"
import { SearchBar, Icon } from 'antd-mobile';
export default class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            value: '美食',
            listData: [],
            falls:[],
        };
    }
    componentDidMount() {
        fetch("/api/Showtime/LocationMovies.api?locationId=290&t=202034205721430").then((res) => res.json()).then((res) => {
            // console.log(res)   代理热映中的接口
            this.setState({
                listData: res.ms
            })
        });
        fetch("/hd/article/originalInfoList.api").then((res) => res.json()).then((res) => {
            //  console.log(res.data.list[0].images[0].isVideo)   //代理瀑布流接口     大图的判断，如果isVideo 为true,则用大图的样式
             console.log(res.data.list[5].images.length)   //  三个图的判断，如果images 里的length > 1  ,  则使用三个图的样式
            // console.log(res.data.list[4].images[0].isVideo)   // 小图的判断   isVideo:false 则使用 小图的样式
            // console.log(res.data.list)
            this.setState({
                falls: res.data.list
            })
        });
    }
    render() {
        let { listData,falls } = this.state;
        return (
            <div>
                <header className="header">     {/* 搜索框 */}
                    <p className="dizhi">上海 <Icon type={"down"} size={"xxs"} /></p>
                    {/* <SearchBar placeholder="自动获取光标" ref={ref => this.autoFocusInst = ref} /> */}
                    <SearchBar
                        value={this.state.value}
                        placeholder="Search"
                        onSubmit={value => console.log(value, 'onSubmit')}
                        onClear={value => console.log(value, 'onClear')}
                        onFocus={() => console.log('onFocus')}
                        onBlur={() => console.log('onBlur')}
                        onChange={this.onChange}
                    />
                </header>

                <section className="showing">   {/* 正在热映   showing  */}
                    <h2>正在热映（2部）<Icon type={"right"} size={"md"} className="showing_icon" /></h2>
                    <ul className="showing_ul">
                        {
                            listData.map((item) => {
                                return <li key={item.NearestDay}>
                                    <img src={item.img} />
                                    <p>{item.tCn}</p>
                                </li>
                            })
                        }
                    </ul>
                    <article className="indexclick">
                        <h2>
                            <b>即将上映（13部）</b>
                            <Icon type={"right"} size={"md"} className="showing_icon" />
                        </h2>
                    </article>
                </section>

                <section className="falls">     {/* 瀑布流   falls  */}
                    <div className="falls_img">
                        <img src={require("../../assets/falls.jpg")} />
                    </div>
                    <div className="falls_s">
                        <h2 className="falls_h2">今日热点</h2>
                        <ul className="falls_ul">
                        {
                            falls.map((ele,index)=>{
                                if(ele.images[0].isVideo == true && ele.images.length == 1){
                                    return  <li className="big_li" key={index}>  {/*大图样式*/ }
                                <img className="big_img" src={ele.images[0].imgUrl} />
                                <p className="falls_text">{ele.title}</p>
                                <p className="big_time">{ele.videoId}</p>
                                     </li>
                                }else if(ele.images[0].isVideo == false && ele.images.length == 1){
                                    return  <li className="small_li" key={index}>   {/* small 小图片的样式*/}
                                <img className="small_img" src={ele.images[0].imgUrl} />
                                <div className="small_right">
                                     <p className="small_text">{ele.title}</p>
                                     <p className="small_time">{ele.publishTime}</p>
                                </div>
                            </li>
                                }else if(ele.images.length > 1){
                                    // console.log(ele.images)
                                    return (<li className="three_li" key={index}>
                                   <p className="falls_text">{ele.title}</p>
                                        { ele.images.map((item,index)=>{
                                        return <img key={index} className="three_img" src={item.imgUrl} />
                                    })}
                                     <p className="three_time">{ele.publishTime}</p>
                                    </li>)
                                }
                            })
                        }
                        </ul>
                    </div>
                </section>
            
                <section className="more">  {/*更多*/}
                        <p className="more_text">查看更多</p>
                </section>
            </div>
        )
    }
}
