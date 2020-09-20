# React Redux Testing

* ### How and what tests should be written?
1. List all the components used in the UI
2. Imagine explaining the app (components,reducers,actions)
3. Whatever you are explaining should be translated to test.

### Test Syntax 

1. it =>  it("Test name",function containing the logic to run the tests)
2. expect=> expect(the element to investigate).matcher('value')   

* ### React Tests Basics

1. The tests should not deal with internal workings of the child components

* ### The intro of Enzyme

1. Enzyme is open sourced library by Airbnb for testing purpose
2. Three types of renders available in enzyme
  * static : Render the given component and return the object with HTML
  * shallow : Renders the Component and none of its children
  * Full DOM : Renders the whole component
 