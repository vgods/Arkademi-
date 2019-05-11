function cetak_gambar() {
    const text = ['P','R','O','G','R','A','M','M','E','R'];
    text.forEach((v, i)=>{
        let out = ''
        text.forEach((val, j)=>{
            if(j === i || j === text.length - 1 - i)
                out += v+"  ";
            else out += "=  "        
        })
        console.log(out);
    })
}

cetak_gambar()