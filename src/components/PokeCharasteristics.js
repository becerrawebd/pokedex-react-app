import React from 'react';

const PokeCharasteristics = ({info,characteristic,className,liClassName}) => {
  return (  
    <ul className={className}>
        {
          info?.map(singleInfo => {
            const { name } = singleInfo[characteristic]
            return (
              <li key={name} className={liClassName}>
                {name}
              </li>
            )
          })
        }
      </ul>
  );
}
 
export default PokeCharasteristics;