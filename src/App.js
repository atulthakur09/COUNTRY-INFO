function App() {
  // logic, structure,& style
  const categories = [
    { _id: 'dct123', name: 'food'},
    { _id: 'dct124', name: 'rent'},
    { _id: 'dct112', name: 'travel'}

  ]

  const expenses = [
    {_id:'dct222', expenseDate:'2024-02-25', title:'Grocery Shopping', amount:1000, category:'food'},
    {_id:'dct223', expenseDate:'2024-02-26', title:'Metro pass', amount:750, category:'travel'},
  ]


  return (
    <div>
      <h1>Expense App</h1>
      <h2>Listing Categories - {categories.length} </h2>
      <ul>
        { categories.map(function(ele){
            return <li key={ele._id}> { ele.name } </li>
        })}
      </ul>

      <h2>Listing Expense-{expenses.length} </h2>
      <table border="1">
        <thead>
          <tr>
            <th>Expense Date</th>
            <th>Amount</th>
            <th>Category</th>
            <th>Title</th>
          </tr>
        </thead>
        <tbody>
          { expenses.map((ele) =>{
            return <tr key={ele._id}>
              <td> { ele.expenseDate} </td>
              <td> { ele.amount} </td>
              <td> { ele.category} </td>
              <td> { ele.title} </td>
            </tr>
          })}
        </tbody>
      </table>

      <h2>Total Expense-{ expenses.reduce((acc, cv) => {
          acc = acc+cv.amount
          return acc
      }, 0)}   </h2> 
          

     </div>
  )
}            
          
export default App