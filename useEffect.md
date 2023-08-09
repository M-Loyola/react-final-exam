.
what is useEffect, what is useEffect used for?

Based on the react dev website, useEffect is a react hook that allows synchronization of a component with an external system. It allows you to perform side effects in functional components after it has been rendered. The react hook useEffect can be used for situaions such as data fetching, DOM manipulation, and updating data in UI.

The syntax for using useEffect is: useEffect(setup, dependencies?). Inside the setup is the code you would like to execute, and dependcies refer to the reactive values referenced inside the setup.