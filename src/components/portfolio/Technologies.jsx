
import React from "react";

const Technologies = ({data}) => {

  const techno = []

  data.technologies.forEach(item => {
    techno.push( <a key={item.name} href={item.docs} target="_blank">
                    <img src={item.stack} alt={item.name} />
                  </a>)
  })

  return (
   <>
    {techno}
   </>
  );
}

export default Technologies;
