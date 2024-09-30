import { useEffect, useState } from "react";
import { ProjectItem } from "./partial views/ProjectItem";
import { useDispatch, useSelector } from "react-redux";
import { fetchProjects, createProject } from "../store/slices/projectSlice";
import { Button, Typography, Modal, Input } from "antd";
import styles from '../styles/style.css'
const {Title} = Typography

export const Projects = ()=>{
  const dispatch = useDispatch()
  const projects = useSelector(state => state.project.projects)
  let isLoading = useSelector(state => state.project.loading)
  const user = useSelector(state=>state.user.current)
  const [title, setTitle] = useState("Loading...") 
  const [items, setItems] = useState([])
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [inputValue, setInputValue] = useState('')
  useEffect(()=>{
    dispatch(fetchProjects(user.Id))
  }, [])
  // loading anim
  useEffect(()=>{
    if (!isLoading){
      setTitle('Your projects')
      setItems(projects)
    }
    else{
      dispatch(fetchProjects(user.Id))
    }
  }, [isLoading])

  const okHandler = ()=>{
    dispatch(createProject({title: inputValue, id: user.Id}))
    setIsModalVisible(false)
  }
  const cancelHandler = ()=>{
    setIsModalVisible(false)
    setInputValue('')
  }

  return (
    <div style={{display:'flex', width: '100%', height:'100vh', justifyContent:'center'}}>
      <Modal title="Create new project" visible={isModalVisible} onOk={okHandler} onCancel={cancelHandler}>
        <Input placeholder="Input project title" onChange={e => setInputValue(e.target.value)} />
      </Modal>
      <div style={{marginLeft: '10%', marginTop:'5%'}}>
        <Title level={2} style={{textWrap:'nowrap'}}>{title}</Title>
        <div className='item-list'>
          {items.map(item =><ProjectItem title={item.Title}/>)}
        </div>
      </div>
      <div style={{marginLeft:'10%', marginTop:'10%'}}>
        <Button 
        type="primary"
        onClick={()=>{isLoading = true; setIsModalVisible(true)}}
        >Create new project</Button>
      </div>
    </div>
    
  );
}