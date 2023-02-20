import { ApiProperty } from "@nestjs/swagger";

export class templateDto {
    @ApiProperty()
    template:string;

    constructor(template:string){
        this.template=template;
    }


}