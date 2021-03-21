import React, { Component } from 'react'

 class CURUDExample extends Component {
   
  constructor(props){
    super(props);
    this.state={
      //title: 'React Simple CRUD Application',
      act: 0,
      index: '',
      datas: []
    }
  } 
  componentDidMount(){
    this.refs.name.focus();
  }

  fSubmit = (e) =>{
    e.preventDefault();
    console.log('try');

    let datas = this.state.datas;
    let name = this.refs.name.value;
    // let address = this.refs.address.value;
    let data = {name, address }
    if(this.state.act === 0){   //new
     
      datas.push(data);

      
    }else{                      //update
      let index = this.state.index;
      /* datas[index].name = name;
      datas[index].address = address; */
      datas[index]=data;
    }    

    this.setState({
      datas: datas,
      act: 0
    });

    this.refs.myForm.reset();
    this.refs.name.focus();
  }

  fRemove = (i) => {
    let datas = this.state.datas;
      datas.splice(i,1);
     this.setState({
      datas: datas
    }); 

    this.refs.myForm.reset();
    this.refs.name.focus();
  }

  fEdit = (i) => {
    let data = this.state.datas[i];
    this.refs.name.value = data.name;
    this.refs.address.value = data.address;

    this.setState({
      act: 1,
      index: i
    });

    this.refs.name.focus();
  }  

  render() {
    let {datas}= this.state;
    return (
      <div className="App">
        {/* <h2>{this.state.title}</h2> */}
        <h2>React Simple CRUD Application</h2>
        <form ref="myForm" className="myForm">
         Frist Name: <input type="text" ref="name"  placeholder="frist name" className="formField" /><br/><br/>
         Last Name: <input type="text" ref="name"  placeholder="last name" className="formField" /><br/><br/>
         Mobile No: <input type="text" ref="name"  placeholder="mobile no" className="formField" /><br/><br/>
         Email: <input type="email" ref="name"  placeholder="email" className="formField" /><br/><br/>

         State: <input type="text" ref="name"  placeholder="state" className="formField" /><br/><br/>
         City: <input type="text" ref="name"  placeholder="city" className="formField" /><br/><br/>
    
          <button className="btn btn-primary" onClick={(e)=>this.fSubmit(e)} >submit </button>
        </form>
        <pre>
          {datas.map((data, index) =>
            <li key={index} className="myList">
              {index+1}. {data.name}   {data.address}       
              <button onClick={()=>this.fEdit(index)} className="myListButton btn btn-success">Edit </button>
              <button onClick={()=>this.fRemove(index)} className="myListButton btn btn-danger">Delete </button>
            </li>
          )}
        </pre>
      </div>
    );
  }

}

export default CURUDExample
