const INIT_HISTORY = 'INIT_HISTORY',
      SET_DEFAULT_STATE = 'SET_DEFAULT_ROUTE_STATE',
      UPDATE_PATH_NAME = 'UPDATE_PATH_NAME';

const defaultState = {
  history: null,
  pathname: ''
};

export default function reducer(state = defaultState, action) {
  let newState = {};
  switch (action.type) {
    case INIT_HISTORY:
      newState = {
        ...state,
        history: action.history
      };
      break;
    case SET_DEFAULT_STATE:
      newState = {
        ...state,
        pathname: action.pathname
      }
      break;
    case UPDATE_PATH_NAME:
      newState = {
        ...state,
        pathname: action.pathname
      };
      break;
    default:
      newState = state;
  }

  return newState;
}

export const updatePathname = (newPathname, state) => (dispatch, getState) => {
  const {history} = getState().route
  let currentPathname = ''

  if(history && newPathname){
    currentPathname = history.location.pathname
  
    if (!currentPathname.includes(newPathname)) {
      history.push({
        pathname: newPathname,
        state: state
      });
  
      dispatch( {
        type: UPDATE_PATH_NAME,
        pathname: newPathname
      })
  
      return true
    }
  }

  return false
};