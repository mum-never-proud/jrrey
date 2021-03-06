import { h, render } from 'preact';
import Header from 'components/header';
import Home from 'components/home';
import Footer from 'components/footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'unified-demo-theme/dist/styles/theme.min.css';

const App = () => (
  <>
    <Header />
    <div className="container">
      <Home />
      <Footer />
    </div>
  </>
);

render(<App />, document.getElementById('main'));
