var kred, maash, illikFaiz, ayliqFaiz, ay, aylıqOdenish, esasOdenish, faizOdenish ,userAnswer, userInput = 0;
                
function inheritInput () {
    kred = parseFloat(document.getElementById("txtKred").value);
    maash = parseFloat(document.getElementById("txtMaash").value);
    illikFaiz = parseFloat(document.getElementById("txtIllikFaiz").value);
    illikFaiz=illikFaiz/100;
}
function calculatePayment() {
    ayliqFaiz = (illikFaiz / 12);
    // ay = Math.round((kred / (maash - (kred * ayliqFaiz))));
    esasOdenish = Math.round(kred / ay);
    faizOdenish = Math.round(kred*ayliqFaiz);
    aylıqOdenish = Math.round(esasOdenish +faizOdenish);
}

 function  showPayment(){

    alert(ay + " ay dalbadal ödüyeceysen.\n Aylıq ödəniş isə " + aylıqOdenish + " manat. \n Hər ay ödədiyinin əsas hissəsi: " + esasOdenish + " manat, \nFaizi isə aylıq " + faizOdenish + " manat olacey!")
 }
function register(){
    alert("Vse qeydiyyata aldım səni. Sabaha gə götür. Xeyirli olsun" )
}
function addNumber() {
    alert(" 'ƏDƏD' yaz!");
}
function addPositiveNumber() {
    alert("\nA kişi, \nMinimum Kredit 1000-dir bizdə.\nMaaşın azı 200 olmalıdır. \nDolya minimum 12%-dir. \n\nHansını düz yazmamısansa get dəyiş xanada.");
}

function checkCredit() {
    if (kred*0.1> maash*0.7) {
    
    //KREDIT VERILMIRSE OLAN CASE----------------
        alert("\n" + maash + " manat quru maaşa " + kred + " kredit harda var?!");
    userAnswer=confirm("Day sənsən, maaşına uyğun düzəməlli bir şey hesablayım?");
                if(userAnswer){
                    kred=maash*7;
                    ay=12;
                    calculatePayment();
                    showPayment();
                    userAnswer=confirm("Gücüm buna çatır.\n" + kred + " manat kredit qane edir?");
                if(userAnswer){
                    register();
                    return;
                } else {alert("Özün bilərsən, Saol getdim mən.")
                    return;
                    }
                    register();
                    return;
                } else {alert("Özün bilərsən, Saol getdim mən.")
                return;
                    }

            
    }  //KREDIT VERILEN CASE--------------------
        else {
        alert("\nOooo kələ! Babat maaşın var. Saba gə krediti verim. \nSəniyçün minimum 12 aydan hesablayaq da onda:");
        ay=12;
        calculatePayment();
        showPayment();

        userAnswer = confirm(ay + " aylıq qane eləyir səni?");
        
        if(userAnswer){
        register();
        return;
        
        } else {
            addNumber(); 
            userInput = prompt("\nNeçə aylıq istəyirsən bəs?");
                                 
            if (isNaN(userInput) || userInput==""){
                alert("Səhv yazdın! Gələn dəfə müsbət ədəd yaz")
                
            } else{
                ay=userInput;
                calculatePayment();
                showPayment();
                userAnswer=confirm("Alassan kredit?");
                if(userAnswer){
                    register();
                    return;
                } else {alert("Özün bilərsən, Saol getdim mən.")
                    return;
                
                    }
            } 
        }
            

    
        
    }
}  
function checkPositiveNumber(){
     if (kred<1000 && maash<200  && illikFaiz<0.12 ) {
        addPositiveNumber();
        
    } else if (kred<1000 && maash<200) {
        addPositiveNumber();
        
    } else if (kred<1000 && illikFaiz<0.12  ) {
        addPositiveNumber();
       
    } else if (maash<200 && illikFaiz<0.12 ) {
        addPositiveNumber();
        
    } else if (kred<1000 ) {
        addPositiveNumber();
        
    } else if (maash<200 ) {
        addPositiveNumber();
        
    } else if (illikFaiz<0.12 ) {
        addPositiveNumber();
        
    } else {
    checkCredit();
    return;        
    }   
    
}
function checkIsNaN(){
    if (isNaN(kred) && isNaN(maash)  && isNaN(illikFaiz) ) {
        addNumber();
        
    }else if (isNaN(kred) && isNaN(maash) ) {
        addNumber();
        
    }else if (isNaN(kred) && isNaN(illikFaiz) ) {
        addNumber();
        
    }else if (isNaN(illikFaiz) && isNaN(maash) ) {
        addNumber();
        
    }else if (isNaN(kred)) {
        addNumber();
        
    }else if (isNaN(maash)) {
        addNumber();
        
    }else if (isNaN(illikFaiz)) {
        addNumber();
        
    }else {
        checkPositiveNumber();
    }
}

function calculateOverall () {
        inheritInput();
        checkIsNaN();
    }
