import React,{Component} from 'react';
import $ from 'jquery';
import Swipe from '../assets/js/swipe';
class Swiper extends Component{
  componentDidMount(){
    var mySwipe=new Swipe($('.swiper-container')[0],{
      auto:2000,
      continuous:true,
      stopPropation:true,
      callback:function (index,element){
        $('.swiper-container ol li').removeClass('active');
        $('.swiper-container ol li').eq(index).addClass('active');
      }
    })
  }
  render(){
    return (


        <div className="banner-wrap">

          <div className="swiper-container">
          <ul className="swiper-wrapper clearfix">
          <li className="swiper-slide"><a href="#"><img src="src/assets/img/banner/1gu_ifqwmojvhbtdmzdehezdambqgyyde_715x530.jpg"/></a></li>
      <li className="swiper-slide"><a href="#"><img src="src/assets/img/banner/260_ifrdiojtha2wmolehezdambqmeyde_715x530.jpg"/></a></li>
      <li className="swiper-slide"><a href="#"><img src="src/assets/img/banner/7b_ifqtgn3ehfrtsolehezdambqgyyde_715x530.jpg"/></a></li>
      <li className="swiper-slide"><a href="#"><img src="src/assets/img/banner/7m_ie4tmmlfgjrdsndehezdambqgqyde_715x530.jpg"/></a></li>
      <li className="swiper-slide"><a href="#"><img src="src/assets/img/banner/er_ifrdoobrmezgeolehezdambqmeyde_715x530.jpg"/></a></li>
      <li className="swiper-slide"><a href="#"><img src="src/assets/img/banner/in_ifrtmobzga3tmzlehezdambqhayde_715x530.jpg"/></a></li>
      <li className="swiper-slide"><a href="#"><img src="src/assets/img/banner/t1_ie4tgmrxgiytsodehezdambqgqyde_715x530.jpg"/></a></li>
      </ul>

    <div className="swiper-pagination"></div>

    {/*<div className="swiper-button-next"></div>*/}
    {/*<div className="swiper-button-prev"></div>*/}
    </div>
  </div>
    );
  }
}
export default Swiper;