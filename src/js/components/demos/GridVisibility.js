import React, { Component } from 'react';

class GridVisibility extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div>
                <h5 className="margin-top--big">Single size hide</h5>
                <div className="grid">
                    <div className="grid__cell phone-1of1 lap-up-1of4 phone-hide">
                        <div className="card">
                            This will be hidden on phones
                        </div>
                    </div>
                    <div className="grid__cell phone-1of1 lap-up-1of4 tab-hide">
                        <div className="card">
                            This will be hidden on tablets
                        </div>
                    </div>
                    <div className="grid__cell phone-1of1 lap-up-1of4 lap-hide">
                        <div className="card">
                            This will be hidden on laptops
                        </div>
                    </div>
                    <div className="grid__cell phone-1of1 lap-up-1of4 desk-hide">
                        <div className="card">
                            This will be hidden on desktops
                        </div>
                    </div>
                </div>
                <h5 className="margin-top--big">Size range hide</h5>
                <div className="grid">
                    <div className="grid__cell phone-1of1 lap-up-1of4 phone-up-hide">
                        <div className="card">
                            This will be hidden on phones up
                        </div>
                    </div>
                    <div className="grid__cell phone-1of1 lap-up-1of4 tab-up-hide">
                        <div className="card">
                            This will be hidden on tablets up
                        </div>
                    </div>
                    <div className="grid__cell phone-1of1 lap-up-1of4 lap-up-hide">
                        <div className="card">
                            This will be hidden on laptops up
                        </div>
                    </div>
                    <div className="grid__cell phone-1of1 lap-up-1of4 desk-up-hide">
                        <div className="card">
                            This will be hidden on desktops up
                        </div>
                    </div>
                </div>
                <div className="grid">
                    <div className="grid__cell phone-1of1 lap-up-1of4 tab-down-hide">
                        <div className="card">
                            This will be hidden on tablets down
                        </div>
                    </div>
                    <div className="grid__cell phone-1of1 lap-up-1of4 lap-down-hide">
                        <div className="card">
                            This will be hidden on laptops down
                        </div>
                    </div>
                    <div className="grid__cell phone-1of1 lap-up-1of4 desk-down-hide">
                        <div className="card">
                            This will be hidden on desktops down
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default GridVisibility;
