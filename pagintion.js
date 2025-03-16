let paginationn=(data)=>{ 
    $('#pagin').pagination({
        dataSource: data,
        pageSize: 2,
        showPageNumbers: false,
        showNavigator: true,
        callback: function(data, pagination) {
           
            datashow(data)
        }
    })
    }