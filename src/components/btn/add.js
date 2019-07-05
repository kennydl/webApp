import React from 'react';
import styles from './css/styling.css'

import btnContainer from './btnContainer'

import {
  DefaultButton,
  PrimaryButton,
  ActionButton,
  IButtonProps
} from 'office-ui-fabric-react/lib/Button';
import { IconButton } from 'office-ui-fabric-react/lib/Button';

const Add = (props) => {
  return ( <DefaultButton
    text="Add"
    primary={true}
    className={styles.btnClass + ' ' + props.className}
    style={props.style}
    onClick={(e) => props.onClick(e)}
  />)
}

export default btnContainer(Add)
