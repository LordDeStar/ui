import { Card } from "antd";
import { useState } from "react";
import {Auth} from './components/partial views/Authorizatuion'
import { Reg } from "./components/partial views/Registration";

let tabs = [
    {
        key: 'auth',
        tab: 'Authorization'
    },
    {
        key: 'reg',
        tab: 'Registration'
    }
]
let parts = {
    auth: <Auth />,
    reg: <Reg />
}
let authCardStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh'
}
export const Main = () => {
    const [activeKey, setActiveKey] = useState('auth')
    const onChange = (key) =>{
        setActiveKey(key)
    }
    return (
        <div style={authCardStyle}>
           <Card
           style={{
                alignSelf: 'center',
                justifySelf: 'center'
           }}
            title="Web Engine"
            tabList={tabs}
            activeTabKey={activeKey}
            onTabChange={onChange}
           >
            {parts[activeKey]}
           </Card>
        </div>
    ); 
}