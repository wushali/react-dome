import React,{Component} from 'react';
import NavBar from './NavBar'
import FootBar from './FootBar'
import Detailed from './Detailed'
import Loading from './Loading'
import '../assets/css/style.css';
import pubsub from 'pubsub-js';

class App extends Component{
    constructor(){
        super();
        this.state={
            bLoading:false
        };
        this.token=pubsub.subscribe('conLoading',(mess,data)=>{
            console.log('app',mess);
            console.log('app',data);
            this.setState({
                bLoading:data
            })
        });
    }
    componentWillMount(){ //最好要做的
        pubsub.unsubscribe( this.token );
    }
    render(){
        // let path=this.props.router.location.pathname;
        // let bNav=true,bFoot=true;
        // if(/home|follow|column/.test(path)){
        //     bNav=bFoot=true;
        // }
        // if(/login|reg|article/.test(path)){
        //     bNav=bFoot=false
        // }
        // if(/user/.test(path)){
        //     bNav=false;
        //     bFoot=true;
        // }
        return(
            <div>
                {this.state.bLoading?<Loading/>:''}
                <NavBar/>
                {this.props.children}
                <FootBar/>
                {/*<Detailed/>*/}
            </div>
        );
    }
}
export default App;