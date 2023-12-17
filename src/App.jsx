import './App.css'
function App() {
  const today = new Date();
  const formattedToday = today.toISOString().split('T')[0];
  return (
   <div className='w-full h-[90vh]  flex justify-center items-center'>
     <div className='h-[50vh] w-3/4 border '>
    <div>
      <h1 className='text-3xl font-bold'>Todo  List</h1>
    </div>
 
      <div>
      <input type="text" placeholder="Add a Todo..." className="input input-bordered input-info w-full max-w-xs" />
      <input type="date" min={formattedToday}   className="mx-6 my-6 input input-bordered input-info w-full max-w-xs" />
     <button className='btn btn-secondary'> Add </button>
      </div>

      <div className='flex justify-between mx-20'>
        <button className='btn btn-active'>Fillter</button>
        <button className='btn btn-secondary'>Delete All</button>
      </div>
  <div>
  <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>TASK</th>
        <th>DUE DATE</th>
        <th>STATUS</th>
        <th>ACTIONS</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      <tr>
        <th>1</th>
        <td>Cy Ganderton</td>
        <td>Quality Control Specialist</td>
        <td>
          <button>e</button>
          <button>c</button>
          <button>d</button>
        </td>
      </tr>
    </tbody>
  </table>
</div>

  </div>
    

    </div>
   </div>
  )
}

export default App;


