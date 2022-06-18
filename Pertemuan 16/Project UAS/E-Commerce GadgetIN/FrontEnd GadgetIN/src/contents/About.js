import {Layout, Breadcrumb, Image, List } from 'antd'
import React from 'react'
import profileImg from '../Assets/polinema.jpg'

const {Content} = Layout

const About = () => {
    return(
        <Content style={{ margin: '0 16px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Shop</Breadcrumb.Item>
            <Breadcrumb.Item>About</Breadcrumb.Item>
        </Breadcrumb>
        <div className="site-layout-background" style={{ padding: 24, minHeight: 400, minWidth:300}}>
            <h2 style={{textAlign:'center'}}>About Me</h2>
            <div style={{padding:50,width:'auto', display:'flex', border:'1px solid lightgray', borderRadius:10}}>
                <Image src={profileImg} style={{maxHeight: 200, maxWidth:200, height:'auto', width:'auto'}} />
                <div style={{flexWrap: 'wrap', marginLeft: 10, padding:20}}>
                    <p style={{fontSize: 15}}>
                        Hai, perkenalkan saya :<br/>
                        <p>Fabio Christiano Malisan</p>
                        Mahasiswa aktif di Politeknik Negeri Malang<br/>
                        Jurusan Teknologi Informasi<br/>
                        jika ada pertanyaan silahkan kontak saya dibawah ini :
                    </p>
                    <List >
                            <List.Item key='instagram' style={{padding:'0px'}}>
                                Instagram: <a href='https://instagram.com/fabiochristianomalisan?igshid=YmMyMTA2M2Y=' target='#blank'>https://instagram.com/fabiochristianomalisan?igshid=YmMyMTA2M2Y=</a>
                            </List.Item>
                        </List>
                </div>
            </div>
        </div>
        </Content>
    )
}

export default About