import React, { Component } from 'react';
import './Footer.css';

class Main extends Component {
  render() {
    return (
      <div className="footer">
        <h2> Connect with us! </h2>
        <div className='icons'>
          <a href='https://www.facebook.com/Werkap-2145629985651568/' target="_blank" className='icon face'/>
          <a href='https://www.instagram.com/werkap_official/?hl=en' target="_blank" className='icon insta'/>
          <a href='https://github.com/werkapp' target="_blank" className='icon gh'/>
          <a href='https://www.linkedin.com/company/werkap/' target="_blank" className='icon linkedin'/>
          <a href='https://www.pinterest.com/werkap1801' target="_blank" className='icon pint'/>
          <a href='https://twitter.com/werkap1' target="_blank" className='icon twi'/>
          <a href='' target="_blank" className='icon whatsapp'/>
          <a href='https://www.youtube.com/channel/UCdpwqO1Jr_7EVl6pVJURbUQ?view_as=subscriber' target="_blank" className='icon youtube'/>
        </div>
        <h3> www.werkap.com || contact@werkap.com || (303) 987 6789</h3>
      </div>
    );
  }
}

export default Main;