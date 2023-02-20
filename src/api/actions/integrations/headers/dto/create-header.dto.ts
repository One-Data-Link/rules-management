import { ApiProperty } from "@nestjs/swagger";

export class CreateHeaderDto {
    @ApiProperty()
    headerkey:string;

    @ApiProperty()
    headervalue:string;

    constructor(headerkey:string, headervalue:string){
        this.headerkey=headerkey;
        this.headervalue=headervalue
    }


}