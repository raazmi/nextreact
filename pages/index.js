import {connect} from 'react-redux';
import Layout from '../components/Layout';

const Home = () => (
  <Layout>
    <div>
      <h1>Hello</h1>
    </div>
  </Layout>
)

const mapStateToProps = (state) =>{
  products: state.products
}

export default connect(mapStateToProps)(Home);
