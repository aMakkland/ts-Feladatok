// 1.feladat
function DiakInfo (nev:string, csoport:number,tipus:boolean):string {
    if (tipus==true) {
        return nev+"[team"+ csoport+"] Junior Frontend";
    }
        return nev+"[team"+ csoport+"] Webfejlesztő";
    
}
document.write (DiakInfo("Minta Márton",10,true));

document.write (DiakInfo("<hr>Aki Valaki",10,false));

//2.feladat
function szovegesErtekeles(jegy:number):[string,string]{
    if(jegy==5)
    {
        return ["Példás","Példás"];
    }
    else if(jegy==4)
    {
        return ["Jó","Jó"];
    }
    else if(jegy==3)
    {
        return ["Közepes","Közepes"];
    }
    else if(jegy==2)
    {
        return ["Megfelelt","Megfelelt"];
    }
    else 
    {
        return ["Értékelhetetlen","Értékelhetetlen"];
    }
}
 var ertekeles=szovegesErtekeles(1)
document.write("<hr>A tanuló szorgalom értékelése:"+ertekeles[0]);
document.write("<hr>A tanuló magatartás értékelése:"+ertekeles[1]);

//3.feladat
function harommalOszthatoSzamok(tomb:number[]):number{
    let harommalOszthatokSzama: number=0;
    for(let i=0;i<tomb.length;i++){
        if(tomb[i]%3==0)
        {
            harommalOszthatokSzama++;
        }
    }
    return harommalOszthatokSzama;
}
document.write("<hr> Harommal osztható elemk száma a tömbben:"+harommalOszthatoSzamok([10,23,12,24,31,33,42,20]));