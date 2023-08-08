
function NextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style,  
          background: "blue",
          display: 'flex',              
          alignItems: 'center',       
          justifyContent: 'center',  
          marginRight: '-15px',   
          width: '40px', 
          height: '80px',  }}
        onClick={onClick}
      />
    );
  }
  
  function PrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, 
          background: "blue",
          display: 'flex',              
          alignItems: 'center',       
          justifyContent: 'center',  
          marginLeft: '-15px',   
          width: '40px', 
          height: '80px', }}
        onClick={onClick}
      />
    );
  }

  export {NextArrow, PrevArrow}