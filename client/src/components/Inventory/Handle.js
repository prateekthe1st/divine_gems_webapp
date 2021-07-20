import React from 'react'

function Handle ({
    handle: { id, value, percent },
    getHandleProps
  }) {
    return (
      <div className = "handle"
        style={{
          left: `${percent}%`,
          position: 'absolute',
          marginLeft: -15,
          marginTop: 30,
          zIndex: 2,
          width: 20,    
          height: 20,
          border: 0,
          textAlign: 'center',
          cursor: 'pointer',
          borderRadius: '50%',
          backgroundColor: 'white',
          color: '#333',
          boxShadow: 'grey 2px 3px 8px'
        }}
        {...getHandleProps(id)}
      >
        <div style={{ fontSize: 11, marginTop: -15 }}>
          {Math.round(value*10)/10}
        </div>  
      </div>
    )
  }

export default Handle;
