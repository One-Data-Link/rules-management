import { ApiProperty } from "@nestjs/swagger";

export class posttypeDto {
    @ApiProperty()
    type:string;

    constructor(type:string){
        this.type=type;
    }


}