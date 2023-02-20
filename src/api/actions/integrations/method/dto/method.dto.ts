import { ApiProperty } from "@nestjs/swagger";

export class MethodDto {
    @ApiProperty()
    method:string;

    constructor(method:string){
        this.method=method;
    }


}