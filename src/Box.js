function Box(props){//Question5
    const buttonStyle = {
        backgroundColor: props.color,
        color: "white",
        padding: "10px 20px",
        borderRadius: "5px",
      
      };
    
      return (
        <div>
          <button style={buttonStyle} >
            Click Me ({props.color})
          </button>
        </div>
      );
}
export default Box;