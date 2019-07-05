import React from 'react';
import styles from './css/styling.css'
import { connect } from 'react-redux';

import btnContainer from './btnContainer'

import {
  DefaultButton,
  PrimaryButton,
  ActionButton,
  IButtonProps
} from 'office-ui-fabric-react/lib/Button';
import { IconButton } from 'office-ui-fabric-react/lib/Button';


const Delete = (props) => {
  return (
    <div>
     <DefaultButton
        text="Delete"
        className={styles.btnClass + ' fabric-custom-btn-red ' + props.className}
        style={props.style}
        onClick={(e) => props.onClick(e)}
      />
    </div>
  )
}

export default btnContainer(Delete)