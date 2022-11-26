function Input(props) {

    return (

    
        <div>
        <label>
          {props.children}
          <input type="text" value={props.value} onChange={props.handleChange}></input>
        </label>
      </div>
      
        

    );

}

export default Input;