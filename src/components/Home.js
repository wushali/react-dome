import React,{Component} from 'react';

import NavMid from './NavMid'
import Main from './Main'
import Special from './Special'


import RightBar from './RightBar'

import '../assets/css/style.css';
import pubsub from 'pubsub-js';

class Home extends Component{
    // constructor(){
    //     super();
    //     this.state={
    //         listData:[]
    //     };
    // }
    // componentWillUnmount(){
    //     homeIsMounted=false;
    // }
    // componentDidMount(){
    //     this.props.router.replace("/home");
    //     homeIsMounted=true;
    //     pubsub.publish('conLoading',true);
    //     fetch('/src/data/index.data').then((res)=>{
    //         if(res.ok){
    //             res.json().then((data)=>{
    //                 setTimeout(()=>{
    //                     pubsub.publish('conLoading',false);
    //                     if(!homeIsMounted) return;
    //                     this.setState({
    //                         listData:data
    //                     })
    //                 },2000);
    //             });
    //         }
    //     }).catch((res)=>{
    //         console.log('home component error')
    //     })
    // }
    render(){
        return(
            <div className="home" >
                <NavMid/>

                <Main />
                <Special/>

                <RightBar/>

            </div>
        );
    }
}
export default Home;