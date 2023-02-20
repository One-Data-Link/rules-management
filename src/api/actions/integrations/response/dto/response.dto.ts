import { ApiProperty } from "@nestjs/swagger";

export class ResponseDto {
    @ApiProperty()
    status:string;

    @ApiProperty()
    answer:string;

    constructor(status:string, answer:string){
        this.status=status;
        this.answer=answer;
    }


}