let CurrentTime = () => {
    let time = new Date();
    return <>
    <p>Current time is : {time.toLocaleTimeString()}</p>
    <p>Current Date is {time.toLocaleDateString()}</p>

    </>
    };
export default CurrentTime;