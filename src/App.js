import FormPost from "./components/FormPost";
import Posts from "./components/Posts";

function App() {
  return (
    <div className='container-md pt-3' style={{width: '50%'}} >
      <div className='row'>
        <div className='col'>
          <FormPost />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <Posts />
        </div>
      </div>
    </div>
  );
}

export default App;
