function Todoitem1(){

    let todoname = 'Buy milk';
    let tododate = '05/06/2024';

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

export default Todoitem1;