// goal to create a custom html tag like <doc-list button-a="true" button-b="true"></phone-list>

// Create a new component on your module, or in its own module. If doc-list is created in its own module, then you'll need to add it as a dependency
// Register `phoneList` component, along with its associated controller and template

angular.
  module("myApp").
  component("docList", {
    templateUrl: "doc-list.template.html",
    controller: function docListController() {
      this.docs = [
        {
          name: "doc1",
          text: "doc1 text"
        }, {
          name: "doc2",
          text: "doc2 text"
        }, {
          name: "doc3",
          text: "doc3 text"
        }
      ];
    },
    // Add bindings for things you want to see or not
    bindings: {
      buttonA: '<',
      buttonB: '<',
    }
  });
