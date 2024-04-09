function clearDisplay() {
    document.querySelector('.displayOut').innerText = '';
}

function appendToDisplay(value) {
    document.querySelector('.displayOut').innerText += value;
}


function convert(type) {
    const input = document.querySelector('.displayOut').innerText.trim();
    let result;
    switch (type) {
        case 'BIN_TO_DEC':
            result = parseInt(input, 2);
            break;
        case 'BIN_TO_HEX':
            result = parseInt(input, 2).toString(16).toUpperCase();
            break;
        case 'BIN_TO_OCT':
            result = parseInt(input, 2).toString(8);
            break;
        case 'DEC_TO_BIN':
            result = Number(input).toString(2);
            break;
        case 'DEC_TO_HEX':
            result = Number(input).toString(16).toUpperCase();
            break;
        case 'DEC_TO_OCT':
            result = Number(input).toString(8);
            break;
        case 'HEX_TO_BIN':
            result = parseInt(input, 16).toString(2);
            break;
        case 'HEX_TO_DEC':
            result = parseInt(input, 16);
            break;
        case 'HEX_TO_OCT':
            result = parseInt(input, 16).toString(8);
            break;
        case 'OCT_TO_BIN':
            result = parseInt(input, 8).toString(2);
            break;
        case 'OCT_TO_DEC':
            result = parseInt(input, 8);
            break;
        case 'OCT_TO_HEX':
            result = parseInt(input, 8).toString(16).toUpperCase();
            break;
        default:
            result = 'Invalid conversion type';
    }
    document.querySelector('.displayOut').innerText = result;
}
