var username = document.querySelector('#username')
var password = document.querySelector('#password')
var retypepass = document.querySelector('#retypepass')
var register = document.querySelectorAll('.btn--primary')

function Validator(option){
    var formElement = document.querySelector(option.form)

    if (formElement) {
        option.rules.forEach(function (rule) {
            var inputElement = formElement.querySelector(rule.selector)

            if (inputElement) {
                inputElement.onblur = function () {
                    console.log(inputElement.value)
                }
            }
        })
    }
}

Validator.isRequired = function(selector) {
    return {
        selector: selector,
        test: function() {

        }
    }
}

