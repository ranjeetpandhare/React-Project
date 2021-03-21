import axios from 'axios'


import React, { Component } from 'react'
import {Table,Button,Modal,ModalHeader,ModalBody,ModalFooter,FormGroup,Label,Input} from 'reactstrap'

export class ToDoTask extends Component {
    //to mentain all data using state
    state={
        tasks:[],
// to do task data mentain in new object
        newTaskData:{
            taskname:'',
            status:"pending",
            description:"",
            // used perticular user id 
            userId:""
            
        },
        editTaskData:{
            taskname:'',
            status:"",
            description:""            
        },

        NewTaskModel:false,
        EditTaskModel:false
    }

    componentDidMount(){
        this._refreshTask();
    }
    toggleNewTaskModel(){
        this.setState({
            NewTaskModel:! this.state.NewTaskModel
        })
        //this.state.NewTaskModel=true;

    }
    toggleEditTaskModel(){
        this.setState({
            EditTaskModel:! this.state.EditTaskModel
        })
        //this.state.NewTaskModel=true;

    }

    addTask(){
        axios.post('http://localhost:1337/task',this.state.newTaskData).then((response) => {
           let { tasks }=this.state;
           tasks.push(response.data);
           this.setState({ tasks, NewTaskModel:false, newTaskData:{
            taskname:'',
            status:"pending",
            description:"",
            userId:""
            
        }}); 
        });
    }
    updateTask(){

        let {taskname,status,description}=this.state.editTaskData;

        axios.put('http://localhost:1337/task/'+ this.state.editTaskData.id,{
            taskname,status,description
        }).then((response)=>{
            this._refreshTask();

            this.setState({
                EditTaskModel:false,editTaskData:{id:'',taskname:'',Status:'',description:''}
            })
           
        })

    }


    editTask(id,taskname,status,description){
        this.setState({
            editTaskData:{id,taskname,status,description},EditTaskModel: !this.state.EditTaskModel
        })
    }
    _refreshTask(){
        axios.get(`http://localhost:1337/task`).then((response)=>{
            this.setState({
                tasks:response.data
            })
        })
    }
    deleteTask(id){
        axios.delete(`http://localhost:1337/task/${id}`).then((response)=>{
            this._refreshTask();

        })

    }

    render() {
        let tasks=this.state.tasks.map((task)=>{
            return(
                <tr key={task.id}>
                {/* <td>{task.id}</td> */}
                <td>{task.taskname}</td>
                {/* <td>{task.status}</td> */}
                <td>{task.description}</td>
                
                
                <td>
                    <Button color="success" size="sm" className="mr-2" onClick={this.editTask.bind(this,task.id,task.taskname,task.status,task.description)}>Edit</Button>
                    <Button color="danger" size="sm" onClick={this.deleteTask.bind(this,task.id)}>Delete</Button>
                </td>
            </tr>

            )
        });
        return (
            <div className="App container">

                <h1>To Do Task </h1>

            <Button className="my-3" color="primary" onClick={this.toggleNewTaskModel.bind(this)}>Add Task</Button>

            <Modal isOpen={this.state.NewTaskModel} toggle={this.toggleNewTaskModel.bind(this)}>
            <ModalHeader toggle={this.toggleNewTaskModel.bind(this)}>Add New Task</ModalHeader>
            <ModalBody>

            <FormGroup>
            <Label for="taskname">TaskName</Label>
            <Input id="taskname" value={this.state.newTaskData.taskname}  onChange={(e)=>{
                let {newTaskData}=this.state;

                    newTaskData.taskname=e.target.value;
                    this.setState({newTaskData});
                    
                    
            }} />
            </FormGroup> 

            {/* <FormGroup>
            <Label for="status">Status</Label>
            <Input id="status"   value={this.state.newTaskData.status} onChange={(e)=>{
                let {newTaskData}=this.state;

                    newTaskData.status=e.target.value;
                    this.setState({newTaskData})
            }}/>
            </FormGroup>   */}

            <FormGroup>
            <Label for="description">Description</Label>
            <Input id="description" value={this.state.newTaskData.description} onChange={(e)=>{
                let {newTaskData}=this.state;

                    newTaskData.description=e.target.value;
                    this.setState({newTaskData})
            }}/>
            </FormGroup>  

            {/* <FormGroup>
            <Label for="userid">UserId</Label>
            <Input id="userid" value={this.state.newTaskData.userId} onChange={(e)=>{
                let {newTaskData}=this.state;

                    newTaskData.userId=e.target.value;
                    this.setState({newTaskData})
            }}/>
            </FormGroup>    */}
            
            </ModalBody>
            <ModalFooter>
            <Button color="primary" onClick={this.addTask.bind(this)}>Submit</Button>
            <Button color="secondary" onClick={this.toggleNewTaskModel.bind(this)}>Cancel</Button>
            </ModalFooter>
            </Modal>


            {/*  //////////////////////////////////////edit model */}

            <Modal isOpen={this.state.EditTaskModel} toggle={this.toggleEditTaskModel.bind(this)}>
            <ModalHeader toggle={this.toggleEditTaskModel.bind(this)}>Edit New Task</ModalHeader>
            <ModalBody>

            <FormGroup>
            <Label for="taskname">TaskName</Label>
            <Input id="taskname" value={this.state.editTaskData.taskname} onChange={(e)=>{
                let {editTaskData}=this.state;

                    editTaskData.taskname=e.target.value;
                    this.setState({editTaskData})
                    
            }} />
            </FormGroup> 

            {/* <FormGroup>
            <Label for="status">Status</Label>
            <Input id="status"   value={this.state.editTaskData.status} onChange={(e)=>{
                let {editTaskData}=this.state;

                    editTaskData.status=e.target.value;
                    this.setState({editTaskData})
            }}/>
            </FormGroup>   */}

            <FormGroup>
            <Label for="description">Description</Label>
            <Input id="description" value={this.state.editTaskData.description} onChange={(e)=>{
                let {editTaskData}=this.state;

                editTaskData.description=e.target.value;
                    this.setState({editTaskData})
            }}/>
            </FormGroup>  

            {/* <FormGroup>
            <Label for="userid">UserId</Label>
            <Input id="userid" value={this.state.newTaskData.userId} onChange={(e)=>{
                let {newTaskData}=this.state;

                    newTaskData.userId=e.target.value;
                    this.setState({newTaskData})
            }}/>
            </FormGroup>    */}
            
            </ModalBody>
            <ModalFooter>
            <Button color="primary" onClick={this.updateTask.bind(this)}>Update Task</Button>
            <Button color="secondary" onClick={this.toggleEditTaskModel.bind(this)}>Cancel</Button>
            </ModalFooter>
            </Modal>

            
                
               <Table>
                   <thead>
                       <tr>
                           {/* <th>#Id</th> */}
                           <th>TaskName</th>
                           {/* <th>Status</th>          */}
                           <th>Description</th>
                           <th>Action</th>
                       </tr>
                   </thead>
                   <tbody>
                      
                       {tasks}
                       
                   </tbody>
               </Table>
                
            </div>
        )
    }
}

export default ToDoTask
