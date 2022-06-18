import React, {Component} from 'react'
import { Layout, Breadcrumb, Image} from 'antd'
// import './style.css'

const {Content} = Layout;



class Cont extends Component {
    LoadHome = () =>{
        return(
            <div>
                <h2 style={{textAlign:'center'}}>Welcome to Our Shop</h2>
                <div style={{padding:50,width:'auto', display:'flex', border:'1px solid lightgray', borderRadius:20}}>
                    <Image src='https://blog.atome.id/wp-content/uploads/2021/04/1-Layar-dengan-Tingkat-Kecerahan-yang-Baik.jpg' height='300px' width='1000px' />
                    <p style={{margin:30, font:'caption', width:'100%'}}>Hello There, Welcome to Our Shop!</p>
                    <p>GadgetIn.DotCom</p>
                    
                </div>
            </div>
        )
    }

    render() {
        return (
            <Content style={{ margin: '0 16px' }}>
                <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>Shop</Breadcrumb.Item>
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                </Breadcrumb>
                <div className="site-layout-background" style={{ padding: 24, minHeight: 400 }}>
                    <this.LoadHome/>
                </div>
            </Content>
        );
    }
}


export default Cont