import React,{Component} from 'react';

class Detail extends Component{
      constructor(props){
        super(props);
        this.state={
          tabs:[
              {src:"src/assets/images/product_content/s1.jpg_100x100.jpg",id:1},
              {src:"src/assets/images/product_content/s2.jpg_100x100.jpg",id:2},
              {src:"src/assets/images/product_content/s3.jpg_100x100.jpg",id:3},
              {src:"src/assets/images/product_content/s4.jpg_100x100.jpg",id:4},
              {src:"src/assets/images/product_content/s5.jpg_100x100.jpg",id:5}

          ],
            currentIndex:1
        };
      }
      componentDidMount(){

      }
      tabChoiced=(id)=>{
          //tab切换到方法
          this.setState({
              currentIndex:id
          });
      }
    render(){
        var _this=this;
        var isBox1Show=this.state.currentIndex==1 ? 'block' : 'none';
        var isBox2Show=this.state.currentIndex==2 ? 'block' : 'none';
        var isBox3Show=this.state.currentIndex==3 ? 'block' : 'none';
        var isBox4Show=this.state.currentIndex==4 ? 'block' : 'none';
        var isBox5Show=this.state.currentIndex==5 ? 'block' : 'none';


        var tabList= this.state.tabs.map(function(res,index) {
            // 遍历标签页，如果标签的id等于tabid，那么该标签就加多一个active的className
            var tabStyle=res.id==this.state.currentIndex ? 'subCtrl active' : 'subCtrl';

            return    <li key={index} onMouseOver={this.tabChoiced.bind(_this,res.id)} className={tabStyle}>
              <img src={res.src} alt="" />
            </li>

        }.bind(_this));


    return (
        <div className="img_list">

          <div className="b_img">
            <img  style={{"display":isBox1Show}}  src="src/assets/images/product_content/s1.jpg_468x468.jpg" alt="" />
            <img   style={{"display":isBox2Show}} src="src/assets/images/product_content/s2.jpg_468x468.jpg" alt=""/>
            <img   style={{"display":isBox3Show}} src="src/assets/images/product_content/s3.jpg_468x468.jpg" alt=""/>
            <img  style={{"display":isBox4Show}} src="src/assets/images/product_content/s4.jpg_468x468.jpg" alt=""/>
            <img style={{"display":isBox5Show}}  src="src/assets/images/product_content/s5.jpg_468x468.jpg" alt=""/>
          </div>
          <div className="s_img">
            <ul className="clearfix">

                {tabList}
              {/*<li id="img1" data-src="src/assets/images/product_content/s1.jpg_468x468.jpg" >*/}
                {/*<img  src="src/assets/images/product_content/s1.jpg_100x100.jpg" alt="" />*/}
              {/*</li>*/}
              {/*<li id="img2" data-src="src/assets/images/product_content/s2.jpg_468x468.jpg">*/}
                {/*<a href="img2"> <img  src="src/assets/images/product_content/s2.jpg_100x100.jpg" alt="" /></a>*/}
              {/*</li>*/}
              {/*<li data-src="src/assets/images/product_content/s3.jpg_468x468.jpg" >*/}
                {/*<img src="src/assets/images/product_content/s3.jpg_100x100.jpg" alt="" />*/}
              {/*</li>*/}
              {/*<li data-src="src/assets/images/product_content/s4.jpg_468x468.jpg" >*/}
                {/**/}
              {/*</li>*/}
              {/*<li data-src="src/assets/images/product_content/s5.jpg_468x468.jpg" >*/}
                {/*<img src="src/assets/images/product_content/s5.jpg_100x100.jpg" alt="" />*/}
              {/*</li>*/}


            </ul>
          </div>

        </div>
    );
  }
}
export default Detail;