function Todoitem2(){
  let todoname = 'Do Homework';
  let tododate = '05/07/2024';

  return <>
     <div class="row">
          <div class="col-6">
            {todoname}
          </div>
          <div class="col-4">
            {tododate}
          </div>
          <div class="col-2">
          <button type="button" class="btn btn-danger">Delete</button>
          </div>
        </div>
  </>
}

export default Todoitem2;