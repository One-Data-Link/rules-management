import { ApiProperty } from "@nestjs/swagger";

export class CreateHeaderDto {
    @ApiProperty()
    idintegration:number;

    @ApiProperty()
    headerkey:string;

    @ApiProperty()
    headervalue:string;

    constructor(idintegration:number,headerkey:string, headervalue:string){
        this.idintegration=idintegration;
        this.headerkey=headerkey;
        this.headervalue=headervalue
    }


}