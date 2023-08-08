
function NextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, 
          display: "block", 
          background: "blue",
          display: 'flex',              
          alignItems: 'center',       
          justifyContent: 'center',  
          marginRight: '-15px',   
          background: 'blue',
          width: '40px', 
          height: '40px',  }}
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
          display: "block", 
          background: "blue",
          display: 'flex',              
          alignItems: 'center',       
          justifyContent: 'center',  
          marginLeft: '-15px',   
          background: 'blue',
          width: '40px', 
          height: '40px', }}
        onClick={onClick}
      />
    );
  }

  export {NextArrow, PrevArrow}