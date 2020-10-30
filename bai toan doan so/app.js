let sodudoan = 0, sobimat = 0, bodem = 1, choitiep;
const max = 100, min = 1;
console.log("Chuong trinh doan so ngau nhien tu 1 den 100\n");
while (choitiep !== 0) {
    // srand(time(NULL));
    // sobimat = ;
    do {
        sodudoan = Number(prompt("Nhap so ban du doan: "));
        if (sodudoan > sobimat) {
            alert("Nhap so nho hon:  ");
            bodem += 1;
            console.log("so vua nhap la: " + sodudoan);
        }
        else if (sodudoan < sobimat) {
            alert(" Nhap so lon hon: ");
            bodem += 1;
            console.log("so vua nhap la: " + sodudoan);
        }
        else { console.log(" Chuc mung ban da nhap dung so bi mat sau " + bodem + " lan"); }
    }
    while (sodudoan != sobimat || sodudoan > 100 || bodem > 7);

    choitiep = Number(prompt("Neu muon choi tiep thi hay nhap 1 so khac khong:"))
}

