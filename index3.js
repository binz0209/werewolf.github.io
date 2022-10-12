var submit = document.getElementById('submit')
const number1 = document.getElementById('fname')
var formLogin = document.getElementById('form-login');

if (formLogin.attachEvent) {
    formLogin.attachEvent('submit', onFormSubmit);
} else {
    formLogin.addEventListener('submit', onFormSubmit);
}

var role = [
    'Dân làng', //0
    'Sói', //1
    'Tiên tri', //2
    'Bảo vệ', //3 
    'Thợ săn', //4
    'Cupid', //5
    'Phù thủy', //6
    'Phản bội', //7
    'Thổi sáo', //8
    'Pháp sư câm', //9
    'Già làng', //10
    'Cảnh sát trưởng', //11
]
var role89 = [
    'Dân làng',
    'Dân làng',
    'Dân làng',
    'Dân làng',
    'Sói',
    'Sói',
    'Tiên tri',
    'Bảo vệ',
]

var role19plus = [
    'Dân làng',
    'Dân làng',
    'Dân làng',
    'Dân làng',
    'Sói',
    'Sói',
    'Tiên tri',
    'Bảo vệ',
    role[11], role[0], role[0], role[0], role[1], role[0], role[1], role[4], role[5], role[6], role[10]
]

var numberr_check = 0
var role19_plusplus = []

function shuffle(array) {
    var i = array.length,
        j = 0,
        temp;

    while (i--) {

        j = Math.floor(Math.random() * (i + 1));

        // swap randomly chosen element with current element
        temp = array[i];
        array[i] = array[j];
        array[j] = temp;

    }

    return array;
}

function onFormSubmit(e) {

    let numberr
    numberr = parseFloat(number1.value)
    if (numberr > 7) {
        if (numberr == 8) { //4 dan, 2 soi, 1 tri, 1 bao ve
            var role89plus = []
            let role89final = role89.concat(role89plus)
            shuffle(role89final)
            for (var i = 0; i < role89final.length; i++) {
                document.writeln(i + 1, '. ', role89final[i], '<br>')
            }

        } else if (numberr == 9) { //5 dan, 2 soi, 1 tri, 1 bao ve
            var role89plus = [role[0]]
            let role89final = role89.concat(role89plus)
            shuffle(role89final)
            for (var i = 0; i < role89final.length; i++) {
                document.writeln(i + 1, '. ', role89final[i], '<br>')
            }
        } else if (numberr == 10) { //4 dan, 3 soi, 1 tri, 1 bao ve, 1 tho san
            var role89plus = [role[1], role[4]]
            let role89final = role89.concat(role89plus)
            shuffle(role89final)
            for (var i = 0; i < role89final.length; i++) {
                document.writeln(i + 1, '. ', role89final[i], '<br>')
            }
        } else if (numberr == 11) { //5 dan, 3 soi, 1 tri, 1 bao ve, 1 tho san
            var role89plus = [role[0], role[1], role[4]]
            let role89final = role89.concat(role89plus)
            shuffle(role89final)
            for (var i = 0; i < role89final.length; i++) {
                document.writeln(i + 1, '. ', role89final[i], '<br>')
            }
        } else if (numberr == 12) { //5 dan, 3 soi, 1 tri, 1 bao ve, 1 tho san,1 cupid
            var role89plus = [role[0], role[1], role[4], role[5]]
            let role89final = role89.concat(role89plus)
            shuffle(role89final)
            for (var i = 0; i < role89final.length; i++) {
                document.writeln(i + 1, '. ', role89final[i], '<br>')
            }
        } else if (numberr == 13) { //6 dan, 3 soi, 1 tri, 1 bao ve, 1 tho san,1 cupid
            var role89plus = [role[0], role[0], role[1], role[4], role[5]]
            let role89final = role89.concat(role89plus)
            shuffle(role89final)
            for (var i = 0; i < role89final.length; i++) {
                document.writeln(i + 1, '. ', role89final[i], '<br>')
            }
        } else if (numberr == 14) { //5 dan, 4 soi, 1 tri, 1 bao ve, 1 tho san,1 cupid,1 phu thuy
            var role89plus = [role[0], role[1], role[4], role[5], role[6], role[1]]
            let role89final = role89.concat(role89plus)
            shuffle(role89final)
            for (var i = 0; i < role89final.length; i++) {
                document.writeln(i + 1, '. ', role89final[i], '<br>')
            }
        } else if (numberr == 15) { //6 dan, 4 soi, 1 tri, 1 bao ve, 1 tho san,1 cupid,1 phu thuy
            var role89plus = [role[0], role[1], role[0], role[1], role[4], role[5], role[6]]
            let role89final = role89.concat(role89plus)
            shuffle(role89final)
            for (var i = 0; i < role89final.length; i++) {
                document.writeln(i + 1, '. ', role89final[i], '<br>')
            }
        } else if (numberr == 16) { //1 gia lang, 6 dan, 4 soi, 1 tri, 1 bao ve, 1 tho san,1 cupid,1 phu thuy
            var role89plus = [role[0], role[1], role[0], role[1], role[4], role[5], role[6], role[10]]
            let role89final = role89.concat(role89plus)
            shuffle(role89final)
            for (var i = 0; i < role89final.length; i++) {
                document.writeln(i + 1, '. ', role89final[i], '<br>')
            }
        } else if (numberr == 17) { //1 thoi sao, 1 gia lang, 6 dan, 4 soi, 1 tri, 1 bao ve, 1 tho san,1 cupid,1 phu thuy
            var role89plus = [role[8], role[0], role[1], role[0], role[1], role[4], role[5], role[6], role[10]]
            let role89final = role89.concat(role89plus)
            shuffle(role89final)
            for (var i = 0; i < role89final.length; i++) {
                document.writeln(i + 1, '. ', role89final[i], '<br>')
            }
        } else if (numberr == 18) { //1 phap su cam,1 thoi sao, 1 gia lang, 6 dan, 4 soi, 1 tri, 1 bao ve, 1 tho san,1 cupid,1 phu thuy
            var role89plus = [role[8], role[0], role[1], role[0], role[1], role[4], role[5], role[6], role[10]]
            let role89final = role89.concat(role89plus)
            shuffle(role89final)
            for (var i = 0; i < role89final.length; i++) {
                document.writeln(i + 1, '. ', role89final[i], '<br>')
            }
        } else if (numberr == 19) { //1 canh sat truong, 1 thoi sao, 1 gia lang, 8 dan, 4 soi, 1 tri, 1 bao ve, 1 tho san,1 cupid,1 phu thuy
            shuffle(role19plus)
            for (var i = 0; i < role19plus.length; i++) {
                document.writeln(i + 1, '. ', role19plus[i], '<br>')
            }
        } else if (numberr > 19) { //1 canh sat truong, 1 thoi sao, 1 gia lang, 8 dan, 4 soi, 1 tri, 1 bao ve, 1 tho san,1 cupid,1 phu thuy
            for (var i = 0; i < numberr - 19; i++) {
                role19_plusplus[i] = 'Dân làng'
            }
            let role19final = role19plus.concat(role19_plusplus)
            shuffle(role19final)
            for (var i = 0; i < role19final.length; i++) {
                document.write(i + 1, '. ', role19final[i], '<br>')
            }
        }
        document.write('<button type="submit" class="glow-on-hover"><a href="index.html">TRỞ LẠI TRANG CHỦ</a></button> ')
    } else {
        alert("Số lượng người chơi từ 6 - 23 người");
    }
}
