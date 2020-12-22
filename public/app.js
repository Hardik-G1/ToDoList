$(document).ready(function() {
    $.getJSON("/api")
        .then(additem)

    $('#todoInput').keypress(function(event) {
        if (event.which == 13) {
            createItem();
        }
    })
    $('.list').on('click', 'li', function() {
        updateitem($(this));
    })
    $('.list').on('click', 'span', function(e) {
        e.stopPropagation();
        removeto($(this).parent());
    })
});

function updateitem(ite) {
    var clickid = ite.data('id');
    var up = "/api/" + clickid;
    var isDone = !ite.data("comp");
    var updatedat = { done: isDone }
    $.ajax({
            method: "PUT",
            url: up,
            data: updatedat
        })
        .then(function(d) {
            ite.toggleClass("done");
            ite.data("comp", isDone);
        })
}

function removeto(ite) {
    var clickid = ite.data('id');
    var dele = "/api/" + clickid;
    $.ajax({
            method: 'DELETE',
            url: dele
        })
        .then(function(data) {
            ite.remove();
        })
}

function additem(data) {
    data = data.reverse();
    data.forEach(function(item) {
        addsingle(item);
    })
}

function addsingle(item) {
    var newItem = $('<li class="task">' + item.name + '<span>X</span></li>');
    newItem.data('id', item._id);
    newItem.data('comp', item.done);
    if (item.done) {
        newItem.addClass("done");
    }
    $('.list').append(newItem)
}

function createItem() {
    var inputt = $('#todoInput').val();
    $.post("/api", { name: inputt })
        .then(function(newgot) {
            $('#todoInput').val('');
            addsingle(newgot);
        })
        .catch(function(err) {
            console.log(err);
        })
}