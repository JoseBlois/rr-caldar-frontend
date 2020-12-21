import React, { Component } from 'react'

export class updateCompany extends Component {
    state = {
        id: '',
        name: '',
        address: '',
        email: '',
        cuit: '',
        phone: ''        
    }

    onChange = (e) => {
        this.setState({[e.target.id]:e.target.value});
    }

    onSubmit = (e) => {
        e.preventDefault();
        const updatedCompany = {
            id: this.state.id,
            name: this.state.name,
            address: this.state.address,
            email: this.state.email,
            cuit: this.state.cuit,
            phone: this.state.phone
        }
        this.props.updateCompany(updatedCompany);
    };

    findCompany = (e) => {
        const company = this.props.searchCompany(e.target.value);
        if (company){
            this.setState({ 
                id: company.id,
                name: company.name,
                address: company.address,
                email: company.email,
                cuit: company.cuit,
                phone: company.phone
             })
        } else {
            this.setState({ 
                name: 'Not found',
                address: 'Not found',
                email: 'Not found',
                cuit: 'Not found',
                phone: 'Not found'
             })
        }

    }

    render() {
        return (
            <div>
                <h3>Update Company</h3>
                <form onSubmit={this.onSubmit} className="add-company" style={{display: 'flex'}}>
                <input 
                        type="number"
                        min="1" 
                        id="id" 
                        placeholder="Company ID"
                        style={{flex: '10', padding: '5px'}}
                        onChange={this.findCompany}
                    />
                    <input 
                        type="text" 
                        id="name" 
                        placeholder="Company Name"
                        style={{flex: '10', padding: '5px'}}
                        value={this.state.name}
                        onChange={this.onChange}
                    />
                    <input 
                        type="text" 
                        id="address" 
                        placeholder="Street Adress"
                        style={{flex: '10', padding: '5px'}}
                        value={this.state.address}
                        onChange={this.onChange}
                    />
                    <input 
                        type="text" 
                        id="email" 
                        placeholder="email Address"
                        style={{flex: '10', padding: '5px'}}
                        value={this.state.email}
                        onChange={this.onChange}
                    />
                    <input 
                        type="text" 
                        id="cuit" 
                        placeholder="Company CUIT"
                        style={{flex: '10', padding: '5px'}}
                        value={this.state.cuit}
                        onChange={this.onChange}
                    />
                    <input 
                        type="text" 
                        id="phone" 
                        placeholder="Phone number"
                        style={{flex: '10', padding: '5px'}}
                        value={this.state.phone}
                        onChange={this.onChange}
                    />
                    <input 
                        type="submit" 
                        name="add-company"
                    />
                </form>
            </div>
        )
    }
}

export default updateCompany
