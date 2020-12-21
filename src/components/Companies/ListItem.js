import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class ListItem extends Component {
    render() {
        const {id, name, address, email, cuit, phone} = this.props.comp;
        return (
            <div>
                <p>
                    {id}
                    {name}
                    {address}
                    {email}
                    {cuit}
                    {phone}
                    <button onClick={this.props.delCompany.bind(this, id)} style={btnStyle}>X</button>
                </p>
            </div>
        )
    }
}

const btnStyle = {
    background: '#ff0000',
    color: 'white',
    border: 'solid black 1px',
    margin: '0 15px 0 0',
    padding: '1px',
    borderRadius: '20%',
    float: 'right'
}

ListItem.propTypes = {
    ListItem: PropTypes.object.isRequired
}

export default ListItem
