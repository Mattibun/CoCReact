import * as SC from "./sceneSymbols";
import * as charCreation from "./charCreation";
import * as menus from "./menus";
import * as testing from "./tests/testing";
import * as Core from "../actions/Core";
import store from "../store/store";

const SceneFuncs = {
  [SC.FETCH_SCENE_TEST]: testing.fetchSceneTest,
  [SC.FETCH_SCENE_TEST_NOFUNC]: "Nofunction!",
  [SC.START_NEW_GAME]: charCreation.startNewGame,

  [SC.MAIN_MENU]: () => {
    return menus.mainMenu(store);
  },
  [SC.DATA_MENU]: menus.dataMenu,
  [SC.INSTRUCTIONS]: menus.instructions,
  [SC.GO_BACK]: () => {
    Core.goBack();
  }
};

export default SceneFuncs;
