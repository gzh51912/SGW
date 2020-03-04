import React, { Component } from 'react'
import "./index.css"
import { SearchBar, Icon, Grid } from 'antd-mobile';
export default class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            value: '美食',
        };
    }
    render() {
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
                <section>

                </section>

            </div>
        )
    }
}
