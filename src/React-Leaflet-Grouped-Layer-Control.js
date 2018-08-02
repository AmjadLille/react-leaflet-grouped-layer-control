import './react-leaflet-grouped-layer-control.css';
import { Control, DomUtil } from 'leaflet';
import React from 'react';
import ReactDOM from 'react-dom';
import { MapControl } from 'react-leaflet';
import RLGroupedLayerControlRC from './RL-Grouped-Layer-Control-RC';

export default class ReactLeafletGroupedLayerControl extends MapControl {
    constructor(props){
        super(props);
        this.div = DomUtil.create('div', 'rlglc-wrap');
    }

    createLeafletElement(props) {
        const RLGLC = Control.extend({
            onAdd: (map) => this.div,
            onRemove: (map) =>  {}
        })
        return new RLGLC(props);
    }

    renderReactComponent() {
        ReactDOM.render(<RLGroupedLayerControlRC {...this.props} />, this.div);
    }

    componentDidMount() {
        super.componentDidMount();
        this.renderReactComponent();
    }

    componentDidUpdate(...a) {
        super.componentDidUpdate(...a);
        this.renderReactComponent();
    }

    render() { return null }
}