$(document).ready(function () {
    $("#add-employee-btn").click(function () {
        $("#detail-employee").css("display", "block")
    })
    loadMisaDatatable()
    loadDataDepartmentDropdownControl()
    loadDataPositionDropdownControl()

    
    var formatText = function (par) {
        return (typeof (par) != "undefined" && par != null && par != "null") ? par.toString() : ""
    }

    var formatDate = function (par) {
        let date = new Date(par)
        let year = date.getFullYear()
        let month = date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : date.getMonth()
        let day = date.getDate() < 10 ? "0" + (date.getDate()) : date.getDate()
        return `${day}/${month}/${year}`
    }

    var formatMoney = function (par) {
        let pattern = ""
        let result = ""
        let counter = 0
        if (par.length == 0) return "0,00"
        for (let i = par.length - 1; i >= 0; i--) {
            pattern = par[i] + pattern;
            if (pattern.length == 3) {
                if (counter != 0) result = pattern + "." + result
                else result = pattern
                pattern = ""
                counter++
            }
        }
        if (pattern.length != 0) result = pattern + "." + result
        return result + ",00 "
    }

    // load employee to table  
    function loadMisaDatatable() {
        $.ajax({
            url: "http://cukcuk.manhnv.net/v1/Employees",
            method: "GET"
        }).done(function (response) {
            var source = ""
            var counter = 1
            response.forEach(element => {
                var row =
                    `<tr>
                    <td class="txt-align-right">${counter}</td>
                    <td>${formatText(element.EmployeeId)}</td>
                    <td>${formatText(element.FullName)}
                    </td>
                    <td>${formatText(element.GenderName)}</td>
                    <td>${formatDate(element.DateOfBirth)}</td>
                    <td>${formatText(element.PhoneNumber)}</td>
                    <td>${formatText(element.Email)}
                    </td>
                    <td>${formatText(element.PositionName)}</td>
                    <td>${formatText(element.DepartmentName)}</td>
                    <td class="txt-align-right">${formatMoney(formatText(element.Salary))}</td>
                    <td>${formatText(element.WorkStatus)}</td>
                </tr>`
                counter++
                source += (row)
            });
            $("#misa-datatable>tbody").append(source)
        }).fail(function (response) {
            alert("api not run")
        })
    }
    // end load
    // load data control
    function loadDataDepartmentDropdownControl() {
        $.ajax({
            url: "http://cukcuk.manhnv.net/api/Department",
            method: "GET"
        }).done(function (response) {
            let source = 
                `<div class="drop-item selected">
                    <div class="checked-icon">
                        <i class="fa fa-angle-down" aria-hidden="true"></i>
                    </div>
                    <div class="item-text">Tất cả phòng ban</div>
                </div>`
            response.forEach(element => {
                let row =
                `<div class="drop-item">
                    <div class="checked-icon"></div>
                    <div class="item-text">${element.DepartmentName}</div>
                </div>`
                source += row
            });
            
            $("#department .drop-data-site").html(source)
        }).fail(function (response) {
            alert("api not run")
        })
    }

    function loadDataPositionDropdownControl() {
        $.ajax({
            url: "http://cukcuk.manhnv.net/v1/Positions",
            method: "GET"
        }).done(function (response) {
            let source = 
                `<div class="drop-item selected">
                    <div class="checked-icon">
                        <i class="fa fa-angle-down" aria-hidden="true"></i>
                    </div>
                    <div class="item-text">Tất cả vị trí</div>
                </div>`
            response.forEach(element => {
                let row =
                `<div class="drop-item">
                    <div class="checked-icon"></div>
                    <div class="item-text">${element.PositionName}</div>
                </div>`
                source += row
            });
            
            $("#position .drop-data-site").html(source)
        }).fail(function (response) {
            alert("api not run")
        })
    }
    // end load 

    
    
    
    
})






// leaning with advanced js
    // var person = {
    //     firstName : "Le",
    //     lastName : "Phuc",
    //     age : 22,
    //     address : "Hoa Phu - Ung Hoa - HN"
    // }

    // var phuc = new Object()
    // phuc.firstName = "Le"
    // phuc.lastName = "Phuc"
    // phuc.age = 22
    // phuc.address = "Hoa Phu - Ung Hoa - HN"



    // function Person(firstName, lastName, age, address){
    //     this.firstName = firstName
    //     this.lastName = lastName
    //     this.address = address
    //     this.age = age
    // }

    // var phuong = new Person("le", "phuong", 24, "Hoa Phu - Ung Hoa - HN")
    // alert(person["firstName"] + "-" + phuong.lastName)

    // var phuc = function(arr){
    //     var mes = ""
    //     arr.forEach(element => {
    //         mes += element + "-"
    //     });
    //     return mes
    // } 

    // alert(phuc([1, 2, 3]))



    // end