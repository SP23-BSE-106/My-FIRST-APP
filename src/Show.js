function Show(props){
    const z=props.message;
    const x=props.name;
    const y=props.marks;
    
    return ( 
    <div>
        <h2>Hello, {x}!</h2>
        <p>You scored {y} marks.</p>
        <p>{z}</p>
      </div>);
}
export default Show;