import React from 'react';
import './tile.css';
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css';
// class tile extends Component{}
function Tile(props) {
    return (
            <div className="col-lg-3 col-md-4">
                <div className="img-container text-center">
                    <img src={props.skillImg} alt={props.skillName} />
                </div>
                <div className="skill-name text-center">
                    {props.skillName}
                </div>
                <div className="skill-writeup text-center">
                    {props.skilldescription}
                </div>
            </div>
    );

}
export default Tile;