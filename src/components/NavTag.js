import React from 'react';

class NavTag extends React.Component {
    render() {
        return (
            <div className="NavTag">
                <ul className="NavTag-list">
                    <li className="NavTag-item active">
                        <span>Todo</span>
                    </li>
                    <li className="NavTag-item">
                        <span>Tecnología</span>
                    </li>
                    <li className="NavTag-item">
                        <span>Programación</span>
                    </li>
                    <li className="NavTag-item">
                        <span>JavaScript</span>
                    </li>
                    <li className="NavTag-item">
                        <span>Widgets</span>
                    </li>
                </ul>
            </div>
        );
    }
}

export default NavTag;