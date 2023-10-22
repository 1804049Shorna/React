

function ListGroup() {
let items=[
        'new work',
        'San fransisco',
        'Tokyo'
    ];
items=[];  
//example of using the if conditions  
if(items.length==0)
     return <p>No item found</p>  

//another way
const message=items.length===0 ? <p>No item found</p> : null;

  return (
    
    <>
        <h1>This is a Listaa</h1>
        {items.length===0 && <p>No item found</p>}
        <ul className="list-group">
          {items.map((item,index)=>(
          <li
           className="list-group-item active" 
           key={item} 
           onClick={(event)=> console.log(event)}
           >
            {item}</li>))}
        </ul>
    </>
  );
}

export default ListGroup;
