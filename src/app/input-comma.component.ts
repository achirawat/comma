import { Component, Input } from '@angular/core';

@Component ({
    selector: 'comma-input',
    // template: `<input type="text" name="inputVal" [(ngModel)]='inputV' (keyup)="valueChange()" >`
    templateUrl: 'input-comma.component.html'
})

export class InputcommaComponent {
    @Input() inputV : string = ""; // กำหนด inputV เป็น string
    InputChange(): void {
        let noCommaV = this.inputV.replace(/,/g,""); // เอาตัวคั่นออก
        if (isNaN(Number(noCommaV)) && noCommaV != "-") { 
            this.inputV = "";
            return;
        } // เช็คว่า noCommaV เป็นค่าติดลบไหม
        let minusVal : number = noCommaV.indexOf("-"); // หาเครื่องหมายลบ
        var onlyNum : string;
        if(minusVal == 0){
            onlyNum = noCommaV.substring(1,noCommaV.length);
        }else{
            onlyNum = noCommaV;
        } // นับจำนวนตัวเลข
        this.inputV = "";
        var returnVal = "";
        for(var i = onlyNum.length; i-3 >= 0; i = i-3){
                returnVal = "," + onlyNum.substring(i-3, i) + returnVal;
        } // loop ใส่ , เริ่มนับจากตัวหลัง
        let exceedNumber = onlyNum.length % 3;
        if(exceedNumber == 0){
            returnVal = returnVal.substring(1, returnVal.length);
        }
        else{
            returnVal = onlyNum.substring(0, exceedNumber) + returnVal;
        }
        while(returnVal.length > 1 && (returnVal[0] == "0" || returnVal[0] == ",")){
            returnVal = returnVal.substring(1, returnVal.length); console.log("55 : "+ returnVal);
        }
        if(minusVal == 0){
            returnVal = "-" + returnVal;
        }
        this.inputV += returnVal;
        return;
    }
}