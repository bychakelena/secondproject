var labels = [ "Зима", "Весна", "Лето", "Осень" ]
var result = [ ]

for ( var x of labels ) {
        var checkButton = document.createElement ( 'input' )
        checkButton.type = "checkbox"
        checkButton.name = "checkbox"
        checkButton.value = x
        checkButton.onchange = function ( event ) {
                console.info ( event.target.value )
                result.push ( event.target.value )
        }
        document.body.appendChild ( checkButton )
        var label = document.createElement ( 'span' )
        label.innerHTML = x
        document.body.appendChild ( label )
}
