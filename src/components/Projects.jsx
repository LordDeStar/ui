import { useEffect, useState } from "react";
import { ProjectItem } from "./partial views/ProjectItem";
import { useDispatch, useSelector } from "react-redux";
import { fetchProjects, createProject } from "../store/slices/projectSlice";
import { Button, Typography, Modal, Input } from "antd";
import styles from '../styles/style.css'
const {Title} = Typography
const {TextArea} = Input
export const Projects = ()=>{
  const dispatch = useDispatch()
  const projects = useSelector(state => state.project.projects)
  const [isLoading, setIsLoading] = useState(false)
  const user = useSelector(state=>state.user.current)
  const [title, setTitle] = useState("Loading...") 
  const [items, setItems] = useState([])
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [inputValue, setInputValue] = useState('')
  const [description, setDescription] = useState('')
  useEffect(()=>{
    dispatch(fetchProjects(user.Id))
  }, [])
  useEffect(()=>{
    dispatch(fetchProjects(user.Id))
    setTitle('Your projects')
    setItems(projects)
    setIsLoading(false)
  }, [isLoading, dispatch, projects, user])

  const okHandler = ()=>{
    dispatch(createProject({title: inputValue, id: user.Id, description: description}))
    setIsModalVisible(false)
    setIsLoading(true)
  }
  const cancelHandler = ()=>{
    setIsModalVisible(false)
    setInputValue('')
  }

  return (
    <div style={{display:'flex', width: '100%', height:'100vh', justifyContent:'center'}}>
      <Modal title="Create new project" visible={isModalVisible} onOk={okHandler} onCancel={cancelHandler}>
        <Input placeholder="Input project title" onChange={e => setInputValue(e.target.value)} />
        <TextArea
          rows={4}
          value={description}
          onChange={e => setDescription(e.target.value)}
          placeholder="Input short project description..."/>
      </Modal>
      <div style={{marginLeft: '10%', marginTop:'5%'}}>
        <Title level={2} style={{textWrap:'nowrap'}}>{title}</Title>
        <div className='item-list'>
          {items.map(item =><ProjectItem title={item.Title} description={item.Description}/>)}
        </div>
      </div>
      <div style={{marginLeft:'10%', marginTop:'10%'}}>
        <Button 
        type="primary"
        onClick={()=>{ setIsModalVisible(true)}}
        >Create new project</Button>
      </div>
    </div>
    
  );
}