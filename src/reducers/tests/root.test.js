import rootReducer from "../root";
import * as UI from "../../actions/UI";

let mockState = {
  output: "blah",
  UI: {},
  stats: { byID: { strength: { value: 0 } }, allIDs: ["strength"] },
  buttons: {
    byID: { lower: { label: "lower" }, upper: { label: "upper" } },
    lowerIDs: ["lower"],
    upperIDs: ["upper"]
  }
};

function resetMock() {
  mockState = {
    output: "blah",
    UI: {},
    stats: { byID: { strength: { value: 0 } }, allIDs: ["strength"] },
    buttons: {
      byID: { lower: { label: "lower" }, upper: { label: "upper" } },
      lowerIDs: ["lower"],
      upperIDs: ["upper"]
    }
  };
}

describe("Testing rootReducer", () => {
  describe("Testing default returns", () => {
    it("should return base state", () => {
      expect(rootReducer(mockState, { type: "Bad Action" })).toEqual(mockState);
    });
  });

  describe("Testing outputReducer", () => {
    it("should return output changes", () => {
      expect(
        rootReducer(mockState, { type: UI.UPDATE_VIEW, newText: "New text" })
      ).toEqual({
        output: "New text",
        UI: {},
        stats: { byID: { strength: { value: 0 } }, allIDs: ["strength"] },
        buttons: {
          byID: { lower: { label: "lower" }, upper: { label: "upper" } },
          lowerIDs: ["lower"],
          upperIDs: ["upper"]
        }
      });
      resetMock();
    });
  });

  describe("Testing uiReducer", () => {
    it("should hide stats", () => {
      expect(rootReducer(mockState, { type: UI.HIDE_STATS })).toEqual({
        output: "blah",
        UI: { showStats: false },
        stats: { byID: { strength: { value: 0 } }, allIDs: ["strength"] },
        buttons: {
          byID: { lower: { label: "lower" }, upper: { label: "upper" } },
          lowerIDs: ["lower"],
          upperIDs: ["upper"]
        }
      });
    });

    it("should reveal stats", () => {
      expect(rootReducer(mockState, { type: UI.SHOW_STATS })).toEqual({
        output: "blah",
        UI: { showStats: true },
        stats: { byID: { strength: { value: 0 } }, allIDs: ["strength"] },
        buttons: {
          byID: { lower: { label: "lower" }, upper: { label: "upper" } },
          lowerIDs: ["lower"],
          upperIDs: ["upper"]
        }
      });
    });

    resetMock();

    it("should hide menu bar", () => {
      expect(rootReducer(mockState, { type: UI.HIDE_MENU_BAR })).toEqual({
        output: "blah",
        UI: { showMenuBar: false },
        stats: { byID: { strength: { value: 0 } }, allIDs: ["strength"] },
        buttons: {
          byID: { lower: { label: "lower" }, upper: { label: "upper" } },
          lowerIDs: ["lower"],
          upperIDs: ["upper"]
        }
      });
    });

    it("should show menu bar", () => {
      expect(rootReducer(mockState, { type: UI.SHOW_MENU_BAR })).toEqual({
        output: "blah",
        UI: { showMenuBar: true },
        stats: { byID: { strength: { value: 0 } }, allIDs: ["strength"] },
        buttons: {
          byID: { lower: { label: "lower" }, upper: { label: "upper" } },
          lowerIDs: ["lower"],
          upperIDs: ["upper"]
        }
      });
    });

    resetMock();
  });

  describe("Testing statsReducer", () => {
    it("should return changed stat value", () => {
      expect(
        rootReducer(mockState, {
          type: UI.STAT_CHANGE,
          newStat: { strength: 100 }
        })
      ).toEqual({
        output: "blah",
        UI: {},
        stats: {
          byID: {
            strength: {
              value: 100
            }
          },
          allIDs: ["strength"]
        },
        buttons: {
          byID: { lower: { label: "lower" }, upper: { label: "upper" } },
          lowerIDs: ["lower"],
          upperIDs: ["upper"]
        }
      });

      resetMock();
    });
  });

  describe("Testing buttonsReducer", () => {
    it("should return changed button values", () => {
      expect(
        rootReducer(mockState, {
          type: UI.BUTTON_CHANGE,
          newButtons: { lower: { label: "newLower" } }
        })
      ).toEqual({
        output: "blah",
        UI: {},
        stats: {
          byID: {
            strength: {
              value: 0
            }
          },
          allIDs: ["strength"]
        },
        buttons: {
          byID: { lower: { label: "newLower" }, upper: { label: "upper" } },
          lowerIDs: ["lower"],
          upperIDs: ["upper"]
        }
      });

      resetMock();
      expect(
        rootReducer(mockState, {
          type: UI.MENU_CHANGE,
          newMenuButtons: { upper: { label: "newUpper" } }
        })
      ).toEqual({
        output: "blah",
        UI: {},
        stats: {
          byID: {
            strength: {
              value: 0
            }
          },
          allIDs: ["strength"]
        },
        buttons: {
          byID: { lower: { label: "lower" }, upper: { label: "newUpper" } },
          lowerIDs: ["lower"],
          upperIDs: ["upper"]
        }
      });
    });
  });
});
