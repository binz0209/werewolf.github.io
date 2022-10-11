var submit = document.getElementById('submit')
const number1 = document.getElementById('fname')
var formLogin = document.getElementById('form-login');

if (formLogin.attachEvent) {
    formLogin.attachEvent('submit', onFormSubmit);
} else {
    formLogin.addEventListener('submit', onFormSubmit);
}

var role = [
    'Dân làng',
    'Sói',
    'Tiên tri',
    'Bảo vệ',
    'Thợ săn',
    'Cupid',
    'Phù thủy',
    'Phản bội',
    'Thổi sáo',
    'Pháp sư câm',
    'Già làng',
    'Cảnh sát trưởng'
]


var danlang2 = 0,
    soi2 = 0,
    tri2 = 0,
    baove2 = 0,
    thosan2 = 0,
    cupid2 = 0,
    phu2 = 0,
    phanboi2 = 0,
    thoisao2 = 0,
    phapsucam2 = 0,
    gialang2 = 0,
    cst2 = 0

var temp = 0
var numplayer = 0
var random_length = 0

function r_eight() {
    for (var i = 0; i <= numplayer; i++) {
        var random = Math.floor(Math.random() * (random_length))
            // document.write('random length = ', random_length, '||||')
            // document.writeln('random = ', random, '||||')
        temp++
        role.splice(5, 7)
        if (role[random] == 'Dân làng') {
            danlang2++
            document.writeln(temp, '. ', role[random], '<br>')
            if (4 == danlang2) {
                role.splice(random, 1)
                danlang2 = 0
                random_length = random_length - 1
            }
        } else if (role[random] == 'Sói') {
            soi2++
            document.writeln(temp, '. ', role[random], '<br>')
            if (2 == soi2) {
                role.splice(random, 1)
                soi2 = 0
                random_length = random_length - 1
            }
        } else if (role[random] == 'Tiên tri') {
            tri2++
            document.writeln(temp, '. ', role[random], '<br>')
            if (1 == tri2) {
                role.splice(random, 1)
                tri2 = 0
                random_length = random_length - 1
            }
        } else if (role[random] == 'Bảo vệ') {
            baove2++
            document.writeln(temp, '. ', role[random], '<br>')
            if (1 == baove2) {
                role.splice(random, 1)
                baove2 = 0
                random_length = random_length - 1
            }
        }

    }
}

function onFormSubmit(e) {
    let numberr
    numberr = parseFloat(number1.value)
    if (numberr > 7) {
        if (numberr == 8) {
            numplayer = 7
            random_length = 4
            r_eight()
        } else if (numberr == 9) {
            numplayer = 8
            random_length = 4
            danlang2 = danlang2 - 1
            r_eight()
        }
    } else {
        alert("Số lượng người chơi từ 6 - 23 người");
    }
}