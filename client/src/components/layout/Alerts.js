import React, { useContext } from 'react';
// import PropTypes from 'prop-types';
import AlertContext from '../../context/alert/alertContext';

export const Alerts = () => {
  const alertContext = useContext(AlertContext);

  return (
    alertContext.alerts.length > 0 &&
    alertContext.alerts.map((alert) => (
      <div key={alert.id} className={`alert alert-${alert.type}`}>
        <i className='fas fa-info-circle' /> {alert.msg}
      </div>
    ))
  );
};

// Alerts.propTypes = {
//   icon: PropTypes.string,
// };

// Alerts.defaultProps = {
//   icon: 'fas fa-info-circle',
// };

export default Alerts;
