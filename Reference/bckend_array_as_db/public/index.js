function mySubmit(e) {
    console.log("inside mysubmit");
    // e.preventDefault();
    let theNewCarObj =
    {
        manufacturer: document.querySelector('#manufacturer').value,
        model: document.querySelector('#model').value,
        plate: document.querySelector('#plate').value,
        year: document.querySelector('#year').value
    }

    let url = "http://localhost:2189/cars"

    fetch(url, {
        method: 'POST', // or 'PUT'
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(theNewCarObj),
    })
        .then((theResponse) => {
            console.log(theResponse);
        })
}
