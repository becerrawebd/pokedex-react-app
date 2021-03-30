import React from 'react';

const CharacteristicList = ({className,info,chars}) => {
  console.log(chars)
  return (  
    <ul className={className}>
      {
        info?.map(entry => {
          return (
            <li>
              {
                chars?.map(char => {
                  return entry['name']
                })
              }
            </li>
          )
        })
      }
    </ul>
  );
}
 
export default CharacteristicList;