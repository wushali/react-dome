import React,{Component} from 'react';

import Slider from './Slider';
import NewsList from './NewsList';
import {Link} from 'react-router';


class Main extends Component{

    render(){
        let {listData} =this.props;
        return(
            <div>


                <div id="main-wrap" className=" clearfix">
                    <div id="main-header-nav">

                        <div id="main" className="clearfix">
                            <ul className="nav_list">
                                <li className="home">全部商品</li>
                                <li>
                                    <a rel="nofollow" href="#">团购</a>
                                </li>
                                <li>
                                    <a rel="nofollow" href="#">快抢</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="primary_wrap clearfix">

                        {/*<div className="main-left-nav">*/}
                            {/*<ul className="primary_nav_list">*/}
                                {/*<li className="cloth cloth-first clearfix">*/}
                                    {/*<a href="#" className="item">上衣</a>*/}
                                    {/*<ol>*/}
                                        {/*<li>*/}
                                            {/*<a href="#">抢新衣</a><span> | </span></li>*/}
                                        {/*<li> &nbsp;*/}
                                            {/*<a href="#">时尚套装</a><span> | </span></li>*/}
                                        {/*<li>&nbsp;*/}
                                            {/*<a href="#">t恤</a>*/}
                                        {/*</li>*/}
                                    {/*</ol>*/}
                                    {/*<i className="right-side-border"></i>*/}
                                    {/*<i className="top-side-border"></i>*/}
                                    {/*<i className="bottom-side-border"></i>*/}
                                {/*</li>*/}
                                {/*<li className="cloth clearfix">*/}
                                    {/*<a href="#" className="item">裙子</a>*/}
                                    {/*<ol>*/}
                                        {/*<li>*/}
                                            {/*<a href="#">抢新衣</a><span> | </span></li>*/}
                                        {/*<li>&nbsp;*/}
                                            {/*<a href="#">时尚套装</a><span> | </span></li>*/}
                                        {/*<li>&nbsp;*/}
                                            {/*<a href="#">t恤</a>*/}
                                        {/*</li>*/}
                                    {/*</ol>*/}
                                    {/*<i className="right-side-border"></i>*/}
                                    {/*<i className="top-side-border"></i>*/}
                                    {/*<i className="bottom-side-border"></i>*/}
                                {/*</li>*/}
                                {/*<li className="cloth clearfix">*/}
                                    {/*<a href="#" className="item">裤子</a>*/}
                                    {/*<ol>*/}
                                        {/*<li>*/}
                                            {/*<a href="#">抢新衣</a><span> | </span></li>*/}
                                        {/*<li>&nbsp;*/}
                                            {/*<a href="#">时尚套装</a><span> | </span></li>*/}
                                        {/*<li>&nbsp;*/}
                                            {/*<a href="#">t恤</a>*/}
                                        {/*</li>*/}
                                    {/*</ol>*/}
                                    {/*<i className="right-side-border"></i>*/}
                                    {/*<i className="top-side-border"></i>*/}
                                    {/*<i className="bottom-side-border"></i>*/}
                                {/*</li>*/}
                                {/*<li className="cloth clearfix">*/}
                                    {/*<a href="#" className="item">内衣</a>*/}
                                    {/*<ol>*/}
                                        {/*<li>*/}
                                            {/*<a href="#">抢新衣</a><span> | </span></li>*/}
                                        {/*<li>&nbsp;*/}
                                            {/*<a href="#">时尚套装</a><span> | </span></li>*/}
                                        {/*<li>&nbsp;*/}
                                            {/*<a href="#">t恤</a>*/}
                                        {/*</li>*/}
                                    {/*</ol>*/}
                                    {/*<i className="right-side-border"></i>*/}
                                    {/*<i className="top-side-border"></i>*/}
                                    {/*<i className="bottom-side-border"></i>*/}
                                {/*</li>*/}
                                {/*<li className="cloth clearfix">*/}
                                    {/*<a href="#" className="item">鞋子</a>*/}
                                    {/*<ol>*/}
                                        {/*<li>*/}
                                            {/*<a href="#">抢新衣</a><span> | </span></li>*/}
                                        {/*<li>&nbsp;*/}
                                            {/*<a href="#">时尚套装</a><span> | </span></li>*/}
                                        {/*<li>&nbsp;*/}
                                            {/*<a href="#">t恤</a>*/}
                                        {/*</li>*/}
                                    {/*</ol>*/}
                                    {/*<i className="right-side-border"></i>*/}
                                    {/*<i className="top-side-border"></i>*/}
                                    {/*<i className="bottom-side-border"></i>*/}
                                {/*</li>*/}
                                {/*<li className="cloth clearfix">*/}
                                    {/*<a href="#" className="item">男友</a>*/}
                                    {/*<ol>*/}
                                        {/*<li>*/}
                                            {/*<a href="#">抢新衣</a><span> | </span></li>*/}
                                        {/*<li>&nbsp;*/}
                                            {/*<a href="#">时尚套装</a><span> | </span></li>*/}
                                        {/*<li>&nbsp;*/}
                                            {/*<a href="#">t恤</a>*/}
                                        {/*</li>*/}
                                    {/*</ol>*/}
                                    {/*<i className="right-side-border"></i>*/}
                                    {/*<i className="top-side-border"></i>*/}
                                    {/*<i className="bottom-side-border"></i>*/}
                                {/*</li>*/}
                                {/*<li className="cloth clearfix">*/}
                                    {/*<a href="#" className="item">包包</a>*/}
                                    {/*<ol>*/}
                                        {/*<li>*/}
                                            {/*<a href="#">抢新衣</a><span> | </span></li>*/}
                                        {/*<li>&nbsp;*/}
                                            {/*<a href="#">时尚套装</a><span> | </span></li>*/}
                                        {/*<li>&nbsp;*/}
                                            {/*<a href="#">t恤</a>*/}
                                        {/*</li>*/}
                                    {/*</ol>*/}
                                    {/*<i className="right-side-border"></i>*/}
                                    {/*<i className="top-side-border"></i>*/}
                                    {/*<i className="bottom-side-border"></i>*/}
                                {/*</li>*/}
                                {/*<li className="cloth clearfix">*/}
                                    {/*<a href="#" className="item">运动</a>*/}
                                    {/*<ol>*/}
                                        {/*<li>*/}
                                            {/*<a href="#">抢新衣</a><span> | </span></li>*/}
                                        {/*<li>&nbsp;*/}
                                            {/*<a href="#">时尚套装</a><span> | </span></li>*/}
                                        {/*<li>&nbsp;*/}
                                            {/*<a href="#">t恤</a>*/}
                                        {/*</li>*/}
                                    {/*</ol>*/}
                                    {/*<i className="right-side-border"></i>*/}
                                    {/*<i className="top-side-border"></i>*/}
                                    {/*<i className="bottom-side-border"></i>*/}
                                {/*</li>*/}
                                {/*<li className="cloth clearfix">*/}
                                    {/*<a href="#" className="item">美妆</a>*/}
                                    {/*<ol>*/}
                                        {/*<li>*/}
                                            {/*<a href="#">抢新衣</a><span> | </span></li>*/}
                                        {/*<li>&nbsp;*/}
                                            {/*<a href="#">时尚套装</a><span> | </span></li>*/}
                                        {/*<li>&nbsp;*/}
                                            {/*<a href="#">t恤</a>*/}
                                        {/*</li>*/}
                                    {/*</ol>*/}
                                    {/*<i className="right-side-border"></i>*/}
                                    {/*<i className="top-side-border"></i>*/}
                                    {/*<i className="bottom-side-border"></i>*/}
                                {/*</li>*/}
                                {/*<li className="cloth clearfix">*/}
                                    {/*<a href="#" className="item">配饰</a>*/}
                                    {/*<ol>*/}
                                        {/*<li>*/}
                                            {/*<a href="#">抢新衣</a><span> | </span></li>*/}
                                        {/*<li>&nbsp;*/}
                                            {/*<a href="#">时尚套装</a><span> | </span></li>*/}
                                        {/*<li>&nbsp;*/}
                                            {/*<a href="#">t恤</a>*/}
                                        {/*</li>*/}
                                    {/*</ol>*/}
                                    {/*<i className="right-side-border"></i>*/}
                                    {/*<i className="top-side-border"></i>*/}
                                    {/*<i className="bottom-side-border"></i>*/}
                                {/*</li>*/}
                                {/*<li className="cloth clearfix">*/}
                                    {/*<a href="#" className="item">家居</a>*/}
                                    {/*<ol>*/}
                                        {/*<li>*/}
                                            {/*<a href="#">抢新衣</a><span> | </span></li>*/}
                                        {/*<li>&nbsp;*/}
                                            {/*<a href="#">时尚套装</a><span> | </span></li>*/}
                                        {/*<li>&nbsp;*/}
                                            {/*<a href="#">t恤</a>*/}
                                        {/*</li>*/}
                                    {/*</ol>*/}
                                    {/*<i className="right-side-border"></i>*/}
                                    {/*<i className="top-side-border"></i>*/}
                                    {/*<i className="bottom-side-border"></i>*/}
                                {/*</li>*/}
                                {/*<li className="cloth clearfix">*/}
                                    {/*<a href="#" className="item">母婴</a>*/}
                                    {/*<ol>*/}
                                        {/*<li>*/}
                                            {/*<a href="#">抢新衣</a><span> | </span></li>*/}
                                        {/*<li>&nbsp;*/}
                                            {/*<a href="#">时尚套装</a><span> | </span></li>*/}
                                        {/*<li>&nbsp;*/}
                                            {/*<a href="#">t恤</a>*/}
                                        {/*</li>*/}
                                    {/*</ol>*/}
                                    {/*<i className="right-side-border"></i>*/}
                                    {/*<i className="top-side-border"></i>*/}
                                    {/*<i className="bottom-side-border"></i>*/}
                                {/*</li>*/}
                                {/*<li className="cloth clearfix">*/}
                                    {/*<a href="#" className="item">零食</a>*/}
                                    {/*<ol>*/}
                                        {/*<li>*/}
                                            {/*<a href="#">抢新衣</a><span> | </span></li>*/}
                                        {/*<li>&nbsp;*/}
                                            {/*<a href="#">时尚套装</a><span> | </span></li>*/}
                                        {/*<li>&nbsp;*/}
                                            {/*<a href="#">t恤</a>*/}
                                        {/*</li>*/}
                                    {/*</ol>*/}
                                    {/*<i className="right-side-border"></i>*/}
                                    {/*<i className="top-side-border"></i>*/}
                                    {/*<i className="bottom-side-border"></i>*/}
                                {/*</li>*/}
                                {/*<li className="cloth clearfix">*/}
                                    {/*<a href="#" className="item">百货</a>*/}
                                    {/*<ol>*/}
                                        {/*<li>*/}
                                            {/*<a href="#">抢新衣</a><span> | </span></li>*/}
                                        {/*<li>&nbsp;*/}
                                            {/*<a href="#">时尚套装</a><span> | </span></li>*/}
                                        {/*<li>&nbsp;*/}
                                            {/*<a href="#">t恤</a>*/}
                                        {/*</li>*/}
                                    {/*</ol>*/}
                                    {/*<i className="right-side-border"></i>*/}
                                    {/*<i className="top-side-border"></i>*/}
                                    {/*<i className="bottom-side-border"></i>*/}
                                {/*</li>*/}
                            {/*</ul>*/}

                            {/*<div className="cloth-more">*/}
                                {/*<div className="cloth-wrap">*/}

                                    {/*/!*<ul>*!/*/}
                                        {/*/!*{*!/*/}
                                            {/*/!*listData.map((item,index)=>{*!/*/}
                                                {/*/!*return (*!/*/}
                                                    {/*/!*<li key={item.id}>*!/*/}
                                                        {/*/!*<Link to={{pathname:'/article/'+item.id}}>*!/*/}
                                                            {/*/!*<h2>{item.id}.{item.title}</h2>*!/*/}
                                                            {/*/!*<p dangerouslySetInnerHTML={{__html:item.detail}}></p>*!/*/}
                                                        {/*/!*</Link>*!/*/}
                                                    {/*/!*</li>*!/*/}
                                                {/*/!*);*!/*/}
                                            {/*/!*})*!/*/}
                                        {/*/!*}*!/*/}
                                    {/*/!*</ul>*!/*/}
                                    {/*<h4><a href="#">新品发布3</a></h4>*/}

                                    {/*<span><a href="#">衬衫 </a></span>*/}
                                    {/*<span><a href="#">雪纺衫 </a></span>*/}
                                    {/*<span><a href="#">防晒衫 </a></span>*/}
                                    {/*<span><a href="#">娃娃衫 </a></span>*/}
                                    {/*<span><a href="#">背心吊带 </a></span>*/}
                                    {/*<span><a href="#">针织衫</a></span>*/}
                                    {/*<span><a href="#">字母T恤 </a></span>*/}
                                    {/*<span><a href="#">绑带衬衫 </a></span>*/}
                                    {/*<span><a href="#">俏皮露肩 </a></span>*/}
                                    {/*<span><a href="#">夏日花卉 </a></span>*/}
                                {/*</div>*/}
                                {/*<div className="cloth-wrap">*/}
                                    {/*<h4><a href="#">新品发布</a></h4>*/}

                                    {/*<span><a href="#">衬衫 </a></span>*/}
                                    {/*<span><a href="#">雪纺衫 </a></span>*/}
                                    {/*<span><a href="#">防晒衫 </a></span>*/}
                                    {/*<span><a href="#">娃娃衫 </a></span>*/}
                                    {/*<span><a href="#">背心吊带 </a></span>*/}
                                    {/*<span><a href="#">针织衫</a></span>*/}
                                    {/*<span><a href="#">字母T恤 </a></span>*/}
                                    {/*<span><a href="#">绑带衬衫 </a></span>*/}
                                    {/*<span><a href="#">俏皮露肩 </a></span>*/}
                                    {/*<span><a href="#">夏日花卉 </a></span>*/}
                                {/*</div>*/}
                            {/*</div>*/}










                        {/*</div>*/}
                        <NewsList/>
                        <Slider/>
                        {/*<!-- Swiper -->*/}


                        <div className="right-pic-wrap">
                   <span>
                       <Link to={{pathname:"/detailed/001",query:{a:1,b:2}}}><img src="src/assets/img/banner/er_ie4wgoddmizggolehezdambqgqyde_180x220.jpg" /></Link>
                   </span>
                            <span>
                       <a href="#"><img src="src/assets/img/banner/in_ie4wimdcmeytqzlehezdambqgqyde_180x220.jpg" /></a>
                   </span>
                        </div>
                    </div>
                </div>







            </div>
        );
    }
}
export default Main;