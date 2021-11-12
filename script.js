function warung()
{
    var catat = document.formwarung;
    var hargasatujam = parseInt(catat.satu.value) * parseInt(catat.satujamaa.value);
    var hargalimajam = parseInt(catat.lima.value) * parseInt(catat.limajamaa.value);
    var hargaroti= parseInt(catat.roti.value) * parseInt(catat.rotiaa.value);
    var hargajus = parseInt(catat.jus.value) * parseInt(catat.jusaa.value);
    var hargagoreng= parseInt(catat.goreng.value) * parseInt(catat.gorengaa.value);
    var hargasemua = hargasatujam + hargalimajam + hargaroti+ hargajus + hargagoreng;
    if (hargasemua > 50000)
    {
        catat.TotalBayar.value = hargasemua;
        catat.Diskon.value = 10000;
        catat.JumlahBayar.value = hargasemua - parseInt(catat.Diskon.value);
     }
     else
     {
        catat.TotalBayar.value = hargasemua;
        catat.Diskon.value = 0;
        catat.JumlahBayar.value = hargasemua;
    }   
}
function awal(){
document.formwarung.reset();
}



