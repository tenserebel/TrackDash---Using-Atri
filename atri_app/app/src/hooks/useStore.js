import create from "zustand";

// unsafe merge state
// and mew properties will added or existing properties will be changed
// but the type of value of the property must not change
function mergeState(baseState, newState) {
  if (
    typeof newState === "object" &&
    !Array.isArray(newState) &&
    newState !== null
  ) {
    const keys = Object.keys(newState);
    keys.forEach((key) => {
      // create a new key in base if not exists
      if (!(key in baseState)) {
        baseState[key] = {};
      }
      if (typeof newState[key] === "object" && !Array.isArray(newState[key]))
        mergeState(baseState[key], newState[key]);
      else baseState[key] = newState[key];
    });
  }
}

const useStore = create((set) => {
  return {
    setPage: (pageName, newState) =>
      set((state) => {
        const pageState = JSON.parse(JSON.stringify(state[pageName]));
        mergeState(pageState, newState);
        return { [pageName]: pageState };
      }),
  };
});

export function updateStoreStateFromController(pageName, newState) {
  useStore.getState().setPage(pageName, newState);
}

const desktopModeProps = {
  ...{
  "Home": {
    "Div6": {
      "callbacks": {}
    },
    "Div4": {
      "callbacks": {}
    },
    "Div8": {
      "callbacks": {}
    },
    "Button2": {
      "custom": {
        "text": "Add Task"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Input2": {
      "custom": {
        "value": "",
        "placeholder": "Input your task"
      },
      "callbacks": {}
    },
    "Button4": {
      "custom": {
        "text": "Delete All Task"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox10": {
      "custom": {
        "text": ""
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image1": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/image_2023-03-12_233151705.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox3": {
      "custom": {
        "text": "TRACKDASH"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Radio1": {
      "custom": {
        "name": "",
        "label": " ",
        "checked": false,
        "radius": 0
      },
      "callbacks": {
        "onChange": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Radio2": {
      "custom": {
        "name": " ",
        "label": " ",
        "checked": false,
        "radius": 0
      },
      "callbacks": {
        "onChange": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Radio3": {
      "custom": {
        "name": "",
        "label": " ",
        "checked": false,
        "radius": 0
      },
      "callbacks": {
        "onChange": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Radio4": {
      "custom": {
        "name": "",
        "label": " ",
        "checked": false,
        "radius": 0
      },
      "callbacks": {
        "onChange": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Radio5": {
      "custom": {
        "name": "",
        "label": " ",
        "checked": false,
        "radius": 0
      },
      "callbacks": {
        "onChange": [
          {
            "sendEventData": true
          }
        ]
      }
    }
  }
}};

useStore.setState(desktopModeProps);

export default useStore;
