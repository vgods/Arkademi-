function cetak(banyak) {
    const kumpulanKarakter = []

    for(let i = 0; i < banyak; i++){
        const c = buatKarakter(32);
        console.log(c);
        kumpulanKarakter.push(c)
    }
    return kumpulanKarakter;
}

/**
 * Buat random karakter yang selalu berbeda disetiop pembuatannya berdasarkan waktu sekarang
 * @param panjang panjang dari karakter
 * @return String random karakter
 * @BATASAN panjang karakter tidak boleh kurang dari 13 dan tidak boleh lebih dari 65
 */

function buatKarakter(panjang) {
    if(panjang < 13)
        throw "Panjang tidak boleh kurang dari 13"
    if(panjang > 65)
        throw "Panjang tidak boleh lebih dari 65"

    const karakter = (new Date).getTime().toString();
    const huruf = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    
    if(karakter.length === panjang)
        return randomKarakter(karakter);
    if(karakter.length < panjang) {
        let char = ''
        for(let i = 0; i < panjang - karakter.length; i++){
            char += huruf[i]
        }
        return randomKarakter(karakter+char)
    }
}

function randomKarakter(karakter) {
    let char = karakter.split("");
    for(let i = 0; i < char.length; i ++){
        const r = Math.floor(Math.random() * (i + 1));
        const tmp = char[i];
        char[i] = char[r];
        char[r] = tmp;        
    }
    return char.join("");
}

cetak(5)