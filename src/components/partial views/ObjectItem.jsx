import { Typography } from "antd"
import {DownSquareOutlined, RightSquareOutlined} from '@ant-design/icons'
import { useState } from "react"

const {Text} = Typography

export const ObjectItem = ({title})=>{
    const [isExtended, setIsExtended] = useState(false)
    const clickHandler=()=>{
        setIsExtended(!isExtended)
    }
    return (
        <div style={{display: 'flex', flexDirection: 'row', gap: '5px'}} onClick={()=>{clickHandler()}}>
            {isExtended ? <DownSquareOutlined /> : <RightSquareOutlined />}
            <Text>{title}</Text>
        </div>
    ) 
}