import React, { Component } from 'react'

 class FetchExam extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              user:[],
              errmsg:null,
              isLoading:true,
         }
     }
     fetchUser(){
         fetch(`https://jsonplaceholder.typicode.com/users`).then(responce=>responce.json())
         .then(
             data=>{console.log(data);
                this.setState({user:data,isLoading:false})}
         ).catch(error=>{
             this.setState({error:'dusring ajax call error occure',isLoading:false})
         })

     }
     componentDidMount(){
         this.fetchUser();
     }
     
     
    render() {
        const {user,errmsg,isLoading}=this.state
        return (
            <React.Fragment>
                <h1>User List</h1>
                {errmsg?<h1 style={{color:'red'}}>{errmsg}</h1>:null}
                {
                    // user.map(u=>{
                    //     const {id,name,email,username}=u;
                    //     return(<div key={id}><p>name:{name}</p><p>email:{email}</p><p>username:{username}</p><hr/></div>)
                    // })
                    !isLoading?(user.map(u=>{
                             const {id,name,email,username}=u;
                             return(<div key={id}><p>name:{name}</p><p>email:{email}</p><p>username:{username}</p><hr/></div>) 
                            })):(<h1>PLease wait ......for sometime!!!!!!!!!!!!</h1>)
                }
            </React.Fragment>
        )
    }
}

export default FetchExam
