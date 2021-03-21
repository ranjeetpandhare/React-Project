import React, { Component } from 'react'

class SignUp extends Component {

    constructor(props) {
        super(props)
        
        this.state = {
             Email:"",
             FirstName:"",
             LastName:"",
             Gender:"",
             Date_Of_Birth:"",
             Password:"",
             errorMessage:'',
             validation:'',
             index:'',
             datas:[],
             flag:true
             
        }
    }
    // mysumbitHandlar=(event)=>{

    //     // event.preventDefault();
    //     var arr=JSON.parse(localStorage.getItem('document'));
    //     if(arr==null){
    //         arr=[];
    //     }
    //     arr.push(this.state);
    //      localStorage.setItem('document',JSON.stringify(arr));
    //     console.log(this.state)
    //        alert("form submited sucessfully .........");
    //      //alert(this.state.username)
    // }
    mysumbitHandlar = (event) => {     
       const { Email, FirstName, LastName, Gender, Date_Of_Birth, Password,errorMessage,validation} = this.state
        var arr=JSON.parse(localStorage.getItem('document'));
        if (Email, FirstName, LastName, Gender, Date_Of_Birth, Password) {
          this.setState({validation: true})
        } else {
            arr.push(this.state);
            localStorage.setItem('document',JSON.stringify(arr));
      alert("form submited sucessfully .........");
          this.setState({validation: false});
          this.setState({errorMessage: 'Please fill in all fields'})
          console.log(errorMessage);
        }
        
        if (/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,15}/g.test(Email)) {
          this.setState({validation: true})
        } else {
          this.setState({validation: false});
          this.setState({errorMessage: 'Please enter correct email adress'})
          console.log(errorMessage);
        }
        
        if (validation) {
          const newEvent = {
            FirstName: this.state.FirstName,
            LastName: this.state.LastName,
            Gender: this.state.Gender,
            Date_Of_Birth: this.state.Date_Of_Birth,
            Password:this.state.Password,
            errorMessage:this.state.errorMessage
            
          }
        
        
        
          this.setState({
              Email:'',
              FirstName: '',
              LastName: '',
              Gender: '',
              Date_Of_Birth: '',
              Password:''
          });
        }
        
        event.preventDefault();
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
        this.setState({
            Email:data.Email,
            FirstName:data.FirstName,
            LastName:data.LastName,
            Gender:data.Gender,
            Date_Of_Birth:data.Date_Of_Birth,
            Password:data.Password,
            index:index,
            flag:false
        })

    }
    

    myChangehandlar=(event)=>{
        let num=event.target.name;
        let val=event.target.value;
        this.setState({[num]:val});
    }
    
    render() {
        var arr=JSON.parse(localStorage.getItem('document'));
    const displaydata= arr!=null && arr.map((emp,index)=>
    (
    
            <tr>
            
                 <td>{emp.Email}</td>
                 <td>{emp.FirstName}</td>
                 <td>{emp.LastName}</td>
                 <td>{emp.Gender}</td>
                 <td>{emp.Date_Of_Birth}</td>
                 <td>{emp.Password}</td>
                 
                 <td><button className="btn btn-info btn-sm col-xs-2" onClick={()=>{this.edit(index)}} style={{marginRight:'20px'}}>Edit</button>
                 <button className="btn btn-danger btn-sm col-xs-2" onClick={()=>{this.delete(index)}} style={{marginRight:'20px'}}>Delete</button>
                 </td>
            </tr>

       ))
        return (
            <div id="displayformdiv">
                {/* style={{width:"400px", backgroundImage: `url(require("abc.jpg"))`}} */}
                <form  >
                    <h1 style={{color:"red"}}>Employee Form</h1>
                <div>
                <label>Enter Email:</label>
                <input type='text' name='Email' value={this.state.Email} onChange={this.myChangehandlar} required/><br/><br/>
                <label>Enter FirstName  :</label>
                <input type='text' name='FirstName' value={this.state.FirstName} onChange={this.myChangehandlar} required/><br/><br/>
                <label>Enter LastName:</label>
                <input type='text' name='LastName' value={this.state.LastName} onChange={this.myChangehandlar} required/><br/><br/>
                <label>Enter Gender:</label>
                <input type='text' name='Gender' value={this.state.Gender} onChange={this.myChangehandlar} required/><br/><br/>
                <label>Select Date_Of_Birth:</label>
                <input type='text' name='Date_Of_Birth' value={this.state.Date_Of_Birth} onChange={this.myChangehandlar} required/><br/><br/>
                <label>Select Password:</label>
                <input type='text' name='Password' value={this.state.Password} onChange={this.myChangehandlar} required/><br/><br/>
    
                {this.state.flag?<input className="btn btn-success btn-sm col-xs-2" type='submit' onClick={this.mysumbitHandlar}/>:<button className="btn btn-primary btn-sm col-xs-2" onClick={this.updateRec}>UpdateRecord</button>}
                </div> <br/><br/><br/>
                </form>

                <div id="displaydatadiv">
                <table >
            <tbody>
            {/* <tr>
                <th>Email</th> 
                <th>FirstName</th>
				<th>LastName</th>9
				<th>Gender</th>
				<th>Date_Of_Birth</th>
				<th>Password</th>
                <th>Action</th>
            </tr> */}
                {displaydata}
            </tbody>
            </table>
        </div>
    </div>

           
        );
    }
}

export default SignUp