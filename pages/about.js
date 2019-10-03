import {Component} from 'react';
import Layout from '../components/Layout';
import axios from 'axios';

class About extends Component{
    state={
        user: []
    }
    componentDidMount(){
        axios.get('https://api.github.com/users/raazmi')
            .then(res => {
                this.setState({
                    user: res.data
                })
            })
    }
    render(){
        return(
            <Layout>
                <h2>About {this.state.user.name}</h2>
                <img src={this.state.user.avatar_url} />
            </Layout>
        )
    }
}

export default About;