import { Card } from "antd";
import { useState } from "react";
import {SignIn} from './components/partial views/SignIn'
import { SignUp } from "./components/partial views/SignUp";

let tabs = [
    {
        key: 'in',
        tab: 'Sign In'
    },
    {
        key: 'up',
        tab: 'Sign Up'
    }
]
let parts = {
    in: <SignIn />,
    up: <SignUp />
}
export const Main = () => {
    const [activeKey, setActiveKey] = useState('in')
    const onChange = (key) =>{
        setActiveKey(key)
    }
    return (
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh'}}>
            <Card
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