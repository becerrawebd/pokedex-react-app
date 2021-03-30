import React from 'react';

const PokeImage = ({sprites}) => {

  return (  
      <img 
        src={sprites?.other?.dream_world?.front_default || sprites?.front_default} 
        alt={sprites?.other?.dream_world?.front_default || sprites?.front_default} 
        className="h-32 w-32 mt-4"
      />
  );
}
 
export default PokeImage;