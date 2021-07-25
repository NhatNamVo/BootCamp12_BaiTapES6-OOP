const APIlink = "https://60d5dbf7943aa60017768c4e.mockapi.io/ToDoList";

export default class ScheduleData {
    getData = (callback) => {
        fetch(APIlink).then((res)=>{
            return res.json();
        }).then((callback)).catch((error)=>{
            alert(error);
        });
    };
    updateData = (callback, id , data) => {
        fetch(APIlink + '/' + id, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json; charset=UTF-8'
            },
            body: JSON.stringify(data)
        }).then((res)=>{
            return res.json();
        }).then(callback)
    }
}