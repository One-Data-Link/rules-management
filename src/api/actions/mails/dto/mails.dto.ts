import { ApiProperty } from "@nestjs/swagger";

export class MailsDto {
    @ApiProperty()
    userid:number;

    @ApiProperty()
    tomail:string;

    @ApiProperty()
    subject:string;

    @ApiProperty()
    frommail:string;

    @ApiProperty()
    datecreated:string;
    
    @ApiProperty()
    dateupdated:string;
    
    @ApiProperty()
    templatemail:string;
    
    constructor(userID:number, to:string, from:string, subject:string, dateCreated:string, dateUpdated:string, template:string){
        this.userid=userID;
        this.tomail=to;
        this.frommail=from;
        this.subject=subject;
        this.datecreated=dateCreated;
        this.dateupdated=dateUpdated;
        this.templatemail=template;
    }
}