import React from 'react';

function Header (props) {
    return (
        <div className="jumbotron">
            <div className="row">
                <div className="col-4">
                    Clicky Game
                </div>
                <div className="col-4">
                    Click on an image to begin
                </div>
                <div className="col-4">
    Score: <span id="total"> {props.score}</span>  | Top Score: <span id="total"> {props.topScore}</span>
                </div>
            </div>
        </div>
    
    )
}

export default Header; 