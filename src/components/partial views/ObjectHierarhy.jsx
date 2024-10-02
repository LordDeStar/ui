import { Button, Input } from "antd"
import {PlusCircleOutlined} from '@ant-design/icons'
import { useState } from "react"
import { ObjectItem } from "./ObjectItem"
export const ObjectHierarhy = ()=>{
    const [objectList, setObjects] = useState([{title: "test"}, {title: "sdsdfs"}, {title: "texfgkd"}])
    const search = (value, _, __) =>{
        setObjects(objectList.filter(item => item.title.includes(value)))
    }
    return (
        <div style={{height: '100%'}}>
            <div style={{display: 'flex', flexDirection:'row' }}>
                <Input.Search
                    placeholder="Enter name"
                    onSearch={search}/>
                <Button 
                    icon={<PlusCircleOutlined />}/>
            </div>
            <div className="object-list">
                    {objectList.map((item) => {return <ObjectItem title={item.title} />})}
                </div>
        </div>
    )
}