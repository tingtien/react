import React, { Component } from 'react';

import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';

import NotFound from '@common/example/404';

class ModalSwitch extends Component {
    constructor(props) {
        super(props);
        this.previousLocation = this.props.location;
    }
    componentWillUpdate(nextProps) {
        const { location } = this.props;
        if (
            nextProps.history.action !== 'POP' &&
            (!location.state || !location.state.modal)
        ) {
            this.previousLocation = nextProps.history.location;
        }
    }
    render() {
        const { location } = this.props;
        const isModal = !!(
            location.state &&
            location.state.modal &&
            this.previousLocation !== location // not initial render
        );
        return (
            <div>
                <Switch location={isModal ? this.previousLocation : location}>
                    {
                        routes.map(item => {
                            return (
                                <Route exact path={item.path} component={item.component} />
                            );
                        })
                    }
                    <Route component={NotFound} />
                </Switch>
            </div>
        );
    }
}

export default () => (
    <Router>
        <Route component={ModalSwitch} />
    </Router>
);