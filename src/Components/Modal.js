import React from 'react';
import { withRouter } from 'react-router-dom';
import '../Style/Modal.css';

const Modal = () => {
  <div
    role="button"
    className="modalWrapper"
    onClick={() => this.props.history.goBack()}
  >
    <div role="button" className="modal" onClick={(e) => e.stopPropagation()}>
      <p>Content</p>
    </div>
  </div>;
};

export default withRouter(Modal);
