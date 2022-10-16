import './App.css';
import exportedObject from './component';
import { createBrowserRouter} from 'react-router-dom';
const  Main = () => {
  return(
    <>
      <div className="main">
          <img src="./logo512.png" alt="no_image" />
      </div>
    </>

  )
};
const App = createBrowserRouter([
  {
    element : <exportedObject.Header></exportedObject.Header>,
    path : '/',
    children : [
      {
        index : true,
        element : <exportedObject.HomePage></exportedObject.HomePage>,
      },
      {
        element : <exportedObject.Contact></exportedObject.Contact>,
        path : '/contact'
      },
      {
        element : <exportedObject.MainBody></exportedObject.MainBody>,
        path : '/app',
        children : [
          {
            index : true,
            element : <Main></Main>,
          },
          {
            element : <exportedObject.NoPage page='APP1'></exportedObject.NoPage>,
            path : 'app1',
          },
          {
            element : <exportedObject.NoPage page='APP2'></exportedObject.NoPage>,
            path : 'app2',
          },
          {
            element : <exportedObject.NoPage page='APP3'></exportedObject.NoPage>,
            path : 'app3',
          },
        ]
      },
      {
        path :'*',
        element : <exportedObject.NoPage></exportedObject.NoPage>,
      }
    ],
  }
])

export default App;
