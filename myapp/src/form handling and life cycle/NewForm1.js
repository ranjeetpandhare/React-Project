import React, { Component } from 'react'

class NewForm1 extends Component {

    constructor(props) {
        super(props)
        
        this.state = {
             FirstName:"",
             LastName:"",
             MobileNo:"",
             Email:"",
             State:"",
             City:"",
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
        this.setState({FirstName:data.FirstName,LastName:data.LastName,MobileNo:data.MobileNo,Email:data.Email,state:data.state,City:data.City,index:index,flag:false})

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
                 <td>{emp.FirstName}</td>
                 <td>{emp.LastName}</td>
                 <td>{emp.MobileNo}</td>
                 <td>{emp.Email}</td>
                 <td>{emp.State}</td>
                 <td>{emp.City}</td>
                 
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
                    <label>Enter FirstName  :</label>
                <input type='text' name='FirstName' value={this.state.FirstName} onChange={this.myChangehandlar} required/><br/><br/>
                <label>Enter LastName:</label>
                <input type='text' name='LastName' value={this.state.LastName} onChange={this.myChangehandlar} required/><br/><br/>
                <label>Enter MobileNo:</label>
                <input type='text' name='MobileNo' value={this.state.MobileNo} onChange={this.myChangehandlar} required/><br/><br/>
                <label>Enter Email:</label>
                <input type='text' name='Email' value={this.state.Email} onChange={this.myChangehandlar} required/><br/><br/>
                
                <label>Select State:</label>

                <input type='text' name='State' value={this.state.State} onChange={this.myChangehandlar} required/><br/><br/>
                <label>Select City:</label>
                <input type='text' name='City' value={this.state.City} onChange={this.myChangehandlar} required/><br/><br/>
    
                {this.state.flag?<input className="btn btn-success btn-sm col-xs-2" type='submit' onClick={this.mysumbitHandlar}/>:<button className="btn btn-primary btn-sm col-xs-2" onClick={this.updateRec}>UpdateRecord</button>}
                </div> <br/><br/><br/>
                </form>
                <div id="displaydatadiv">
                <table >
        <tbody>
            <tr>
                <th>FirstName</th>
				<th>LastName</th>9
				<th>MobileNo</th>
                <th>Email</th>
				<th>State</th>
				<th>City</th>
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

export default NewForm1