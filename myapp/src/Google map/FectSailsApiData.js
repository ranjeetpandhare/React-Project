import React, { Component } from 'react'

 class FetchSailsApiData extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              task:[],
              errmsg:null,
              isLoading:true,
         }
     }
     fetchUser(){
         fetch(`http://localhost:1337/companies`).then(responce=>responce.json())
         .then(
             data=>{console.log(data);
                this.setState({task:data,isLoading:false})}
         ).catch(error=>{
             this.setState({error:'dusring ajax call error occure',isLoading:false})
         })

     }
     componentDidMount(){
         this.fetchUser();
     }
     
     
    render() {
        const {task,errmsg,isLoading}=this.state
        return (
            <React.Fragment>
                <h1>Company Data List</h1>
                {errmsg?<h1 style={{color:'red'}}>{errmsg}</h1>:null}
                {
                    // user.map(u=>{
                    //     const {id,name,email,username}=u;
                    //     return(<div key={id}><p>name:{name}</p><p>city:{city}</p><p>address:{address}</p><hr/></div>)
                    // })
                    !isLoading?(task.map(u=>{
                             const {id,name,city,address}=u;
                             return(<div key={id}><p>name : {name}</p><p>city : {city}</p><p>address : {address}</p><hr/></div>) 
                            })):(<h1>PLease wait ......for sometime!!!!!!!!!!!!</h1>)
                }
            </React.Fragment>
        )
    }
}

export default FetchSailsApiData