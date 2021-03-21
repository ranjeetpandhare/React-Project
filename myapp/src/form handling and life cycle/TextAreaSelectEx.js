import React, { Component } from 'react'

 class TextAreaSelectEx extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              username:"",
              comment:"",
              topic:""
         }
     }
     onChange=(event)=>{
         this.setState({[event.target.name]:event.target.value});
     }
     submit=(event)=>{
        alert(`${this.state.username} ${this.state.comment} ${this.state.topic}`);
        event.preventDefault();
     }
     
    render() {
        const{username,topic,comment}=this.state;
        return (
            
            <div>
                <form onSubmit={this.submit}>
                    <div className="form-group">
                        <label>username:</label>
                        <input type="text" name="username" value={username} onChange={this.onChange}></input>
                    </div>
                    <div>
                        <label>comment:</label>
                        <textarea type="text" name="comment" value={comment} onChange={this.onChange}></textarea>
                    </div>
                    <div>
                        <label>topic:</label>
                        <select name="topic" value={topic} onChange={this.onChange}>
                            <option value="angular">Angular</option>
                            <option value="rect">react</option>
                            <option value="java">java</option>
                            <option value="sql">sql</option>
                        </select>
                    </div>
                    <button type="submit" className="btn btn-danger">add</button>
                    
                </form>
                
            </div>
        )
    }
}

export default TextAreaSelectEx
