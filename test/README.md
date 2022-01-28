Hello, I am Vincent Kouoi. I managed to make a little table using an API movie.

Stack:

- React.js
- Redux
- Redux-Thunk
- ANTD

API: themoviedb

The mini project is online. You will find in this url: https://moviefamoco.netlify.app/

To begin, Redux is a state management. There are 4 key words:

- state: it is an object defined by the actions of the reducer.
- reducer: is is a function that modifies state
- store: it is an object that contains all the reducers of the application
- action: it is a function that sends all the data of the application in reducer.

In this project, there are two kinds of components:

- Components: It takes care of the design displaying data from Container.
- Container: It enables to keep a track on the state.

I chose this structure. Because it is easier to debug the code.
I chose Redux-thunk instead of Redux-Saga. Because i learnt it first.

At last, the biggest advantage with redux can resolve with the props drilling.
For this project, for the call API, I called the API since redux/index.js. Then I display the API data in the table. I also could display the API data under the Table.
Without redux, I Would have to use props or props drilling tho display data in diferent components.
