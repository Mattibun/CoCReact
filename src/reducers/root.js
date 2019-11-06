import initialState from "../store/initialState";
import * as UI from "../actions/UI";
import updateStatUI from "./updateStatUI";
import updateLowerButtonUI from "./updateLowerButtonUI";
import updateMenuBar from "./updateMenuBar";
import * as Utils from "../utils";

// And an initial reducer
function rootReducer(state = initialState, action) {
  switch (action.type) {
    case UI.HIDE_STATS:
      return Utils.updateObject(state, {
        ...state,
        UI: {
          ...state.UI,
          showStats: false
        }
      });
    case UI.SHOW_STATS:
      return Utils.updateObject(state, {
        ...state,
        UI: {
          ...state.UI,
          showStats: true
        }
      });
    case UI.HIDE_MENU_BAR:
      return Utils.updateObject(state, {
        ...state,
        UI: {
          ...state.UI,
          showMenuBar: false
        }
      });
    case UI.SHOW_MENU_BAR:
      return Utils.updateObject(state, {
        ...state,
        UI: {
          ...state.UI,
          showMenuBar: true
        }
      });
    case UI.UPDATE_VIEW:
      return Utils.updateObject(state, {
        output: action.newText
      });
    case UI.BUTTON_CHANGE:
      return updateLowerButtonUI(state, action.newButtons);
    case UI.STAT_CHANGE:
      return updateStatUI(state, action.newStat);
    case UI.MENU_CHANGE:
      return updateMenuBar(state, action.newMenuArr);
    default:
      return state;
  }
}

export default rootReducer;
