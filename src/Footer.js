import React, {Component} from 'react';
import TopElement from './TopElement';

class Footer extends Component {
  render() {
    return (
      <div className="container-fluid">
      <div className="row backCheck">
        <div className="col-sm-4">
          <div className="animation-text-styling">
            <TopElement word={"3.14159"}/>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="animation-text-styling">
            <TopElement word={"LOYALTY"}/>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="animation-text-styling">
            <TopElement word={"LOYALTY"}/>
          </div>
        </div>
      </div>
        <hr/>
        <p className="muted pull-right">© 2017 William Gill. All rights reserved</p>
      </div>
    )
  }
}

export default Footer;
