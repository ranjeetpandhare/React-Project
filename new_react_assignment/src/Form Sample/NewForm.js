import React, { Component } from 'react'

class NewForm extends Component {

    constructor(props) {
        super(props)
        
        this.state = {
             username:"",
             password:"",
             FristName:"",
             LastName:"",
             Date:"",
             salary:"" ,   
             index:'',
             datas:[],
             flag:true
        }
    }
    mysumbitHandlar=(event)=>{

        // event.preventDefault();
        var arr=JSON.parse(localStorage.getItem('document'));
        if(arr==null){
            arr=[];
        }
        arr.push(this.state);
         localStorage.setItem('document',JSON.stringify(arr));
        console.log(this.state)
           alert("form submited sucessfully .........");
         //alert(this.state.username)
    }
    updateRec=(ev)=>{
        let index=this.state.index;
        var arr=JSON.parse(localStorage.getItem('document'));
        arr[index]=this.state;
        localStorage.setItem('document',JSON.stringify(arr));

    }
    delete=(index)=>{
        var arr=JSON.parse(localStorage.getItem('document'));
        arr.splice(index,1);
        localStorage.setItem('document',JSON.stringify(arr));
        // window.location.reload(false);
        this.setState({datas:arr})

    }
    edit=(index)=>{
        
        var arr=JSON.parse(localStorage.getItem('document'));
        let data=arr[index];
        this.setState({username:data.username,password:data.password,FristName:data.FristName,LastName:data.LastName,Date:data.Date,salary:data.salary ,index:index,flag:false})

    }
    

    myChangehandlar=(event)=>{
        let num=event.target.name;
        let val=event.target.value;
        this.setState({[num]:val});
    }
    
    render() {
        var arr=JSON.parse(localStorage.getItem('document'));
    const displaydata=arr!=null && arr.map((emp,index)=>
    (
    
            <tr>
                 <td>{emp.username}</td>
                 <td>{emp.password}</td>
                 <td>{emp.FristName}</td>
                 <td>{emp.LastName}</td>
                 <td>{emp.Date}</td>
                 <td>{emp.salary}</td>
                 <td><button className="btn btn-info btn-sm col-xs-2" onClick={()=>{this.edit(index)}} style={{marginRight:'20px'}}>Edit</button>
                 <button className="btn btn-danger btn-sm col-xs-2" onClick={()=>{this.delete(index)}} style={{marginRight:'20px'}}>Delete</button>
                 </td>
            </tr>

       ))
        return (
            <div id="displayformdiv">
                {/* style={{width:"400px", backgroundImage: `url(require("abc.jpg"))`}} */}
                <form  >
                    <h1 style={{color:"skyblue"}}>Add User</h1>
                <div>
                    <label>Enter username :</label>
                <input type='text' name='username' value={this.state.username} onChange={this.myChangehandlar} required/><br/><br/>
                <label>Enter password :</label>
                <input type='text' name='password' value={this.state.password} onChange={this.myChangehandlar} required/><br/><br/>
                <label>Enter FristName :</label>
                <input type='text' name='FristName' value={this.state.FristName} onChange={this.myChangehandlar} required/><br/><br/>
                <label>Enter LastName :</label>
                <input type='text' name='LastName' value={this.state.LastName} onChange={this.myChangehandlar} required/><br/><br/>
                <label>Enter Date:</label>
                <input type='date' name='Date' value={this.state.Date} onChange={this.myChangehandlar} required/><br/><br/>
                <label>Enter salary:</label>
                <input type='text' name='salary' value={this.state.salary} onChange={this.myChangehandlar} required/><br/><br/>
                
                
                {this.state.flag?<input className="btn btn-success btn-sm col-xs-2" type='submit' onClick={this.mysumbitHandlar}/>:<button className="btn btn-primary btn-sm col-xs-2" onClick={this.updateRec}>UpdateRecord</button>}
                </div> <br/><br/><br/>
                </form>
                <div id="displaydatadiv">
                <table >
        <tbody>
            <tr>
                <th>Username</th>
				<th>Password</th>
				<th>FirstName</th>
				<th>LastName</th>
				<th>Date</th>
				<th>Salary</th>
                <th>Action</th>
                </tr>
                    {displaydata}
                    </tbody>
    </table>
                </div>
                </div>

           
        );
    }
}

export default NewForm