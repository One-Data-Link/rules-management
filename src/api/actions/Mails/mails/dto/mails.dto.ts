import { ApiProperty } from "@nestjs/swagger";

export class MailsDto {
    @ApiProperty()
    userID:number;

    @ApiProperty()
    to:string;

    @ApiProperty()
    subject:string;

    @ApiProperty()
    from:string;

    @ApiProperty()
    dateCreated:string;
    
    @ApiProperty()
    dateUpdated:string;
    
    @ApiProperty()
    template:string;
    
    constructor(userID:number, to:string, from:string, subject:string, dateCreated:string, dateUpdated:string, template:string){
        this.userID=userID;
        this.to=to;
        this.from=from;
        this.subject=subject;
        this.dateCreated=dateCreated;
        this.dateUpdated=dateUpdated;
        this.template=template;
    }
}