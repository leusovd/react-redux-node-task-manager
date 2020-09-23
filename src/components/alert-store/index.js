import React from "react";
import "./alert-store.scss";
import { connect } from "react-redux";

import { CSSTransition, TransitionGroup } from "react-transition-group";

const AlertStore = ({ alerts }) => {
    const alertList = alerts.map(({ id, message }) => (
        <CSSTransition key={id} classNames="item" timeout={500}>
            <li className="alert-store_item">{message}</li>
        </CSSTransition>
    ));

    return (
        <div className="alert-store">
            <div className="container">
                <div className="row ">
                    <div className="col d-flex justify-content-end">
                        <ul className="alert-store_list">
                            <TransitionGroup>{alertList}</TransitionGroup>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = ({ alerts }) => ({ alerts });

export default connect(mapStateToProps)(AlertStore);
