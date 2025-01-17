import React,{useState} from "react";
import '../../styles/base/Card.css';



const Card = ({width='250px',height='300px',child}) => {

    const [colors,setColors] = useState(['rgba(48,118,234,0.2)'])

    //alert(child);

    return (
        <div className="card" style={{
            width:`${width}`,
            height:`${height}`,
            background: `radial-gradient(
                circle,
                rgba(255, 255, 255, 0.05) 0%,
                ${colors[0]} 0%,
                rgba(255, 255, 255, 0.05) 70%
              )`
        }}>
            {child}
        </div>
    )
}

export default Card;